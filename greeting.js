"use strict";
function greet(person) {
    console.log(`Hello ${person.name} your age is ${person.age}`);
}
greet({
    name: 'Hugh',
    age: 45
});
