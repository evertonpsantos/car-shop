import ICar from '../Interfaces/ICar';

class Car {
  protected id: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(newCar: ICar) {
    this.id = newCar.id || '';
    this.model = newCar.model;
    this.year = newCar.year;
    this.color = newCar.color;
    this.status = newCar.status || false;
    this.buyValue = newCar.buyValue;
    this.doorsQty = newCar.doorsQty;
    this.seatsQty = newCar.seatsQty;
  }
}

export default Car;