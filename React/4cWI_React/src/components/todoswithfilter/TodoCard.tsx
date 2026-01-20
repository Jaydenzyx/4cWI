import React from 'react';

type Props = {
    title: string;
    id: number;
    completed: boolean;


};
export default function TodoCard({title, id, completed}: Props) {
    return (
<div className={`border p-4 ${completed ? 'bg-green-500' : 'bg-red-500'}`}>
    <div>{title}</div>
    <div>{id}</div>
    <div>{completed?"done":"open"}</div>
</div>

    );
};
