import express from 'express';
import carsRouter from './Routes/CarRouter';
import motorcycleRouter from './Routes/MotoRouter';

const app = express();
app.use(express.json());
app.use('/cars', carsRouter);
app.use('/motorcycles', motorcycleRouter);

export default app;
