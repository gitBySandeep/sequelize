import { request, response } from "express";
import Yoga from "../model/yoga.model.js";
import { validationResult } from "express-validator";

export const saveYoga = (request, response, next) => {

    // console.log(request);
    console.log(request.files);

    let errors = validationResult(request);
    if (!errors.isEmpty())
        return response.status(401).json({ errors: errors.array() });

    let imageUrl = "image/" + request.files.imageUrl[0].filename;
    let videoUrl = "video/" + request.files.videoUrl[0].filename;
    console.log(imageUrl);
    console.log(videoUrl);  
    Yoga.create({
        yoganame: request.body.yoganame,
        benefits: request.body.benefits,
        instructions: request.body.instructions,
        imageUrl,
        videoUrl,
        categoryName : request.body.categoryName,
    })
        .then(result => {
            return response.status(200).json({ Message: "Data Inserted", data: result })
        })
        .catch(error => {
            console.log(error);
            return response.status(500).json({ error: "Internal Server Error" })
        })
}

export const viewallyoga = (request, response, next) => {
    Yoga.findAll({ raw: true })
        .then(result => {
            return response.status(200).json({ Message: "Data find successfully", data: result }) 
        }).catch(error => {
            console.log(error);
            return response.status(500).json({ error: "Internal Server Error" })
        })
}

export const viewparticularyoga = (request, response, next) => {
    Yoga.findOne({ where: { yoganame: request.body.yoganame }, raw: true })
        .then(result => {
            return response.status(200).json({ Message: "Data find successfully", data: result }) 
        }).catch(err => {
            return response.status(500).json({ error: "Internal Server Error" })
        })
}

export const deleteyoga = (request, response, next) => {
    Yoga.destroy({ where: { id: request.params.id }, raw: true })
        .then(result => {
            return response.status(200).json({ Message: "Data delete successfully", data: result }) 
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server Error" })
        })
}

export const updateyoga = (request,response,next)=>{
    const errors = validationResult(request);
    if(!errors.isEmpty())
    return response.status(401).json({ error: errors.array() });
    Yoga.update({benefits: request. body.benefits,instructions: request.body.instructions,imageUrl: request.body.imageUrl, videoUrl: request.body.videoUrl},{where :{yoganame: request.body.yoganame},raw:true})
    .then(result=>{
        return response.status(200).json({Message: " update yoga successfully"});
    }).catch(err=>{
        return response.status(500).json({Message: "Internal server Error"});
    })
}
