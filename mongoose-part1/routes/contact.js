// require express
const express = require("express")
const { test, addContact, getContacts, getById, deleteContact, editContact } = require("../controllers/contact")

// require Router
const router = express.Router()

// test Route
router.get("/test", test)

// add contact route
router.post('/add_contact', addContact)

// get contacts
router.get('/getContacts', getContacts)

// get contact by id
router.get('/getContactById/:_id', getById)

// delete contact
router.delete('/deleteContact/:_id', deleteContact)

// edit contact
router.put('/editContact/:_id', editContact)

// export router
module.exports = router