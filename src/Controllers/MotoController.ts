import { Request, Response } from 'express';
import ErrorCreator from '../Errors/ErrorCreator';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotoService from '../Services/MotoService';

export default class MotoController {
  private _service: MotoService;

  constructor(
    private req: Request, 
    private res: Response,
  ) {
    this._service = new MotoService();
  }

  public registerNewBike = async () => {
    const newBikeRequest: Omit<IMotorcycle, 'id'> = this.req.body;

    const result = await this._service.registerNewBike(newBikeRequest);
    return this.res.status(201).json(result);
  };

  public getAllBikes = async () => {
    const result = await this._service.getAllBikes();
    return this.res.status(200).json(result);
  };

  public getBikeById = async () => {
    const { id } = this.req.params;

    try {
      const result = await this._service.getBikeById(id);
      return this.res.status(200).json(result);
    } catch (error) {
      return this.res.status((error as ErrorCreator).statusCode)
        .json({ message: (error as ErrorCreator).message });
    }
  };

  public editBike = async () => {
    const { id } = this.req.params;
    const newInfoReq = this.req.body;

    try {
      const result = await this._service.editBike(id, newInfoReq);
      return this.res.status(200).json(result);
    } catch (error) {
      return this.res.status((error as ErrorCreator).statusCode)
        .json({ message: (error as ErrorCreator).message });
    }
  };

  public removeBike = async () => {
    const { id } = this.req.params;

    try {
      await this._service.deleteBike(id);
      return this.res.status(204);
    } catch (error) {
      return this.res.status((error as ErrorCreator).statusCode)
        .json({ message: (error as ErrorCreator).message });
    }
  };
}