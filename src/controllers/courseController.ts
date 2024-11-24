import { Request, Response } from 'express';
import { Course } from '../models/Course';  // Assuming you have a Course model

// Create a new course
export const createCourse = async (req: Request, res: Response) => {
  try {
    const { title, description, instructor, price, category } = req.body;
    
    // Validate input
    if (!title || !description || !instructor || !price || !category) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newCourse = new Course({
      title,
      description,
      instructor,
      price,
      category,
    });

    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error while creating course' });
  }
};

// Get all courses
export const getCourses = async (req: Request, res: Response) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error while fetching courses' });
  }
};

// Get a course by ID
export const getCourseById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id);

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.status(200).json(course);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error while fetching course' });
  }
};

// Update a course
export const updateCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, instructor, price, category } = req.body;

    const updatedCourse = await Course.findByIdAndUpdate(
      id,
      { title, description, instructor, price, category },
      { new: true }
    );

    if (!updatedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.status(200).json(updatedCourse);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error while updating course' });
  }
};

// Delete a course
export const deleteCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedCourse = await Course.findByIdAndDelete(id);

    if (!deletedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error while deleting course' });
  }
};