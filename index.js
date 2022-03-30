//Project Setup 

    // Requirments 
    const express = require('express');
    const path = require('path');
    const mongoose = require('mongoose');

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
// End Project setup





//Home page route
app.get('/', (req, res) => {

});

//****User Routes****

//signup route

app.get('/signup', () => {
    
});

//signin route
app.get('/signin', () => {
    
});

//signout route
app.get('/signout', () => {
    
});


