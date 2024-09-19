class Person {
    // Properties
    name: string;
    age: number;
  
    // Constructor
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    // Method
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  
  // Creating an instance of the class
  const person6 = new Person("Alice", 30);
  
  // Accessing properties and methods
  console.log(person6.greet()); // Output: Hello, my name is Alice and I am 30 years old.
  
  
  // Inheritance Example
  class Employee extends Person {
    // Additional property
    jobTitle: string;
  
    constructor(name: string, age: number, jobTitle: string) {
      // Call the parent class constructor
      super(name, age);
      this.jobTitle = jobTitle;
    }
  
    // Method override
    greet() {
      return `Hello, my name is ${this.name}, I am ${this.age} years old and I work as a ${this.jobTitle}.`;
    }
  }
  
  // Creating an instance of the subclass
  const employee1 = new Employee("Bob", 40, "Software Developer");
  
  console.log(employee1.greet()); // Output: Hello, my name is Bob, I am 40 years old and I work as a Software Developer.
  