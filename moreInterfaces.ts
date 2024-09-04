
interface Product {
    id: number;
    name: string;
    price: number;
    description?: string; 
    getDiscountedPrice(discount: number): number; 
}


interface User {
    id: number;
    name: string;
    email: string;
    purchase(product: Product): void;
}


interface Order {
    orderId: number;
    user: User;
    products: Product[];
    totalAmount(): number;
}


class Book implements Product {
    id: number;
    name: string;
    price: number;
    description?: string;

    constructor(id: number, name: string, price: number, description?: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        if (description) this.description = description;
    }

    getDiscountedPrice(discount: number): number {
        return this.price * (1 - discount / 100);
    }
}


class Customer implements User {
    id: number;
    name: string;
    email: string;

    constructor(id: number, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    purchase(product: Product): void {
        console.log(`${this.name} purchased ${product.name} for $${product.getDiscountedPrice(10).toFixed(2)} (after 10% discount)`);
    }
}


class ShoppingOrder implements Order {
    orderId: number;
    user: User;
    products: Product[];

    constructor(orderId: number, user: User, products: Product[]) {
        this.orderId = orderId;
        this.user = user;
        this.products = products;
    }

    totalAmount(): number {
        return this.products.reduce((total, product) => total + product.price, 0);
    }
}

const book1 = new Book(1, "TypeScript for Beginners", 29.99, "An introductory guide to TypeScript.");
const book2 = new Book(2, "Advanced TypeScript", 49.99);

const customer = new Customer(1, "John Doe", "john@example.com");

customer.purchase(book1);
customer.purchase(book2);

const order = new ShoppingOrder(1001, customer, [book1, book2]);

console.log(`Order ID: ${order.orderId}`);
console.log(`Total amount: $${order.totalAmount().toFixed(2)}`);
