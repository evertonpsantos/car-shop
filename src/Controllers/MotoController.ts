import { Request, Response } from 'express';
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
      if (!result) return this.res.status(404).json({ message: 'Motorcycle not found' });
      return this.res.status(200).json(result);
    } catch (error) {
      if ((error as Error).message === 'Invalid mongo id') {
        return this.res.status(422).json({ message: (error as Error).message });
      }
    }
  };

  public editBike = async () => {
    const { id } = this.req.params;
    const newInfoReq = this.req.body;

    try {
      const result = await this._service.editBike(id, newInfoReq);
      if (!result) return this.res.status(404).json({ message: 'Motorcycle not found' });
      return this.res.status(200).json(result);
    } catch (error) {
      if ((error as Error).message === 'Invalid mongo id') {
        return this.res.status(422).json({ message: (error as Error).message });
      }
    }
  };
}