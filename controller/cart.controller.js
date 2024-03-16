import CartItems from "../model/cartitem.model.js";
import { Result, validationResult } from "express-validator";
// import Cart from "../model/cart.model.js";
import sequelize from "../dbconnection/connection.js";
import Product from "../model/product.model.js";
import { request, response } from "express";

import Cart from "../model/cart.model.js"

export const fetchCartItems = (request, response, next) => {
    Cart.findAll({
        raw: true, where: { userId: request.params.userId * 1 },
        include: [{ model: Product, required: true }]
    })
        .then((result) => {
            return response.status(200).json({ data: result });
        }).catch(err => {
            console.log(err);
            return response.status(500).json({ error: "Internal Server error" });
        })
}

export const addToCart = async (request, response, next) => {
    let transection = await sequelize.transaction();
    try {
        const errors = validationResult(request);
        if (!errors.isEmpty())
            return response.status(401).json({ message: " Bad request",errors });
        let { userId, productId } = request.body;
        let cart = await Cart.findOne({ raw: true, where: { userId: userId * 1 } });
        if (cart) {
            let isExists = !! await CartItems.findOne({ raw: true, where: { cartId: cart.id, productId } });
            if (isExists)
                return response.status(200).json({ message: "product is  already added in cart" });

            await CartItems.create({ cartId: cart.id, productId }, { transection });
            await transection.commit();
            return response.status(201).json({ message: 'Product successfully added into cart' })
        }
        else {
            cart = await Cart.create({ userId: userId * 1 }, { transection })
                .then(result => { return result.dataValues });
                console.log(cart);
                
                await CartItems.create({ cartId: cart.id, productId: productId }, { transection })
                .then(result => { return result.dataValues });
                
                await transection.commit();
                return response.status(201).json({ message: "Item successfully added into cart" })
        }
    }
    catch (err) {
        await transection.rollback();
        console.log(err);
        return response.status(500).json({ error: 'Internal server error....' });
    }
}

