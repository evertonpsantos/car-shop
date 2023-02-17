import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ErrorCreator from '../Errors/ErrorCreator';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private invalidIdMsg = 'Invalid mongo id';
  private notFoundMsg = 'Car not found';

  private async checkIdInDatabase(id: string): Promise<true | false> {
    const carODM = new CarODM();
    const result = await carODM.getById(id);
    if (!result) return false;
    return true;
  }

  public async registerNewCar(newCar: Omit<ICar, 'id'>) {
    const carODM = new CarODM();
    const newCarRegistered = await carODM.register(newCar);
    return new Car(newCarRegistered);
  }

  public async getAllCars(): Promise<ICar[]> {
    const carODM = new CarODM();
    const carsRegistered = await carODM.getAll();
    carsRegistered.map((car) => new Car(car));
    return carsRegistered;
  }

  public async getCarById(id: string) {
    if (!isValidObjectId(id)) throw new ErrorCreator(this.invalidIdMsg, 422);
    if (await this.checkIdInDatabase(id) === false) throw new ErrorCreator(this.notFoundMsg, 404);
    
    const carODM = new CarODM();
    const foundCar = await carODM.getById(id) as ICar;
    return new Car(foundCar);
  }

  public async editCar(id: string, newInfo: Omit<ICar, 'id'>) {
    if (!isValidObjectId(id)) throw new ErrorCreator(this.invalidIdMsg, 422);
    if (await this.checkIdInDatabase(id) === false) throw new ErrorCreator(this.notFoundMsg, 404);

    const carODM = new CarODM();
    const foundCar = await carODM.edit(id, newInfo) as ICar;
    return new Car(foundCar);
  }

  public async deleteCar(id: string) {
    if (!isValidObjectId(id)) throw new ErrorCreator(this.invalidIdMsg, 422);
    if (await this.checkIdInDatabase(id) === false) throw new ErrorCreator(this.notFoundMsg, 404);

    const carODM = new CarODM();
    await carODM.deleteById(id);
  }
}