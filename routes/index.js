const express = require('express');
const router = express.Router();
const Producto = require("../models/productos.js")
const Categoria= require("../models/categoria")

router.get("/productos/:id", function(req,res,next){
    Producto.findByPk(req.params.id)
        .then(productos=>{
            if(productos){
                res.json(productos)
            } else {
                res.sendStatus(404)
            }
        })
})
router.post("/productos", function(req,res,next){
    Producto.create(req.body)
        .then(producto => {
            res.status(201).json({
                producto,
                message:"Producto creado!", 
        })
    })
    .catch(err => res.sendStatus(500))
})
router.put("/productos/:id", function(req,res,next){
    Producto.update(req.body, {
        where: { id: req.params.id },
        returning: true,
        plain: true
      })
    .then(producto=>{
        res.json({
            producto: producto[1],
            message:"Producto actualizado",
        })
    })
    .catch(err => res.sendStatus(500))    
})
router.delete("/productos/:id", function(req,res,next){
    Producto.destroy({where:{id: req.params.id}})
    .then(()=>
        res.sendStatus(200))
})
router.get("/productos", (req, res, next) => {
    if (req.query.categoria) {
        Categoria.findOne({
            where: {
                nombre: req.query.categoria
            }
        })
        .then((data) => {
            Producto.findAll({
            where: {CategoriaId: data.dataValues.id}
        })
            .then((data) => {
                res.json(data)
            })            
        })    
    }    
    else {
        Producto.findAll()
        .then((data) => {res.json(data)})
        .catch(err => {res.sendStatus(500)})
    }
})

module.exports = router;