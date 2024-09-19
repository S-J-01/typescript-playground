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
var Person = /** @class */ (function () {
    // Constructor
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method
    Person.prototype.greet = function () {
        return "Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old.");
    };
    return Person;
}());
// Creating an instance of the class
var person6 = new Person("Alice", 30);
// Accessing properties and methods
console.log(person6.greet()); // Output: Hello, my name is Alice and I am 30 years old.
// Inheritance Example
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, jobTitle) {
        // Call the parent class constructor
        var _this = _super.call(this, name, age) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    // Method override
    Employee.prototype.greet = function () {
        return "Hello, my name is ".concat(this.name, ", I am ").concat(this.age, " years old and I work as a ").concat(this.jobTitle, ".");
    };
    return Employee;
}(Person));
// Creating an instance of the subclass
var employee1 = new Employee("Bob", 40, "Software Developer");
console.log(employee1.greet()); // Output: Hello, my name is Bob, I am 40 years old and I work as a Software Developer.
