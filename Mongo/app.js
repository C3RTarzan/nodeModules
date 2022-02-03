const express = require('express')
const handb = require('express-handlebars')
const mongodb = require('mongodb');

const app = express();

const conn = require('./db/conn')

const productsRoutes = require('./routes/productsRoutes')

app.engine('handlebars', handb.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extends: true
    })
)

app.use(express.static('public'))

app.use(express.json());

app.use('/products', productsRoutes)

app.get('/', (req, res) =>{
    res.render('home')
})

app.listen(3000, () =>{
    console.log("Rodando na porta 3000");
})