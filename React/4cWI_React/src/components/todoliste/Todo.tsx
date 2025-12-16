import React from 'react';

type Props = {
    title: string;
    completed: boolean;
    onToggle: () => void;
};

export default function Todo({ title, completed, onToggle }: Props) {
    return (
        <div 
            className={`border p-4 ${completed ? 'bg-green-500' : 'bg-red-500'} cursor-pointer hover:opacity-80 transition-opacity`}
            onClick={onToggle}
        >
            <div className="font-medium">{title}</div>
            <div className="text-sm">{completed ? 'Completed' : 'Not Completed'}</div>
        </div>
    );
}