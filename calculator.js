"use strict";
function calculator(x, y, type) {
    if (type === "sum") {
        return x + y;
    }
    else if (type === "sub") {
        return x - y;
    }
    else if (type === "mul") {
        return x * y;
    }
    else if (type === "div") {
        return x / y;
    }
    else {
        return -1;
    }
}
let z = calculator(4, 2, "sum");
console.log(z);
