import React, {useEffect, useState} from "react";
import {ITodo} from "../types/data";
import TodoList from "./TodoList";

const App: React.FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);

    const inputRef = React.useRef<HTMLInputElement>(null);
    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if(e.key === 'Enter') addTodo();
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }
    const addTodo = () => {
        if (value) {
            setTodos([...todos, {id: Date.now(), title: value, complete: false}])
            setValue('');
        }
    }

    const  removeTido = (id:number): void =>{
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if(todo.id !== id) return todo;
            return {
                ...todo, complete: !todo.complete
            }
        }))
    }

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus()
    }, []);

    return (
        <div>
            <div>
                <input value={value} onChange={handleChange} ref={inputRef} onKeyDown={handleKeyDown}/>
                <button onClick={addTodo}>Add</button>
            </div>
            <TodoList items={todos} removeTido={removeTido} toggleTodo={toggleTodo}/>
        </div>
    );
}
export default App;