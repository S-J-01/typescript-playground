"use strict";
class PersonClass {
    greet() {
        return `hello ${this.name} ${this.nameOfDegree} your age is ${this.age} you have supported ${this.sportChoice.nameOfTeamSupported} for ${this.sportChoice.numberOfYearsSupported} years`;
    }
    constructor(name, age, nameOfDegree, sportChoice) {
        this.name = name;
        this.age = age;
        this.nameOfDegree = nameOfDegree;
        this.sportChoice = sportChoice;
    }
}
const person1 = new PersonClass('Jake', 43, 'PHD', { nameOfTeamSupported: 'MUFC', numberOfYearsSupported: 17 });
console.log(person1.greet());
