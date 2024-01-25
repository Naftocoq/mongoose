// require mongoose
const mongoose = require ('mongoose')

// function connect to db
const connect = async() => {
    try {
        await  mongoose.connect(process.env.DB_URI)
        console.log('Connected to DB successfully !')
    } catch (error) {
        console.log(error)
    }
}

//export function connect
module.exports = connect