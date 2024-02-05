import Yoga from "../model/yoga.model.js";

export const saveYoga = (request,response,next)=>{
   
    Yoga.create({
        yoganame:request.body.yoganame,
        benefits:request.body.benefits,
        instructions:request.body.instructions,
        imageUrl:"sfsdfg",
        videoUrl:"sccjsj"

    })
    .then(result=>{
        return response.status(200).json({Message:"Data Inserted",data:result})
    })
    .catch(error=>{
        console.log(error);
        return response.status(500).json({error:"Internal Server Error"})
    })
}