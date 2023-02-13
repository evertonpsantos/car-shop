import ICar from '../Interfaces/ICar';

class Car {
  private _id: string;
  private _model: string;
  private _year: number;
  private _color: string;
  private _status: boolean;
  private _buyValue: number;
  private _doorsQty: number;
  private _seatsQty: number;

  constructor(newCar: ICar) {
    this._id = newCar.id;
    this._model = newCar.model;
    this._year = newCar.year;
    this._color = newCar.color;
    this._status = newCar.status || false;
    this._buyValue = newCar.buyValue;
    this._doorsQty = newCar.doorsQty;
    this._seatsQty = newCar.seatsQty;
  }

  set id(id: string) {
    this._id = id;
  }

  get id() {
    return this._id;
  }

  set model(model: string) {
    this._model = model;
  }

  get model() {
    return this._model;
  }

  set year(year: number) {
    this._year = year;
  }

  get year() {
    return this._year;
  }

  set color(color: string) {
    this._color = color;
  }

  get color() {
    return this._color;
  }

  set status(status: boolean) {
    this._status = status;
  }

  get status() {
    return this._status;
  }

  set buyValue(buyValue: number) {
    this._buyValue = buyValue;
  }

  get buyValue() {
    return this._buyValue;
  }

  set doorsQty(doorsQty: number) {
    this._doorsQty = doorsQty;
  }

  get doorsQty() {
    return this._doorsQty;
  }

  set seatsQty(seatsQty: number) {
    this._seatsQty = seatsQty;
  }

  get seatsQty() {
    return this._seatsQty;
  }
}

export default Car;