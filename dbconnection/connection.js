import { Sequelize } from "sequelize";

const sequelize = new Sequelize("testingayurveda", "root", "root", {
    host: 'localhost',
    dialect: 'mysql',
    timezone : '+05:30'
});

sequelize.authenticate()
    .then(() => {
        console.log("Database Connected");
    }).catch(err => {
        console.log("Database Connection Falied");
        console.log(err);
    })

export default sequelize;