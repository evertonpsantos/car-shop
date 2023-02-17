import { Request, Response } from 'express';
import ErrorCreator from '../Errors/ErrorCreator';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default class CarController {
  private _service: CarService;
  private notFoundMsg = 'Car not found';

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

  public getCarById = async () => {
    const { id } = this.req.params;

    try {
      const result = await this._service.getCarById(id);
      return this.res.status(200).json(result);
    } catch (error) {
      return this.res.status((error as ErrorCreator).statusCode)
        .json({ message: (error as ErrorCreator).message });
    }
  };

  public editCar = async () => {
    const { id } = this.req.params;
    const newInfoReq = this.req.body;

    try {
      const result = await this._service.editCar(id, newInfoReq);
      return this.res.status(200).json(result);
    } catch (error) {
      return this.res.status((error as ErrorCreator).statusCode)
        .json({ message: (error as ErrorCreator).message });
    }
  };

  public removeCar = async () => {
    const { id } = this.req.params;

    try {
      const result = await this._service.deleteCar(id);
      return this.res.status(204).json({ result });
    } catch (error) {
      return this.res.status((error as ErrorCreator).statusCode)
        .json({ message: (error as ErrorCreator).message });
    }
  };
}