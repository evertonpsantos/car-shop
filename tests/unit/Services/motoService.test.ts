import sinon from 'sinon';
import { Model } from 'mongoose';
import { expect } from 'chai';
import { bikeListMock, newBikeRegisteredMock, newBikeRequestMock, 
  updateBikeRequestMock, 
  updatedBikeMock } from './mocks/motorcycleService.mock';
import MotoService from '../../../src/Services/MotoService';

describe('It should test Motorcycle service layer', function () {
  const invalidIdMsg = 'Invalid mongo id';
  const notFoundMsg = 'Motorcycle not found';

  afterEach(function () {
    sinon.restore();
  });

  describe('Tests registerNewBike method', function () {
    it('Tests its possible to register a new bike', async function () {
      sinon.stub(Model, 'create').resolves(newBikeRegisteredMock);
  
      const bikeService = new MotoService();
      const result = await bikeService.registerNewBike(newBikeRequestMock); 
  
      expect(result).to.be.deep.equal(newBikeRegisteredMock);
    });
  });

  describe('Tests getAllBikes and getBikeById', function () {
    afterEach(function () {
      sinon.restore();
    });

    it('Tests if motorcycle list is returned', async function () {
      sinon.stub(Model, 'find').resolves(bikeListMock);
  
      const bikeService = new MotoService();
      const result = await bikeService.getAllBikes(); 
  
      expect(result).to.be.deep.equal(bikeListMock);
    });
  
    it('Tests if error is thrown when invalid id is passed', async function () {
      try {
        const bikeService = new MotoService();
        await bikeService.getBikeById('456856qie'); 
      } catch (error) {
        expect((error as Error).message).to.be.equal(invalidIdMsg);
      }
    });
  
    it('Tests if error is thrown when no bike is found', async function () {
      sinon.stub(Model, 'findOne').resolves(null);

      try {
        const bikeService = new MotoService();
        await bikeService.getBikeById('6348513f34c397abcad040b3');
      } catch (error) {
        expect((error as Error).message).to.equal(notFoundMsg);
      }
    });

    it('Tests if right bike is returned', async function () {
      sinon.stub(Model, 'findOne')
        .onFirstCall().resolves(true)
        .onSecondCall()
        .resolves(updatedBikeMock);
      
      const bikeService = new MotoService();
      const result = await bikeService.getBikeById('6348513f34c236abcad040b3');
  
      expect(result).to.be.deep.equal(updatedBikeMock);
    });
  });

  describe('Tests editBike method', function () {
    afterEach(function () {
      sinon.restore();
    });
    
    it('Should throw error when invalid is passed', async function () {
      try {
        const bikeService = new MotoService();
        await bikeService.editBike('123456qie', updateBikeRequestMock); 
      } catch (error) {
        expect((error as Error).message).to.be.equal(invalidIdMsg);
      }
    });

    it('Should throw error when no bike is found', async function () {
      sinon.stub(Model, 'findOne').resolves(null);
      
      try {
        const bikeService = new MotoService();
        await bikeService.editBike('6348513f34c397abcad012b3', updateBikeRequestMock);
      } catch (error) {
        expect((error as Error).message).to.equal(notFoundMsg);
      }
    });

    it('Should return updated car info', async function () {
      sinon.stub(Model, 'findOne').resolves(true);
      sinon.stub(Model, 'findOneAndUpdate').resolves(updatedBikeMock);

      const bikeService = new MotoService();
      const result = await bikeService.editBike('6348513f34c236abcad040b3', updateBikeRequestMock);

      expect(result).to.be.deep.equal(updatedBikeMock);
    });
  });

  describe('Tests deleteBike method', function () {
    afterEach(function () {
      sinon.restore();
    });
    
    it('Should throw error when invalid id is passed', async function () {
      try {
        const carService = new MotoService();
        await carService.deleteBike('123456qie'); 
      } catch (error) {
        expect((error as Error).message).to.be.equal(invalidIdMsg);
      }
    });

    it('Should return null when no bike is found', async function () {
      sinon.stub(Model, 'findOne').resolves(null);

      try {
        const carService = new MotoService();
        await carService.deleteBike('6348513f34c397abcad040b3');
      } catch (error) {
        expect((error as Error).message).to.equal(notFoundMsg);
      }
    });

    it('Should delete a bike', async function () {
      sinon.stub(Model, 'findOne').resolves(true);
      sinon.stub(Model, 'findByIdAndDelete').resolves(null);
      
      const carService = new MotoService();
      await carService.deleteBike('6348513f34c397abcad040b4');
    });
  });
});