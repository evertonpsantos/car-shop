import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private invalidIdMsg = 'Invalid mongo id';

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
    if (!isValidObjectId(id)) throw Error(this.invalidIdMsg);
    const carODM = new CarODM();
    const foundCar = await carODM.getById(id);
    if (foundCar) return new Car(foundCar);
    return null;
  }

  public async editCar(id: string, newInfo: Omit<ICar, 'id'>) {
    if (!isValidObjectId(id)) throw Error(this.invalidIdMsg);
    const carODM = new CarODM();
    const foundCar = await carODM.edit(id, newInfo);
    if (foundCar) return new Car(foundCar);
    return null;
  }

  public async deleteCar(id: string) {
    if (!isValidObjectId(id)) throw Error(this.invalidIdMsg);
    const carODM = new CarODM();
    try {
      const result = await carODM.deleteById(id);
      return result;
    } catch (error) {
      return null;
    }
  }
}