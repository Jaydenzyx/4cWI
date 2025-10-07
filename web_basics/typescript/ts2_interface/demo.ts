interface person{
    firstname:string;
    lastname:string;
    age:number;
    isMale?:boolean;
}

const person : person = {
    firstname: "Max",
    lastname: "Mustermann",
    age: 30
}

function printname (person:person) {
    console.log(person.age)
}

printname(person);