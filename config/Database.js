import { Sequelize } from "sequelize";

const db = new Sequelize('db_fpeb','root','',{
    host:'localhost',
    dialect:'mysql'
});

export default db;
