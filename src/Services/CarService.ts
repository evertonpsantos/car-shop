import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  public async registerNewCar(newCar: Omit<ICar, 'id'>) {
    const carODM = new CarODM();
    const newCarRegistered = await carODM.registerNewCar(newCar);
    return new Car(newCarRegistered);
  }
}