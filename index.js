require('dotenv').config() // this allows to stash 'artificial env variables' in a file
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const server = express()
// 

//console.log(process.env.PORT)// undefined on my computer// but on heroku will have a port #
console.log(process.env.API_SECRET)

const PORT = process.env.PORT || 5000 // fall back is nice 
// const API_SECRET = process.env.API_SECRET

server.use(express.json())
server.use(cors())
server.use(morgan('dev'))

server.get('/', (req, res) => {
    res.send(`<h1>Web 45 Rocks</h1>`)
})
server.get('/api', (req, res) => {
    res.json({
        message: 'Web 45 is awesome'
    })
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})