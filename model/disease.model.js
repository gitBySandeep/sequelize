import sequelize from "../dbconnection/connection.js";
import { DataTypes } from "sequelize";
const disease = sequelize.define("disease",{
    diseaseName:{
        type : DataTypes.STRING,
        primaryKey:true,
        allowNull : false,
        // primaryKey : true,
    }
})

 
sequelize.sync({alter : true}) 
.then(()=>{
    console.log("success");
}).catch(err=>{
    console.log(err);
})

export default disease;