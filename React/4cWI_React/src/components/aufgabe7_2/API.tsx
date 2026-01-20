import type { Person } from "./Person";

export interface API {
    getAllPersons(): Person[];
}