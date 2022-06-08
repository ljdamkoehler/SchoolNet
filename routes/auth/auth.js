const express = require('express');

const router = express.Router();

const User = require('../../models/user');

//Signup Routes 

//Signup GET route
router.get('/signup', (req, res) => {
    if (req.session.userId) {
        res.send('You must signout to make a new account!');
    } else {
        res.render('users/signup');
    }
});

//Signup POST route 
router.post('/signup', async (req, res) => {
    const user = new User(req.body.user);
    await user.save();
    req.session.userId = user._id;
    res.send('New user made!');
});

//Signin Routes

//Signin GET route
router.get('/signin', (req, res) => {
    res.render('users/signin');

});

//Signin POST route
router.post('/signin', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (password != user.password) {
        return res.render('users/signin');
    } else {
        req.session.userId = user._id;
        res.send('You are signed in!');
    }
    

    
});

//Signout route
router.get('/signout', (req, res) => {
    req.session.userId = null;
    res.send('You are logged out!')
});


module.exports = router;