import type { API } from "./API";
import { FakeAPI } from "./FakeAPI";
import { RealAPI } from "./RealAPI";


function app(){
    let api: API = new FakeAPI();
    api = new FakeAPI();


    return(
        <div>
            {api.getAllPersons().map(person => (
                <div key={person.firstname}>
                    <h2>{person.firstname + " " + person.lastname}</h2>
                </div>
            ))}
        </div>
    )
}

export default app;

