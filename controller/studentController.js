import Student from "../models/Student.js";

// Add a new student
export const addStudent = async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    const savedStudent = await newStudent.save();

    res.status(201).json({
      message: "Student added successfully",
      student: savedStudent
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to add student",
      error: error.message
    });
  }
};

// Get all students
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch students",
      error: error.message
    });
  }
};