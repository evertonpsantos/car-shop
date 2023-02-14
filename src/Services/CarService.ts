import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
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
    if (!isValidObjectId(id)) throw Error('Invalid mongo id');
    const carODM = new CarODM();
    const foundCar = await carODM.getById(id);
    if (foundCar) return new Car(foundCar);
    return null;
  }

  public async editCar(id: string, newInfo: Omit<ICar, 'id'>) {
    if (!isValidObjectId(id)) throw Error('Invalid mongo id');
    const carODM = new CarODM();
    const foundCar = await carODM.edit(id, newInfo);
    if (foundCar) return new Car(foundCar);
    return null;
  }
}