import { Request, Response } from 'express';
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
      if (!result) return this.res.status(404).json({ message: this.notFoundMsg });
      return this.res.status(200).json(result);
    } catch (error) {
      if ((error as Error).message === 'Invalid mongo id') {
        return this.res.status(422).json({ message: (error as Error).message });
      }
    }
  };

  public editCar = async () => {
    const { id } = this.req.params;
    const newInfoReq = this.req.body;

    try {
      const result = await this._service.editCar(id, newInfoReq);
      if (!result) return this.res.status(404).json({ message: this.notFoundMsg });
      return this.res.status(200).json(result);
    } catch (error) {
      if ((error as Error).message === 'Invalid mongo id') {
        return this.res.status(422).json({ message: (error as Error).message });
      }
    }
  };

  public removeCar = async () => {
    const { id } = this.req.params;

    try {
      const result = await this._service.deleteCar(id);
      if (!result) return this.res.status(404).json({ message: this.notFoundMsg });
      return this.res.status(204).json({ result });
    } catch (error) {
      return this.res.status(422).json({ message: (error as Error).message });
    }
  };
}