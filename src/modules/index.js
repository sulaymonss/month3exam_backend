const router = require('express').Router()

const categories = require('./categories/categories')
const foods = require('./foods/foods')
const nodemailer = require('./nodemailer/nodemailer')
const restaurants = require('./restaurants/restaurants')

router
    .get('/', categories.GET)
    .get('/restaurants', restaurants.GET)
    .get('/foods', foods.GET)
    .post('/order', nodemailer.GET_MAIL_INFO)

module.exports = router