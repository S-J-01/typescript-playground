interface Person{
    name:string;
    age:number;
}

function greet(person: Person){
    console.log(`Hello ${person.name} your age is ${person.age}`)
}

greet({
    name:'Hugh',
    age:45
})