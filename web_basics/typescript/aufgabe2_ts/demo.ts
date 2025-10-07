interface Person {
    firstname: string;
    lastname: string;
    age: number;

}

const people: Person[] = [
    { firstname: "Max", lastname: "Mustermann", age: 30 },
    { firstname: "Erika", lastname: "Musterfrau", age: 25 },
    { firstname: "John", lastname: "Doe", age: 17 },
    { firstname: "Jane", lastname: "Doe", age:  11},
    { firstname: "Alice", lastname: "Smith", age: 18 }
]

const names =people.map((person) => person.firstname + " "  + person.lastname);
console.log(names);
const checkage = people.filter((person) => person.age >= 18);
console.log(checkage);