const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        trim: true
    },
    password: {
        type: String 
    },
    userType: {
        type: String,
        enum: ['Parent', 'Student', 'Other']
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        trim: true
    },
    canBeCalled: {
        type: String,
        required: true,
        default: false 
    },
    canBeTexted: {
        type: String,
        required: true,
        default: false 
    },
    preferredName: {
        type: String
    }
})

//_id property will be added by mongoose by default 

// Export and instance of the User Model 
module.exports = mongoose.model('User', UserSchema);