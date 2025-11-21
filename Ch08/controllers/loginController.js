const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

//@desc Get login page
//@route GET /
const getLogin = (req, res) => {
    res.render("home");
};

const loginUser = asyncHandler(async(req, res) => {
    const { username, password } = req.body;
    if( username === 'admin' && password === "12345" ) {
        res.send("login Success");
    } else {
        res.send("login Failed");
    }
});

//@route GET /register
const getRegister = (req, res) => {
    res.render("register");
};

//@route POST /register
const registerUser = asyncHandler(async(req, res) => {
    const { username, password, password2 } = req.body;

    if ( password === password2 ) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({username, password: hashedPassword});
        res.status(201).json({ message: "Register successful", user });
    } else {
        res.send("Register Failed");
    }
});

module.exports = { 
    getLogin, 
    loginUser,
    getRegister,
    registerUser
};
