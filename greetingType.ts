type PersonType ={
    name:string
    age:number
}

function greet3(person:PersonType):string{
    return `Hello ${person.name} your age is ${person.age}`
}

console.log(greet3({name:'Bruce',age:35}))