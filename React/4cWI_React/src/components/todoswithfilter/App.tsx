import Todolist from "./Todolist";
import {useState} from "react";


export default function App(){
    const [searchValue, setSearchValue] = useState("");


    return(
        <div>
            <h1>Todo</h1>
            <div className="p-8">
                <div className="mb-4">
                    <input className="border p-2" type="text" value={searchValue} onChange={(el)=>setSearchValue(el.target.value)} placeholder={"Search"}/>
                </div>
                <Todolist search={searchValue} />
            </div>
        </div>
    );
}