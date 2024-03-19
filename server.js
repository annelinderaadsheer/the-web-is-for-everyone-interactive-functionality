console.log('Hier komt je server')

// import express
import express from 'express'
// import helpers < fetch ophalen
import fetchjson from './helpers/fetch-json.js'

// express aanmaken
// public folder
// post data mogelijk maken
// views
const app = express()
app.set('view engine', ejs)
app.set('views', './views')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))

// route op /
// https://redpers.nl/wp-json/wp/v2/posts
// parsen naar index.ejs

// detai route op /article/:slug
// data ophalen van: https://redpers.nl/wp-json/wp/v2/posts/?slug-red-pers-zoekt
// parcen nar article.ejs

// start express op 
