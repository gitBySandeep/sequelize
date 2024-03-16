import { DataTypes } from "sequelize";
import sequelize from "../dbconnection/connection.js";
import disease from "./disease.model.js";
import Category from "./category.model.js";
const Yoga = sequelize.define("yoga", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    yoganame: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    benefits: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    instructions: {
        type: DataTypes.TEXT,
        allowNull: false,
    }, 
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    videoUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoryName:{
        type:DataTypes.STRING,
        references:{
            model:Category,
            key:'categoryName'
        }
    }
})


Category.hasMany(Yoga,{
    foreignKey: "categoryName"
}) 

Yoga.belongsTo(Category,{
    foreignKey:'categoryName',
})


sequelize.sync({})
    .then(() => {
        console.log("yoga table created");
    }).catch(err => {
        console.log("Something Wrong");
    })

export default Yoga;