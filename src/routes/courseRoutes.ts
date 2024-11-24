import { Router, Request, Response } from 'express';
import { createCourse, getCourses, getCourseById, updateCourse, deleteCourse } from '../controllers/courseController';

const router = Router();

// Define routes with proper type handling
router.post('/', async (req: Request, res: Response) => {
    try {
        await createCourse(req, res);
    } catch (error) {
        res.status(500).json({ message: 'Error creating course', error });
    }
});

router.get('/', async (req: Request, res: Response) => {
    try {
        await getCourses(req, res);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching courses', error });
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        await getCourseById(req, res);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching course by ID', error });
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    try {
        await updateCourse(req, res);
    } catch (error) {
        res.status(500).json({ message: 'Error updating course', error });
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        await deleteCourse(req, res);
    } catch (error) {
        res.status(500).json({ message: 'Error deleting course', error });
    }
});

export default router;