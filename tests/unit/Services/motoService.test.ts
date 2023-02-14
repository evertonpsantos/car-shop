import sinon from 'sinon';
import { Model } from 'mongoose';
import { expect } from 'chai';
import { bikeListMock, newBikeRegisteredMock, newBikeRequestMock, 
  updateBikeRequestMock, 
  updatedBikeMock } from './mocks/motorcycleService.mock';
import MotoService from '../../../src/Services/MotoService';

describe('It should test Motorcycle service layer', function () {
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
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });
  
    it('Tests if null is returned when no bike is found', async function () {
      sinon.stub(Model, 'findOne').resolves(null);
      
      const bikeService = new MotoService();
      const result = await bikeService.getBikeById('6348513f34c397abcad040b3');
  
      expect(result).to.equal(null);
    });

    it('Tests if right car is returned', async function () {
      sinon.stub(Model, 'findOne').resolves(updatedBikeMock);
      
      const bikeService = new MotoService();
      const result = await bikeService.getBikeById('6348513f34c236abcad040b3');
  
      expect(result).to.be.deep.equal(updatedBikeMock);
    });
  });

  describe('Tests editBike method', function () {
    it('Should throw error when invalid is passed', async function () {
      try {
        const bikeService = new MotoService();
        await bikeService.editBike('123456qie', updateBikeRequestMock); 
      } catch (error) {
        expect((error as Error).message).to.be.equal('Invalid mongo id');
      }
    });

    it('Should return null when no bike is found', async function () {
      sinon.stub(Model, 'findOneAndUpdate').resolves(null);
      
      const bikeService = new MotoService();
      const result = await bikeService.editBike('6348513f34c397abcad012b3', updateBikeRequestMock);
  
      expect(result).to.equal(null);
    });

    it('Should return updated car info', async function () {
      sinon.stub(Model, 'findOneAndUpdate').resolves(updatedBikeMock);

      const bikeService = new MotoService();
      const result = await bikeService.editBike('6348513f34c236abcad040b3', updateBikeRequestMock);

      expect(result).to.be.deep.equal(updatedBikeMock);
    });
  });
});