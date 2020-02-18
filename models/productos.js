const S= require("sequelize")
const sequelize= require ("../db")
const Categorias = require ("./categoria")

class Producto extends S.Model {}
Producto.init({
    nombre: {
        type:S.STRING,
        allowNull: false,
    },
    precio: {
        type:S.INTEGER,
        allowNull: false
    },
    descripcion: {
        type: S.TEXT,
    },
    disponible: {
        type:S.BOOLEAN,
        defaultValue: true
    }

}
, { sequelize, modelName: "producto" });

Producto.prototype.truncate = function(){
    let contenido = this.getDataValue("content")
    this.content = contenido.slice(0, 20)
}

Producto.addHook('beforeCreate', () => {
    if(!this.disponible){
        this.nombre= this.nombre + " NO DISPONIBLE"
    }
  });

Producto.belongsTo(Categorias, {as: "Categoria"})
module.exports = Producto