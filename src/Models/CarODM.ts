import { model, Model, models, Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';

export default class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });

    this.model = models.Car || model('Car', this.schema);
  }

  public async registerNewCar(newCar: Omit<ICar, 'id'>): Promise<ICar> {
    return this.model.create({ ...newCar });
  }

  public async getAllCars(): Promise<ICar[]> {
    return this.model.find({});
  }
}