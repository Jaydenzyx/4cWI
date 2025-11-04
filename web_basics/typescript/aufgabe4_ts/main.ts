import {FakeAPI} from "./FakeAPI";
import {API} from "./API";


let api:API = new FakeAPI();

console.log(api.getAllCars());
