import { request, response } from "express";
import Category from "../model/category.model.js";
import Product from "../model/product.model.js";
// import { Result } from "express-validator";

export const savecategory = async (request,response,next)=>{
    try{
        console.log(request.body);
     let categoryList = request.body;
     for(let category of categoryList)
     await Category.create({categoryName : category});
    return response.status(200).json({message : " All category saved.."})
    }
    catch(err){
        console.log(err);
        return response.status(500).json({error : "Internal server error" });
    }
}

export const fetchCategory = (request,response,next)=>{
    Category.findAll({
        include:[{model : Product , required : true}]
    }).then((Result)=>{
        return response.status(200).json({categories : Result})
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error : "Internal server error"});
    })
}
