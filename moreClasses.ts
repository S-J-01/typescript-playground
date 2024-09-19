class Car {
    brand: string;
    model: string;
    year: number;
  
    constructor(brand: string, model: string, year: number) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    getDetails() {
      return `${this.brand} ${this.model}, manufactured in ${this.year}`;
    }
  }
  
  const car1 = new Car("Toyota", "Camry", 2020);
  console.log(car1.getDetails());
  
  class ElectricCar extends Car {
    batteryCapacity: number;
  
    constructor(brand: string, model: string, year: number, batteryCapacity: number) {
      super(brand, model, year);
      this.batteryCapacity = batteryCapacity;
    }
  
    getDetails() {
      return `${this.brand} ${this.model}, with a ${this.batteryCapacity} kWh battery, manufactured in ${this.year}`;
    }
  }
  
  const electricCar = new ElectricCar("Tesla", "Model S", 2022, 100);
  console.log(electricCar.getDetails());
  