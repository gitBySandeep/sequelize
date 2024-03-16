import  express, { request, response }  from "express";
import Admin from "../model/admin.model.js";
import { validationResult } from "express-validator";
import { where } from "sequelize";

export const saveadmin = (request,response,next)=>{
    const error = validationResult(request);
    
    if (!error.isEmpty())
    return response.status(401).json({ error: error.array() });

     Admin.create({
        name : request.body.name,
        email : request.body.email,
        password : request.body.password,
     })
     .then((Result)=>{
        return response.status(200).json({message: "Admin signup success"})
     }).catch(err=>{
        // console.log(err);
        return response.status(500).json({message:"internal server error"})
     })
}


export const signinadmin = async (request, response, next) => {
    let email = request.body.email;
    let password = request.body.password;
     
    const errors = validationResult(request);
    if(!errors.isEmpty()){
          return response.status(401).json({error : errors.array()});
    }
    let admin = await Admin.findOne({ where: { email: email }, raw: true })
    if (admin) {
        if (Admin.checkPassword(password, admin.password)){
            return response.status(201).json({ message: " user Sign in Success", });
        }
        else{
            return response.status(401).json({ error: "Unauthorized user" });   
        }
    }
    else {
        return response.status(401).json({ error: "Unauthorized" });
    }
}

export const adminlist = (request,response,next)=>{
    Admin.findAll({raw:true})
    .then((result)=>{
        console.log(result);
        return response.status(200).json({message : " Admin list find successfuly"})
    }).catch((err)=>{
        return response.status(500).json({error: "Internal server error"});
    })
}

export const deleteadmin = (request,response,next)=>{
    const errors = validationResult(request);
    if (!errors.isEmpty())
        return response.status(401).json({ error: errors.array() });
    
        Admin.destroy({where : {id : request.body.id }, raw :true })
    .then((result)=>{
        return response.status(200).json({message : "Delete admin successfully"});
    }).catch(err=>{
        return response.status(500).json({message : " internal server error"});
    })
}