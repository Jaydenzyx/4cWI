import {Car} from "./Car";
import {Engine} from "./Engine";

let car:Car = new Car("red", "BMW", new Engine(150));


console.log(car.getHorsePower());
