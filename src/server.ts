import app from './app'; // Default import
import authRoutes from './routes/authRoutes'; // Authentication routes
import courseRoutes from './routes/courseRoutes'; // Course-related routes
import { PORT } from './config/config';

// Mount the authentication routes
app.use('/api/auth', authRoutes);

// Mount the course-related routes
app.use('/api/courses', courseRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});