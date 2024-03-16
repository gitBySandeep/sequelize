import { response } from "express"
import jwt from "jsonwebtoken"

export let verifytoken = async (request, response, next) => {
    try {
        let token = request.headers.authorization;
        console.log(token);
        token = token.split(" ")[1];
        jwt.verify(token, "ddjfhdfjdklfjlfjsklffjdfdjfdfd");
        next();
    }
    catch (err) {
        console.log(err);
        return response.status(401).json({ error: "Unauthorized access" ,err });
    }
};