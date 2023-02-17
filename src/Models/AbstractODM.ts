import { model, Model, models, Schema } from 'mongoose';

abstract class AbstractODM<T> {
  private schema: Schema;
  private model: Model<T>;

  constructor(modelName: string, schema: Schema) {
    this.schema = schema;
    this.model = models[modelName] || model(modelName, this.schema);
  }

  public async register(newCar: Omit<T, 'id'>): Promise<T> {
    return this.model.create({ ...newCar });
  }

  public async getAll(): Promise<T[]> {
    return this.model.find({});
  }

  public async getById(id: string) {
    return this.model.findOne({ _id: id });
  }

  public edit(id: string, newInfo: Omit<T, 'id'>) {
    return this.model.findByIdAndUpdate({ _id: id }, { ...newInfo }, { new: true });
  }

  public deleteById(id: string) {
    return this.model.findByIdAndDelete({ _id: id });
  }
}

export default AbstractODM;