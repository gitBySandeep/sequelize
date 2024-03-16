import sequelize from "../dbconnection/connection.js";
import { DataTypes } from "sequelize";
import bcrypt from "bcryptjs";

const Admin = sequelize.define("admin", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            let saltkey = bcrypt.genSaltSync(10);
            let encryptedPassword = bcrypt.hashSync(value, saltkey);
            this.setDataValue("password", encryptedPassword)
        }
    }
})

Admin.checkPassword = (originalPassword, encryptedPassword) => {
    console.log("check password called");
    return bcrypt.compareSync(originalPassword, encryptedPassword);
}

sequelize.sync()
    .then(() => {
        console.log();
    }).catch(err => {
        console.log(err);
    })

export default Admin;