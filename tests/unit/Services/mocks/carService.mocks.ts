const newCarRequestMock = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const newCarRegisteredMock = {
  id: '6348513f34c397abcad040b3',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carList = [{
  id: '6348513f34c256abcad040b4',
  model: 'Golf',
  year: 2012,
  color: 'Gray',
  status: true,
  buyValue: 100.000,
  doorsQty: 4,
  seatsQty: 5,
}, {
  id: '6348513f34c123abcad040b3',
  model: 'Voyage',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 25.990,
  doorsQty: 4,
  seatsQty: 5,
}];

const updateCarRequestMock = {
  model: 'Marea',
  year: 1992,
  color: 'Red',
  status: true,
  buyValue: 12.000,
  doorsQty: 2,
  seatsQty: 5,
};

const updatedCarMock = {
  id: '6348513f34c123abcad050b4',
  model: 'Marea',
  year: 1992,
  color: 'Red',
  status: true,
  buyValue: 12.000,
  doorsQty: 2,
  seatsQty: 5,
};

export { newCarRequestMock, newCarRegisteredMock, carList, updateCarRequestMock, updatedCarMock };