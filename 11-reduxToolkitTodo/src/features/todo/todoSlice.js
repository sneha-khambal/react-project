import {createSlice ,nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos:[
        {
           id:1,
           text:'hellow world' 
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            console.log(action)
            const todo =  {
                id:nanoid(),
                text:action.payload
             }
             state.todos.push(todo)
        },
        removeTodo:(state ,action)=>{
            state.todos = state.todos.filter(todo=>todo.id !== action.payload)
        },
        updateTodo:(state,action)=>{
            state.todos.map(todo=>todo.id === action.payload.id ?{...todo,todo:action.payload.text}:todo)

        }

    }

})

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions;
export const todoReducer = todoSlice.reducer