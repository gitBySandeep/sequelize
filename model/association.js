import Product from "./product.model.js";
import Category from "./category.model.js";
import Cart from "./cart.model.js";
import CartItems from "./cartitem.model.js";
import User from "./user.model.js";
import Yoga from "./yoga.model.js";
import disease from "./disease.model.js";

Category.hasMany(Product, {
    foreignKey: "categoryname"
});

Product.belongsTo(Category, {
    foreignKey: "categoryname", targetKey: "categoryName"
});


User.hasOne(Cart);
Cart.belongsTo(User);

Cart.belongsToMany(Product, { through: CartItems });
Product.belongsToMany(Cart, { through: CartItems });

// Category
export { Category, Product, User, Cart, CartItems };