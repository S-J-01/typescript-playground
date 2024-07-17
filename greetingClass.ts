interface PersonInterface{
    name:string
    age:number
    greet():string
}

class PersonClass implements PersonInterface{
    name: string
    age:number
   
    greet(){
        return `hello ${this.name} your age is ${this.age}`
    }

    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }

   
}

const person1 = new PersonClass('Jake',43)
console.log(person1.greet())