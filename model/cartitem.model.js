import sequelize from "../dbconnection/connection.js";
import { DataTypes } from "sequelize";

const CartItem = sequelize.define("cartItem", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
});

    CartItem.sync()
    .then(()=>{
        console.log("cartitems table created");
     }).catch(err=>{
        console.log(err);
     })

export default CartItem;