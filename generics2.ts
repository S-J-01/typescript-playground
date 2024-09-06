
function identity<T>(value: T): T {
    return value;
}


let num = identity<number>(42);    
let str = identity<string>("Hello"); 
let bool = identity(true);  

console.log(num);   
console.log(str);   
console.log(bool);  



interface Box<T> {
    content: T;
}


let numberBox: Box<number> = { content: 100 };
let stringBox: Box<string> = { content: "Generics in TypeScript" };

console.log(numberBox.content);  
console.log(stringBox.content);  



class KeyValuePair<K, V> {
    private key: K;
    private value: V;

    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
    }

    getKey(): K {
        return this.key;
    }

    getValue(): V {
        return this.value;
    }
}


let pair = new KeyValuePair<string, number>("age", 30);
console.log(pair.getKey());    
console.log(pair.getValue());  



interface HasLength {
    length: number;
}


function logLength<T extends HasLength>(arg: T): void {
    console.log(arg.length);
}

logLength("TypeScript");   
logLength([1, 2, 3, 4, 5]); 
logLength({ length: 20 });  
