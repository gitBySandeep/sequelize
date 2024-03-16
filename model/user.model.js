import { DataTypes } from "sequelize";
import sequelize from "../dbconnection/connection.js";
import bcrypt from "bcryptjs";

const User = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            let saltkey = bcrypt.genSaltSync(10);
            let encryptedPassword = bcrypt.hashSync(value, saltkey);
            this.setDataValue("password", encryptedPassword);
        }
    },
    contactnumber: {
        type: DataTypes.STRING,
        allowNull: false
    }
    // contactnumber:{
    //     type: 
    // }

},{
    indexes:[
        {
            unique:true,
            fields:['email','contactnumber'] 
        }
    ]
});

User.checkPassword = (originalPassword, encryptedPassword) => {
    console.log("check password called");
    return bcrypt.compareSync(originalPassword, encryptedPassword);
}

sequelize.sync()
    .then(() => {
        console.log("User table created");
    }).catch(err => {
        console.log("Something Wrong");
        console.log(err);
    })

export default User;
