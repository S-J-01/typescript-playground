interface Person{
    name:string;
    age:number;
}

function greet2(person: Person){
    console.log(`Hello ${person.name} your age is ${person.age}`)
}

greet2({
    name:'Hugh',
    age:45
})