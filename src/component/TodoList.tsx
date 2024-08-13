import React from "react";
import {ITodo} from "../types/data";
import TodoItem from "./TodoItem";

interface ITodoListProps {
    items: ITodo[];
    toggleTodo: (id: number) => void;
    removeTido: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = (props) => {
    const {items, toggleTodo, removeTido} = props;
    return <div>
        {
            props.items.map(todo => (
                <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} removeTido={removeTido}/>))
        }
    </div>
}

export default TodoList;