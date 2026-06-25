import { Sequelize } from "sequelize"
import {
    DB_DIALECT, 
    DB_HOST, 
    DB_NAME,
    DB_PASSWORD,
    DB_USER, 
    DB_PORT
    }
from "../config/config.js"

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT
});

export default sequelize;