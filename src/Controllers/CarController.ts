import { Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private _service: CarService;

  constructor(
    private req: Request, 
    private res: Response,
  ) {
    this._service = new CarService();
  }

  public registerNewCar = async () => {
    const newCarRequest: Omit<ICar, 'id'> = this.req.body;

    const result = await this._service.registerNewCar(newCarRequest);
    return this.res.status(201).json(result);
  };

  public getAllCars = async () => {
    const result = await this._service.getAllCars();
    return this.res.status(200).json(result);
  };
}