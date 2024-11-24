import express from 'express';
import { 
  registerUser, 
  loginUser, 
  getUserProfile, 
  updateUserProfile 
} from '../controllers/userController'; // Ensure these are properly exported from userController
import { protect } from '../MidWar/midwar'; // Ensure this module and its type declarations exist

const router = express.Router();

// User registration
router.post('/register', registerUser);

// User login
router.post('/login', loginUser);

// Get user profile (Protected route)
router.get('/profile', protect, getUserProfile);

// Update user profile (Protected route)
router.put('/profile', protect, updateUserProfile);

export default router;