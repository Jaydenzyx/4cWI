interface Person {
    firstname: string;
    lastname: string;
    age: number;

}

const people: Person[] = [
    { firstname: "Max", lastname: "Mustermann", age: 30 },
    { firstname: "Erika", lastname: "Musterfrau", age: 15 },
    { firstname: "John", lastname: "Doe", age: 17 },
    { firstname: "Jane", lastname: "Doe", age:  11},
    { firstname: "Alice", lastname: "Smith", age: 18 }
]

const names =people.map((person) => person.firstname + " "  + person.lastname);
console.log(names);
const checkage = people.filter((person) => person.age >= 18);
console.log(checkage);
const sortetlsit = people.sort((person1 , person2) => person2.age  - person1.age);
console.log(sortetlsit);
const findperson = people.find((person) => person.age === 17);
console.log(findperson);
const averageage = people.reduce((total,person) => total +person.age/people.length,0);
console.log(averageage);
const gibtesmminderjährige = people.some((person) => person.age <= 11);
console.log(gibtesmminderjährige);
const alleüber18 = people.every((person) => person.age >= 18);
console.log(alleüber18);
