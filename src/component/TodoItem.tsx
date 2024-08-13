import React from "react";
import {ITodo} from "../types/data";

interface ITodoItem extends ITodo {
    toggleTodo: (id:number) => void;
    removeTido: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
    const {id, title, complete, toggleTodo, removeTido} = props;
    return <div>
        <input type="checkbox" checked={complete} onChange={() => toggleTodo(id)}/>
        <span style={{display:'inline-block', margin: '0 10px'}}>{title}</span>
        <button style={{background: 'transparent', border: 'none', outline: 'none', color: 'red'}} onClick={()=> removeTido(id)}>x</button>
    </div>
}

export default TodoItem