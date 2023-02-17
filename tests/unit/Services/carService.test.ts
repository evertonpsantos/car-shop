import sinon from 'sinon';
import { Model } from 'mongoose';
import { expect } from 'chai';
import CarService from '../../../src/Services/CarService';
import { carList, newCarRegisteredMock, 
  newCarRequestMock, updateCarRequestMock, updatedCarMock } from './mocks/carService.mocks';

describe('It should test Car service layer', function () {
  afterEach(function () {
    sinon.restore();
  });

  describe('Tests register new car method', function () {
    it('Tests its possible to register a new car', async function () {
      sinon.stub(Model, 'create').resolves(newCarRegisteredMock);
  
      const carService = new CarService();
      const result = await carService.registerNewCar(newCarRequestMock); 
  
      expect(result).to.be.deep.equal(newCarRegisteredMock);
    });
  });

  describe('Tests getAllCars and getCarById', function () {
    it('Tests if car list is returned', async function () {
      sinon.stub(Model, 'find').resolves(carList);
  
      const carService = new CarService();
      const result = await carService.getAllCars(); 
  
      expect(result).to.be.deep.equal(carList);
    });
  
    it('Tests if error is thrown when invalid id is passed', async function () {
      try {
        const carService = new CarService();
        await carService.getCarById('123456qie'); 
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });
  
    it('Tests if null is returned when no car is found', async function () {
      sinon.stub(Model, 'findOne').resolves(null);
      
      const carService = new CarService();
      const result = await carService.getCarById('6348513f34c397abcad040b3');
  
      expect(result).to.equal(null);
    });

    it('Tests if right car is returned', async function () {
      sinon.stub(Model, 'findOne').resolves(updatedCarMock);
      
      const carService = new CarService();
      const result = await carService.getCarById('6348513f34c123abcad050b4');
  
      expect(result).to.be.deep.equal(updatedCarMock);
    });
  });

  describe('Tests editCar method', function () {
    it('Should throw error when invalid id is passed', async function () {
      try {
        const carService = new CarService();
        await carService.editCar('123456qie', updateCarRequestMock); 
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });

    it('Should return null when no car is found', async function () {
      sinon.stub(Model, 'findOneAndUpdate').resolves(null);
      
      const carService = new CarService();
      const result = await carService.editCar('6348513f34c397abcad040b3', updateCarRequestMock);
  
      expect(result).to.equal(null);
    });

    it('Should return updated car info', async function () {
      sinon.stub(Model, 'findOneAndUpdate').resolves(updatedCarMock);

      const carService = new CarService();
      const result = await carService.editCar('6348513f34c123abcad050b4', updateCarRequestMock);

      expect(result).to.be.deep.equal(updatedCarMock);
    });
  });

  describe('Tests deleteCar method', function () {
    it('Should throw error when invalid id is passed', async function () {
      try {
        const carService = new CarService();
        await carService.deleteCar('123456qie'); 
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });

    it('Should return null when no car is found', async function () {
      sinon.stub(Model, 'findByIdAndDelete').resolves(null);

      try {
        const carService = new CarService();
        await carService.deleteCar('6348513f34c397abcad040b3');
      } catch (error) {
        expect((error as Error).message).to.equal(null);
      }
    });

    it('Should delete a car', async function () {
      sinon.stub(Model, 'findByIdAndDelete').resolves(null);
      
      const carService = new CarService();
      const result = await carService.deleteCar('6348513f34c397abcad040b4');
  
      expect(result).to.equal(null);
    });
  });
});