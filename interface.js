"use strict";
function calculateArea(shape) {
    console.log(`Calculating area of ${shape.name}...`);
    console.log(`Area: ${shape.area()}`);
}
const circle = {
    name: "Circle",
    color: "Red",
    area() {
        return 3.14 * 2 * 2;
    },
};
calculateArea(circle);
