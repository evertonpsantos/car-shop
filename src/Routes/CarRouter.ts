import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carsRouter = Router();

carsRouter.post('/cars', (req, res) => new CarController(req, res));

export default carsRouter;