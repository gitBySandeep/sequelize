import { DataTypes } from "sequelize";
import sequelize from "../dbconnection/connection.js";

const User = sequelize.define("user",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull :false
    },
    email:{
        type: DataTypes.STRING,
        allowNull : false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull : false
    }
});

sequelize.sync()
.then(()=>{
    console.log("User table created");
}).catch(err=>{
    console.log("Something Wrong");
    console.log(err);
})

export default User;
