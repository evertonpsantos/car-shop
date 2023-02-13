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

  // set id(id: string) {
  //   this._id = id;
  // }

  // get id() {
  //   return this._id;
  // }

  // set model(model: string) {
  //   this._model = model;
  // }

  // get model() {
  //   return this._model;
  // }

  // set year(year: number) {
  //   this._year = year;
  // }

  // get year() {
  //   return this._year;
  // }

  // set color(color: string) {
  //   this._color = color;
  // }

  // get color() {
  //   return this._color;
  // }

  // set status(status: boolean) {
  //   this._status = status;
  // }

  // get status() {
  //   return this._status;
  // }

  // set buyValue(buyValue: number) {
  //   this._buyValue = buyValue;
  // }

  // get buyValue() {
  //   return this._buyValue;
  // }
}

export default Car;