import { Car } from "./carData";

export interface API {
    getAllCars(): Car[];
}