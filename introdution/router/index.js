const router = require('express').Router();
const path = require('path');
const base = path.join(__dirname, '../views');

router.get('/:id', (req, res) =>{

	const id = req.params.id;
	console.log(`Usuario: ${id}`);

	res.sendFile(`${base}/user.html`);
})

module.exports = router;