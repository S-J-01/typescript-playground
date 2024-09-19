var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getDetails = function () {
        return "".concat(this.brand, " ").concat(this.model, ", manufactured in ").concat(this.year);
    };
    return Car;
}());
var car1 = new Car("Toyota", "Camry", 2020);
console.log(car1.getDetails());
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    function ElectricCar(brand, model, year, batteryCapacity) {
        var _this = _super.call(this, brand, model, year) || this;
        _this.batteryCapacity = batteryCapacity;
        return _this;
    }
    ElectricCar.prototype.getDetails = function () {
        return "".concat(this.brand, " ").concat(this.model, ", with a ").concat(this.batteryCapacity, " kWh battery, manufactured in ").concat(this.year);
    };
    return ElectricCar;
}(Car));
var electricCar = new ElectricCar("Tesla", "Model S", 2022, 100);
console.log(electricCar.getDetails());
