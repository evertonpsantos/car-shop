const newBikeRequestMock = {
  model: 'CB Titan',
  year: 2012,
  color: 'Yellow',
  status: true,
  buyValue: 50.000,
  category: 'Street',
  engineCapacity: 160,
};

const newBikeRegisteredMock = {
  id: '6348513f34c397abcad040b3',
  model: 'CB Titan',
  year: 2012,
  color: 'Yellow',
  status: true,
  buyValue: 50.000,
  category: 'Street',
  engineCapacity: 160,
};

const bikeListMock = [
  {
    id: '6348513f34c154abcad040b3',
    model: 'CB Titan',
    year: 2012,
    color: 'Yellow',
    status: true,
    buyValue: 50.000,
    category: 'Street',
    engineCapacity: 160,
  }, {
    id: '6348513f34c999abcad040b3',
    model: 'Honda Hornet',
    year: 2010,
    color: 'Red',
    status: true,
    buyValue: 200.000,
    category: 'Street',
    engineCapacity: 900,
  }, {
    id: '6348513f34c236abcad040b3',
    model: 'Honda Biz',
    year: 2006,
    color: 'Magenta',
    status: true,
    buyValue: 20.000,
    category: 'Street',
    engineCapacity: 125,
  },
];

const updateBikeRequestMock = {
  model: 'Honda Biz',
  year: 2006,
  color: 'Magenta',
  status: true,
  buyValue: 20.000,
  category: 'Street',
  engineCapacity: 125,
};

const updatedBikeMock = {
  id: '6348513f34c236abcad040b3',
  model: 'Honda Biz',
  year: 2006,
  color: 'Magenta',
  status: true,
  buyValue: 20.000,
  category: 'Street',
  engineCapacity: 125,
};

export { newBikeRequestMock, newBikeRegisteredMock, bikeListMock, 
  updatedBikeMock, updateBikeRequestMock };