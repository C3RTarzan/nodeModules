const express = require('express');
const app = express();
const user = require('./router');

const path = require('path');
const base = path.join(__dirname, 'views');


app.use(express.static('public'));


app.use('/user', user);

app.get('/', (req, res) =>{
	res.sendFile(`${base}/index.html`);
})

app.use( (req, res, next) =>{
	res.status(404).sendFile(`${base}/404.html`);
})

app.listen(3000, () =>{
	console.log('Rodando na porta 3000');
})