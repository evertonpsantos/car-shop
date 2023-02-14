import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  public async registerNewCar(newCar: Omit<ICar, 'id'>) {
    const carODM = new CarODM();
    const newCarRegistered = await carODM.registerNewCar(newCar);
    return new Car(newCarRegistered);
  }

  public async getAllCars(): Promise<ICar[]> {
    const carODM = new CarODM();
    const carsRegistered = await carODM.getAllCars();
    carsRegistered.map((car) => new Car(car));
    return carsRegistered;
  }

  public async getCarById(id: string) {
    if (!isValidObjectId(id)) throw Error('Invalid mongo id');
    const carODM = new CarODM();
    const foundCar = await carODM.getCarById(id);
    if (foundCar) return new Car(foundCar);
    return null;
  }
}