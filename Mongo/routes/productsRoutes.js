const express = require('express');
const router = require('express').Router()

const ProductController = require('../controllers/productsController')

router.get('/create', ProductController.create)
router.post('/create', ProductController.createPost)
router.post('/:id', ProductController.removeProduct)
router.get('/:id', ProductController.getProduct)
router.get('/', ProductController.showProducts)


module.exports  = router