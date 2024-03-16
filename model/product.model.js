import { Result } from "express-validator";
import sequelize from "../dbconnection/connection.js";
import  DataType  from "sequelize";
// import bcrypt from "bcryptjs"

const Product = sequelize.define("product",{
    id :{
        type : DataType.INTEGER,
        autoIncrement : true,
        primaryKey : true,
    },
    title:{
         type : DataType.STRING,
         allowNull : false,
    },
    description:{
        type : DataType.STRING, 
        allowNull : false,
    },
    price:{
        type : DataType.FLOAT,
    },
    discountPercentage:{
      type : DataType.FLOAT,
    },
    rating:{
      type : DataType.FLOAT,
    },
    stock : DataType.INTEGER,
    brand : DataType.STRING,
    categoryname: DataType.STRING,
    thumbnail:DataType.STRING,
    imageArray: DataType.STRING(1000)
});

sequelize.sync()
.then(()=>{
    console.log(Result);
}).catch(err=>{
    console.log(err);
})

export default Product;