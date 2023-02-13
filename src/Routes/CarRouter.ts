import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carsRouter = Router();

carsRouter.post('/', (req, res) => new CarController(req, res).registerNewCar());

export default carsRouter;