const S= require("sequelize")
const sequelize= require ("../db")

class Categorias extends S.Model {}
Categorias.init({
    nombre: {
        type:S.STRING,
    }
}
, { sequelize, modelName: "categoria" });

module.exports = Categorias