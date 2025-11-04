import { API } from "./API";
import { carData, Car } from "./carData";

export class FakeAPI implements API {
    getAllCars(): Car[] {
        return carData;
    }
}