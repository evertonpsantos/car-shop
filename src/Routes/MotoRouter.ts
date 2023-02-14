import { Router } from 'express';
import MotoController from '../Controllers/MotoController';

const motorcycleRouter = Router();

motorcycleRouter.get('/:id', (req, res) => new MotoController(req, res).getBikeById());
motorcycleRouter.put('/:id', (req, res) => new MotoController(req, res).editBike());
motorcycleRouter.get('/', (req, res) => new MotoController(req, res).getAllBikes());
motorcycleRouter.post('/', (req, res) => new MotoController(req, res).registerNewBike());

export default motorcycleRouter;