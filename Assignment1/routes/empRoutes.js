const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const empController = require('../controllers/empController');

// Get All Employees
router.get('/employees', empController.getAllEmployees);

// Create New Employee
router.post(
  '/employees',
  [
    check('first_name', 'First name is required').notEmpty(),
    check('last_name', 'Last name is required').notEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('position', 'Position is required').notEmpty(),
    check('salary', 'Salary must be a number').isNumeric(),
    check('date_of_joining', 'Date of joining must be a valid date').isISO8601(),
    check('department', 'Department is required').notEmpty(),
  ],
  empController.createEmployee
);

// Get Employee by ID
router.get('/employees/:eid', empController.getEmployeeById);

// Update Employee Details
router.put(
  '/employees/:eid',
  [
    // Optional validation for updatable fields
    check('position', 'Position must be a string').optional().isString(),
    check('salary', 'Salary must be a number').optional().isNumeric(),
  ],
  empController.updateEmployee
);

// Delete Employee by ID
router.delete('/employees', empController.deleteEmployee);

module.exports = router;
