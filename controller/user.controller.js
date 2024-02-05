import { request } from 'http';
import User from '../model/user.model.js';
import { response } from 'express';

export const save = (request,response,next)=>{
    User.create({
        name : request.body.name,
        email : request.body.email,
        password : request.body.password
    }).then(result=>{
        return response.status(200).json({data : result.dataValues, message : "User created"});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: "Internal server Error"});
    })
}

export const Userlist = (request,response,next)=>{
  User.findAll({raw : true}) 
  .then(result=>{
    console.log(result);
  }) .catch(err=>{
    console.log(err);
  })
}

export const getUserByEmail = (request,response,next)=>{
    User.findOne({where:{email: request.body.email}, raw: true})
    .then(result=>{
     console.log(result);
    }).catch(err=>{
     console.log(err);
    })
 }

 export const deleteuser = (request,response,next)=>{
    User.destroy({where:{id: request.body.id},raw : true})
    .then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })
 }

 export const updateUser = (request,response,next)=>{
     User.update({password:request.body.password},{where:{email : request.body.email},raw : true}).then(result=>{
        console.log(result);
     }).catch(err=>{
        console.log(err);
     })
 }