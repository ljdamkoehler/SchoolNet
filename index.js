//Project Setup 

    // Requirments 
    const express = require('express');
    const path = require('path');
    const mongoose = require('mongoose');
    const ejsMate = require('ejs-mate');
    const methodOverride = require('method-override');
    const cookieSession = require('cookie-session');

    //Routers 
    const appointmentRouter = require('./routes/appointments/appointments');
    const authRouter = require('./routes/auth/auth');

    // Require mongoose models 
    const User = require('./models/user');
    const Appointment = require('./models/appointment');

    //use express 
    const app = express();

    //conect to mongoDB
    mongoose.connect('mongodb://localhost:27017/tutoring-site')

    //Confirm mongoose connection and catch any errors 
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", () => {
        console.log('Database connected');
    });

    //Set ejs as view engine and allow access to views from any dir
    app.engine('ejs', ejsMate);
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'))

    //Get express to pars the req body
    app.use(express.urlencoded({ extended: true }))
    // Use Method Override 
    app.use(methodOverride('_method'));

    // Use cookie sessions

    app.use(cookieSession({
        keys: ['kjhsaoiyks68s8a']
    }));

    //Use Routers 
    app.use(appointmentRouter);
    app.use(authRouter);

// End Project setup


//Home page route
app.get('/', (req, res) => {
    res.render('public_site/home');
});

//****User Routes****




//Have express listen on local port 3000
app.listen(3000, () => {
    console.log('Conncetion is open on port 3000');
})

