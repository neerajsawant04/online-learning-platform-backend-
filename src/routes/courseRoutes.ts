import { Router } from 'express';
import * as courseController from '../controllers/courseController';  // Import controller functions

const router = Router();


router.post('/courses', courseController.createCourse);


router.get('/courses', courseController.getCourses);


router.get('/courses/:id', courseController.getCourseById);


router.put('/courses/:id', courseController.updateCourse);


router.delete('/courses/:id', courseController.deleteCourse);

export default router;