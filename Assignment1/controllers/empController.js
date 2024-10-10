// controllers/empController.js

const { validationResult } = require('express-validator');
const Employee = require('../models/empModel');

// Get All Employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().select('-__v');
    res.status(200).json(employees);
  } catch (err) {
    console.error('Get All Employees Error:', err.message);
    res.status(500).json({ 
      status: false, 
      message: 'Server error. Please try again later.' 
    });
  }
};

// Create New Employee
exports.createEmployee = async (req, res) => {
  // Handle validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      status: false, 
      errors: errors.array().map(err => err.msg) 
    });
  }

  try {
    // Check if employee exists
    const existingEmployee = await Employee.findOne({ email: req.body.email });
    if (existingEmployee) {
      return res.status(400).json({ 
        status: false, 
        message: 'Employee already exists with this email.' 
      });
    }

    // Create employee
    const employee = new Employee(req.body);
    await employee.save();

    res.status(201).json({
      message: 'Employee created successfully.',
      employee_id: employee._id,
    });

  } catch (err) {
    console.error('Create Employee Error:', err.message);
    res.status(500).json({ 
      status: false, 
      message: 'Server error. Please try again later.' 
    });
  }
};

// Get Employee by ID
exports.getEmployeeById = async (req, res) => {
  const { eid } = req.params;

  try {
    const employee = await Employee.findById(eid).select('-__v');
    if (!employee) {
      return res.status(404).json({ 
        status: false, 
        message: 'Employee not found.' 
      });
    }
    res.status(200).json(employee);
  } catch (err) {
    console.error('Get Employee by ID Error:', err.message);
    res.status(500).json({ 
      status: false, 
      message: 'Server error. Please try again later.' 
    });
  }
};

// Update Employee Details
exports.updateEmployee = async (req, res) => {
  const { eid } = req.params;

  // Handle validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      status: false, 
      errors: errors.array().map(err => err.msg) 
    });
  }

  try {
    const employee = await Employee.findByIdAndUpdate(eid, req.body, { new: true });
    if (!employee) {
      return res.status(404).json({ 
        status: false, 
        message: 'Employee not found.' 
      });
    }
    res.status(200).json({ 
      message: 'Employee details updated successfully.' 
    });
  } catch (err) {
    console.error('Update Employee Error:', err.message);
    res.status(500).json({ 
      status: false, 
      message: 'Server error. Please try again later.' 
    });
  }
};

// Delete Employee by ID
exports.deleteEmployee = async (req, res) => {
  const { eid } = req.query;

  if (!eid) {
    return res.status(400).json({ 
      status: false, 
      message: 'Employee ID (eid) is required as a query parameter.' 
    });
  }

  try {
    const employee = await Employee.findByIdAndDelete(eid);
    if (!employee) {
      return res.status(404).json({ 
        status: false, 
        message: 'Employee not found.' 
      });
    }
    res.status(204).send(); // No Content
  } catch (err) {
    console.error('Delete Employee Error:', err.message);
    res.status(500).json({ 
      status: false, 
      message: 'Server error. Please try again later.' 
    });
  }
};
