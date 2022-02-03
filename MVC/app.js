const express = require('express');
const handb = require('express-handlebars');

const app = express();

app.set(express.static('/public'));
app.set(express.static('/views'));

//app.engine('handlebars', handb.engine);
app.set('view engine', 'handlebars');

app.get('/' , (req , res)=>{

   res.send("Ola mndo")

})

app.listen(3000, () => {
    console.log("Rodando na porta 3000");
})