interface PersonCollegeDegree{
    nameOfDegree:string
}

interface PersonSportsPreferences{
    nameOfTeamSupported:string
    numberOfYearsSupported:number
}

interface PersonInterface extends PersonCollegeDegree{
    name:string
    age:number
    greet():string
    sportChoice:PersonSportsPreferences
}

class PersonClass implements PersonInterface{
    name: string
    age:number
    nameOfDegree: string
    sportChoice: PersonSportsPreferences
   
    greet(){
        return `hello ${this.name} ${this.nameOfDegree} your age is ${this.age} you have supported ${this.sportChoice.nameOfTeamSupported} for ${this.sportChoice.numberOfYearsSupported} years`
    }

    constructor(name:string,age:number,nameOfDegree:string,sportChoice:PersonSportsPreferences){
        this.name=name
        this.age=age
        this.nameOfDegree=nameOfDegree
        this.sportChoice=sportChoice
    }

   
}

const person1 = new PersonClass('Jake',43,'PHD',{nameOfTeamSupported:'MUFC',numberOfYearsSupported:17})
console.log(person1.greet())