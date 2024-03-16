import express, { request, response }  from "express";
import Product from "../model/product.model.js";
import  {validationResult}  from 'express-validator';

export const saveproduct = async (request,response,result)=>{

    try{
       let productList = request.body.products;

       for(let product of productList){
        let {id,title,description,price,discountPrice,rating,stock,thumbnail,brand} = product;
        let categoryname = product.category;
        let imageArray = "";
        for(let imageUrl of product.images)
        imageArray = imageArray + imageUrl + " ";

        await Product.create({
            id,title,description,price,discountPrice,rating,stock,thumbnail,brand,categoryname,imageArray
        })
       }
       return response.status(200).json({message : "product saved successfully"});
    }
    catch(err){
        console.log(err);
            return response.status(500).json({error : "Internal server error"});
    }
}


export const productlist = (request,response,next)=>{
      Product.findAll({raw : true})
      .then((result)=>{
        return response.status(200).json({message : " All product found successfully"});
      }).catch(err=>{
        return response.status(500).json({message : "Internal server error"});
      })
}

export const particularproduct = (request,response,next)=>{

    Product.findOne({where :{ id : request.body.id},raw : true})
    .then((result)=>{
        return response.status(200).json({message : " find product successfully"});
    }).catch(err=>{
        return response.status(500).json({message : "Internal server error"});
    })
}


