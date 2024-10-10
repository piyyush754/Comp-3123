const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  first_name: { 
    type: String, 
    required: [true, 'First name is required'], 
    trim: true 
  },
  last_name: { 
    type: String, 
    required: [true, 'Last name is required'], 
    trim: true 
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'], 
    unique: true, 
    trim: true,
    lowercase: true,
  },
  position: { 
    type: String, 
    required: [true, 'Position is required'], 
    trim: true 
  },
  salary: { 
    type: Number, 
    required: [true, 'Salary is required'], 
    min: [0, 'Salary must be positive'] 
  },
  date_of_joining: { 
    type: Date, 
    required: [true, 'Date of joining is required'] 
  },
  department: { 
    type: String, 
    required: [true, 'Department is required'], 
    trim: true 
  },
  created_at: { 
    type: Date, 
    default: Date.now 
  },
  updated_at: { 
    type: Date, 
    default: Date.now 
  },
});

// Update 'updated_at' before saving
EmployeeSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

module.exports = mongoose.model('Employee', EmployeeSchema);
