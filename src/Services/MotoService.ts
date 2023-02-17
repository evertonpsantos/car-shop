import { isValidObjectId } from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import ErrorCreator from '../Errors/ErrorCreator';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotoService {
  private invalidIdMsg = 'Invalid mongo id';
  private notFoundMsg = 'Motorcycle not found';

  private async checkIdInDatabase(id: string): Promise<true | false> {
    const carODM = new MotorcycleODM();
    const result = await carODM.getById(id);
    if (!result) return false;
    return true;
  }

  public async registerNewBike(newBike: Omit<IMotorcycle, 'id'>) {
    const motoODM = new MotorcycleODM();
    const newBikeRegistered = await motoODM.register(newBike);
    return new Motorcycle(newBikeRegistered);
  }

  public async getAllBikes(): Promise<IMotorcycle[]> {
    const bikeODM = new MotorcycleODM();
    const bikesRegistered = await bikeODM.getAll();
    bikesRegistered.map((bike) => new Motorcycle(bike));
    return bikesRegistered;
  }

  public async getBikeById(id: string) {
    if (!isValidObjectId(id)) throw new ErrorCreator(this.invalidIdMsg, 422);
    if (await this.checkIdInDatabase(id) === false) throw new ErrorCreator(this.notFoundMsg, 404);

    const bikeODM = new MotorcycleODM();
    const foundBike = await bikeODM.getById(id);
    if (foundBike) return new Motorcycle(foundBike);
    return null;
  }

  public async editBike(id: string, newInfo: Omit<IMotorcycle, 'id'>) {
    if (!isValidObjectId(id)) throw new ErrorCreator(this.invalidIdMsg, 422);
    if (await this.checkIdInDatabase(id) === false) throw new ErrorCreator(this.notFoundMsg, 404);

    const bikeODM = new MotorcycleODM();
    const foundBike = await bikeODM.edit(id, newInfo);
    if (foundBike) return new Motorcycle(foundBike);
    return null;
  }

  public async deleteBike(id: string) {
    if (!isValidObjectId(id)) throw new ErrorCreator(this.invalidIdMsg, 422);
    if (await this.checkIdInDatabase(id) === false) throw new ErrorCreator(this.notFoundMsg, 404);

    const bikeODM = new MotorcycleODM();
    await bikeODM.deleteById(id);
  }
}