import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carsRouter = Router();

carsRouter.post('/', (req, res) => new CarController(req, res).registerNewCar());
carsRouter.get('/', (req, res) => new CarController(req, res).getAllCars());

export default carsRouter;