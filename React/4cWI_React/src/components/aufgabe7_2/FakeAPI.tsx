import type { API } from "./API";
import type { Person } from "./Person";

const persons: Person[] = [
    { lastname: "Huber", firstname: "Lukas" },
    { lastname: "Gruber", firstname: "Anna" },
    { lastname: "Leitner", firstname: "Tobias" },
    { lastname: "Hofer", firstname: "Sarah" },
    { lastname: "Bauer", firstname: "Daniel" },
    { lastname: "Wagner", firstname: "Marie" },
    { lastname: "Pichler", firstname: "Jonas" },
    { lastname: "Koller", firstname: "Laura" },
    { lastname: "Steiner", firstname: "Felix" },
    { lastname: "Mayr", firstname: "Nina" },
];

export class FakeAPI implements API {
    getAllPersons(): Person[] {
        return persons;
    }
}
