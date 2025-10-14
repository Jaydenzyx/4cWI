import {Engine} from "./engine";
import {Owner} from "./owner";

let owner1= new Owner("damian","goldencrxwn",18)
let engine:Engine = new Engine("BMW", 150, "Diesel", owner1);

console.log(engine.getOWner().getage());
console.log(engine.getOWner().getFirstname());
console.log(engine.getOWner().getLastname());
console.log(engine.getHorsePower());
console.log(engine.getProducer());
console.log(engine.getFueltype());