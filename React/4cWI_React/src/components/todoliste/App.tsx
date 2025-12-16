import { useEffect, useState } from "react";
import Todo from "./Todo";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
}

export default function App(){
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then((json: Todo[]) => setTodos(json))
    }, []);
    return(
<div>
    <h1>Todos</h1>
    {todos.map((todo) => (
        <Todo
            key={todo.id}
            title={todo.title} 
            completed={todo.completed}
            onToggle={() => {
                setTodos(todos.map(t => 
                    t.id === todo.id ? {...t, completed: !t.completed} : t
                ));
            }}
        />
    ))}
    <div className="grid grid-cols-8 gap-2">

    </div>
</div>
    );
}