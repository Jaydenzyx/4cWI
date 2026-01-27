import React, {useEffect, useState} from 'react';
import TodoCard from "./TodoCard.tsx";
import type {Todo} from "../../utils/type.ts";

type Props = {
    search: string;
};

export default function Todolist({search}: Props) {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filteredtodos, setfilteredtodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json =>
            {setTodos(json);
                setfilteredtodos(json);
            })},[])

    useEffect(() => {
        console.log("searchchanged")
        let result =todos.filter((todo:Todo) => todo.title.includes(search));
        console.log(result)
        }, [search]);


    console.log("todos", todos)

    return (
    <div className="grid grid-cols-5 gap-2">
        {filteredtodos.map((todo: Todo) => (
            <TodoCard key={todo.id} completed={todo.completed} title={todo.title} id={todo.id} />
        ))}
    </div>
    );
};
