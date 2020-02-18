const db = require("./db")
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const app = express();
app.set('view engine', 'html'); 
app.use(morgan('tiny'));
app.use("/",routes)
app.use(function (err, req, res, next) {
    console.error(err);
    res.status(err.status || 500).send(err.message);
});
db.sync({ logging: false, force: false })
    .then(function () {
        app.listen(3000, function () {
            console.log('Server is listening on port 3000!');
        });
    })
.catch(console.error)