const CarAPI = {
    cars: [
      {id: 1, name: 'FORD', year: 2018, carbody: 'hatchback'},
      {id: 2, name: 'BMW', year: 2015, carbody: 'estate'},
      {id: 3, name: 'MB', year: 2012, carbody: 'sedan'},
    ],
    all: function() { return this.cars},
    get: function(id) {
    const isCar = car => car.id === id
    return this.cars.find(isCar)
    }
  }

export default CarAPI;