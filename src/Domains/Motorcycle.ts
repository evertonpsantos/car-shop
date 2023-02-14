import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(newBike: IMotorcycle) {
    super(newBike);
    this.category = newBike.category;
    this.engineCapacity = newBike.engineCapacity;
  }
}

export default Motorcycle;