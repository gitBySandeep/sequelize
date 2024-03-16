import User from '../model/user.model.js';
import { validationResult } from 'express-validator';
import jwt from "jsonwebtoken";

export const save = (request, response, next) => {

    const errors = validationResult(request);
    if (!errors.isEmpty())
        return response.status(401).json({ error: errors.array() });
      
        // let password = request.body.password;
        // let saltkey = bcrypt.genSaltSync(10);
        // let encryptedPassword = bcrypt.hashSync(password,saltkey);
        console.log(request.body);

    User.create({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
        contactnumber: request.body.contactnumber,
    }).then(result => {
        return response.status(200).json({ data: result.dataValues, message: "User created" });
    }).catch(err => {
        console.log(err);
        return response.status(500).json({ error: "Internal server Error" });
    })
}

export const signIn = async (request, response, next) => {
    let email = request.body.email;
    let password = request.body.password;
     
    const errors = validationResult(request);
    if(!errors.isEmpty()){
          return response.status(401).json({error : errors.array()});
    }
    let user = await User.findOne({ where: { email: email }, raw: true })
    if (user) {
        if (User.checkPassword(password, user.password)){
            let payload = ({subject : password});
            let token = jwt.sign(payload,"ddjfhdfjdklfjlfjsklffjdfdjfdfd");
            console.log(user.password);
            return response.status(201).json({ message: " user Sign in Success",token:token });
        }
        else{
            return response.status(401).json({ error: "Unauthorized user" });   
        }
    }
    else {
        return response.status(401).json({ error: "Unauthorized" });
    }
}

export const Userlist = (request, response, next) => {
    User.findAll({ raw: true })
        .then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        })
}

export const getUserByEmail = (request, response, next) => {

    const errors = validationResult(request);
    if (!errors.isEmpty())
        return response.status(401).json({ error: errors.array() });
  
    User.findOne({ where: { email: request.body.email }, raw: true })
        .then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        })
}

export const deleteuser = (request, response, next) => {
    const errors = validationResult(request);
    if (!errors.isEmpty())
        return response.status(401).json({ error: errors.array() });
    
    User.destroy({ where: { id: request.params.id }, raw: true })
        .then(result => {
            console.log(result);
        }).catch(err => {
            console.log(err);
        })
}

export const updateUser = (request, response, next) => {
    const errors = validationResult(request);
    if (!errors.isEmpty())
        return response.status(401).json({ error: errors.array() });
    
    User.update({ name: request.body.name }, { where: { email: request.body.email }, raw: true }).then(result => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    })
}

export const addcolumn = async (request,response,next)=>{
    try{
        let queryinterface = sequelize.getQueryInterface();
        await queryinterface.addColumn('users','contactnumber',{
            type: DataTypes.STRING,
            allowNull: true
        });
        
        User.create({
            contactnumber: request.body.contactnumber,
        })
  return response.status(200).json({message:"column added successfully"});
    }
    catch(err){
        console.log(err);
        return response.status(500).json({error: "Internal server error"});
    }
}

// export const updateAll = async (request,response,next)=>{
        
// }