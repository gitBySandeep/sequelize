import sequelize from "../dbconnection/connection.js";
import { DataTypes } from "sequelize";

const Category = sequelize.define("category",{
     categoryName:{
         type: DataTypes.STRING,
         primaryKey : true
     }  
}); 

sequelize.sync({alter: true})
.then(() => {
    console.log("Table Created...");
})
.catch((err) => {
    console.log(err);
})

export default Category;

