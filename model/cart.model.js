import { DataTypes } from "sequelize";
import sequelize from "../dbconnection/connection.js";

const Cart = sequelize.define("cart", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    }
});

Cart.sync()
    .then(() => {
        console.log("cart table created");
    }).catch(err => {
        console.log(err);
    })

export default Cart;