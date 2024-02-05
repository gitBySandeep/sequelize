import { DataTypes } from "sequelize";
import sequelize from "../dbconnection/connection.js";

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
        allowNull: true,
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    videoUrl: {
        type: DataTypes.STRING,
        allowNull: true,
    }
})

sequelize.sync()
    .then(() => {
        console.log("yoga table created");
    }).catch(err => {
        console.log("Something Wrong");
    })

export default Yoga;