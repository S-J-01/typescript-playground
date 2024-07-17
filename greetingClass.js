"use strict";
class PersonClass {
    greet() {
        return `hello ${this.name} your age is ${this.age}`;
    }
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person1 = new PersonClass('Jake', 43);
console.log(person1.greet());
