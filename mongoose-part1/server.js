// require express
const express = require('express')

// create instance
const app = express ()

// bodyparser
app.use(express.json())

// require .env
require('dotenv').config()

// create PORT
const PORT = process.env.PORT || process.env.PORT2

// create server
app.listen(PORT, (err)=>{
    err ? console.log(err)
    : console.log(`Server is running at http://127.0.0.1:${PORT}`)
})

// require connect db function
const connect = require('./config/connectDB')
connect ()

// require contact route
app.use('/api/contacts', require('./routes/contact'))