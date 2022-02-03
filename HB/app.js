const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

app.use(express.static('public'));

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars');

app.get('/', (req, res) =>{

    const user = {
        name: "Alan",
        age: "20"
    }

    const color = "Vermelho";

    const itens = ['arroz', 'feijão', 'Macarrão']

    const boolean = true;

    res.render('home', { user: user, color, boolean, itens });
})

app.get('/post' , (req , res)=>{

    const itens = [
        {
            name: "item 1",
            price: "10"
        },
        {
            name: "item 2",
            price: "20"
        },
        {
            name: "item 3",
            price: "30"
        },
        {
            name: "item 4",
            price: "40"
        }
    ]

    res.render('post', { itens })

})

app.listen(3000, (err) =>{
    console.log('Rodando na porta 3000');
})