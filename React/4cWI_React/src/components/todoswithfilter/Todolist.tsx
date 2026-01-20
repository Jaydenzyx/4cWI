import React from 'react';
import TodoCard from "./TodoCard.tsx";

type Props = {};
export default function Todolist() {
    return (
        <div className="grid grid-cols-5 gap-2">
            <TodoCard title={"Putzen"} id={7} completed={false}></TodoCard>
            <TodoCard title={"Putzen"} id={7} completed={true}></TodoCard>
            <TodoCard title={"Putzen"} id={7} completed={true}></TodoCard>
            <TodoCard title={"Putzen"} id={7} completed={false}></TodoCard>
            <TodoCard title={"Putzen"} id={7} completed={true}></TodoCard>
            <TodoCard title={"Putzen"} id={7} completed={true}></TodoCard>
            <TodoCard title={"Putzen"} id={7} completed={false}></TodoCard>
            <TodoCard title={"Putzen"} id={7} completed={true}></TodoCard>
            <TodoCard title={"Putzen"} id={7} completed={true}></TodoCard>
        </div>
    );
};
