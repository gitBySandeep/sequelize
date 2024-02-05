import { Sequelize } from "sequelize";

const sequelize = new Sequelize("sequalize", "root", "root", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log("Database Connected");
    }).catch(err => {
        console.log("Database Connection Falied");
        console.log(err);
    })

export default sequelize;