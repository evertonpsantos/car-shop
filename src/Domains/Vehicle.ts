import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;

  constructor(newCar: IVehicle) {
    this.id = newCar.id || '';
    this.model = newCar.model;
    this.year = newCar.year;
    this.color = newCar.color;
    this.status = newCar.status || false;
    this.buyValue = newCar.buyValue;
  }
}

export default Vehicle;