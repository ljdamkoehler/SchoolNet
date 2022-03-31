const mongoose = require('mongoose');
const { Schema } = mongoose;

const AppointmentSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        enum: ["30 mins", "45 mins", "1 hr", "90 mins", "2 hrs"]
    }
})

// Export an instance of the appointment model

module.exports = mongoose.model('Appointment', AppointmentSchema);

// I am still requiring name email and phone number, but I will prepopulate from the user info in the form.