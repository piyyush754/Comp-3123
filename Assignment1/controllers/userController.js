// controllers/userController.js

const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const User = require('../models/userModel');

// Signup Controller
exports.signup = async (req, res) => {
  // Handle validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      status: false, 
      errors: errors.array().map(err => err.msg) 
    });
  }

  const { username, email, password } = req.body;

  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ 
        status: false, 
        message: 'User already exists with this email.' 
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    user = new User({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({
      message: 'User created successfully.',
      user_id: user._id,
    });

  } catch (err) {
    console.error('Signup Error:', err.message);
    res.status(500).json({ 
      status: false, 
      message: 'Server error. Please try again later.' 
    });
  }
};

// Login Controller
exports.login = async (req, res) => {
  // Handle validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      status: false, 
      errors: errors.array().map(err => err.msg) 
    });
  }

  const { email, password } = req.body;

  try {
    // Find user
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ 
        status: false, 
        message: 'Invalid email or password.' 
      });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ 
        status: false, 
        message: 'Invalid email or password.' 
      });
    }

    res.status(200).json({
      message: 'Login successful.',
    });

  } catch (err) {
    console.error('Login Error:', err.message);
    res.status(500).json({ 
      status: false, 
      message: 'Server error. Please try again later.' 
    });
  }
};
