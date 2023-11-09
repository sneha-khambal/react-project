import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo,updateTodo } from '../features/todo/todoSlice';


export default function Todos(){
    const todos = useSelector(state=>state.todos);
    const dispatch = useDispatch()
    console.log(todos)
    return(
        <>
        <div>Todos</div>
        {todos.map((todo)=>(
            <li key={todo.id}>
                {todo.text}
                <button
                onClick={()=>{dispatch(removeTodo(todo.id))}}
                >X</button>
                  <button
                onClick={(e)=>{dispatch(updateTodo(todo.id,e.target.value))}}
                >Update</button>

            </li>
        ))}

        </>
    )
}