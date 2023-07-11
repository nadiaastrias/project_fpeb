import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} =Sequelize;

const Dosen = db.define('dosen',{
    name:DataTypes.STRING,
    description:DataTypes.STRING,
    link_a:DataTypes.STRING,
    link_b:DataTypes.STRING,
    contact:DataTypes.STRING,
    prodi:DataTypes.STRING,
    photo_name:DataTypes.STRING,
    photo_data:DataTypes.BLOB
},{
    freezeTableName:true
});

export default Dosen;

(async()=>{
    await db.sync();
})();