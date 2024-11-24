import app from './app';  // Default import
import authRoutes from './routes/authRoutes';
import { PORT } from './config/config';


app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});