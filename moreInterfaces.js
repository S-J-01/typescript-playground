var Book = /** @class */ (function () {
    function Book(id, name, price, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        if (description)
            this.description = description;
    }
    Book.prototype.getDiscountedPrice = function (discount) {
        return this.price * (1 - discount / 100);
    };
    return Book;
}());
var Customer = /** @class */ (function () {
    function Customer(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    Customer.prototype.purchase = function (product) {
        console.log("".concat(this.name, " purchased ").concat(product.name, " for $").concat(product.getDiscountedPrice(10).toFixed(2), " (after 10% discount)"));
    };
    return Customer;
}());
var ShoppingOrder = /** @class */ (function () {
    function ShoppingOrder(orderId, user, products) {
        this.orderId = orderId;
        this.user = user;
        this.products = products;
    }
    ShoppingOrder.prototype.totalAmount = function () {
        return this.products.reduce(function (total, product) { return total + product.price; }, 0);
    };
    return ShoppingOrder;
}());
var book1 = new Book(1, "TypeScript for Beginners", 29.99, "An introductory guide to TypeScript.");
var book2 = new Book(2, "Advanced TypeScript", 49.99);
var customer = new Customer(1, "John Doe", "john@example.com");
customer.purchase(book1);
customer.purchase(book2);
var order = new ShoppingOrder(1001, customer, [book1, book2]);
console.log("Order ID: ".concat(order.orderId));
console.log("Total amount: $".concat(order.totalAmount().toFixed(2)));
