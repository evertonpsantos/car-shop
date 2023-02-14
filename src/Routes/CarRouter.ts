import { Router } from 'express';
import CarController from '../Controllers/CarController';

const carsRouter = Router();

carsRouter.get('/:id', (req, res) => new CarController(req, res).getCarById());
carsRouter.put('/:id', (req, res) => new CarController(req, res).editCar());
carsRouter.get('/', (req, res) => new CarController(req, res).getAllCars());
carsRouter.post('/', (req, res) => new CarController(req, res).registerNewCar());

export default carsRouter;