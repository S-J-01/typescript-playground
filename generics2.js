function identity(value) {
    return value;
}
var num = identity(42);
var str = identity("Hello");
var bool = identity(true);
console.log(num);
console.log(str);
console.log(bool);
var numberBox = { content: 100 };
var stringBox = { content: "Generics in TypeScript" };
console.log(numberBox.content);
console.log(stringBox.content);
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair(key, value) {
        this.key = key;
        this.value = value;
    }
    KeyValuePair.prototype.getKey = function () {
        return this.key;
    };
    KeyValuePair.prototype.getValue = function () {
        return this.value;
    };
    return KeyValuePair;
}());
var pair = new KeyValuePair("age", 30);
console.log(pair.getKey());
console.log(pair.getValue());
function logLength(arg) {
    console.log(arg.length);
}
logLength("TypeScript");
logLength([1, 2, 3, 4, 5]);
logLength({ length: 20 });
