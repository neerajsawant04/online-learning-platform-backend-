import express, { Request, Response } from 'express';
import cors from 'cors';
import connectDB from './config/db';
import { PORT } from './config/config';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

export default app;


connectDB();

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('API is running');
});


app.use((err: any, req: Request, res: Response, next: express.NextFunction) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({ message });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));