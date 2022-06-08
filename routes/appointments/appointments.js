//Require express and set a router 
const express = require('express');

const router = express.Router();

// Require needed mongoose models 

const User = require('../../models/user');

const Appointment = require('../../models/appointment');

//Appointment Form Page GET Route
router.get('/appointment', async (req, res) => {
    if (!req.session.userId) {
        res.send('You must be signed in to make an appointment!')
    } else {
        const id = req.session.userId;
        const user = await User.findById(id);
        res.render('users/appointments/makeAppointment', { user });
    }
});

//Appointment Form Page POST Route
router.post('/appointment', (req, res) => {

});

//Appointment Show Route
router.get('/appointment/:id', (req, res) => {

});

//Appointment Edit Route

router.patch('/appointment/:id', (req, res) => {

});

//Appointment Delete Route 

router.delete('/appointment/:id', (req, res) => {

});

//Export router 

module.exports = router;