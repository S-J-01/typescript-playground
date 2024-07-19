"use strict";
function greet3(person) {
    return `Hello ${person.name} your age is ${person.age}`;
}
console.log(greet3({ name: 'Bruce', age: 35 }));
