import app from './app'; // Default import
import authRoutes from './routes/authRoutes'; // Authentication routes
import courseRoutes from './routes/courseRoutes'; // Course-related routes
import userRoutes from './routes/userRoutes'; // User-related routes
import { PORT } from './config/config';

// Mount the authentication routes
app.use('/api/auth', authRoutes);

// Mount the course-related routes
app.use('/api/courses', courseRoutes);

// Mount the user-related routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});