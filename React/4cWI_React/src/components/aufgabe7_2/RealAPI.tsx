import type { API } from "./API";
import type { Person } from "./Person";

export class RealAPI implements API {
    getAllPersons(): Person[] {
        return [{ firstname: "Real", lastname: "Person" }];
    }
}