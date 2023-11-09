import { useContext ,createContext} from "react"

export const ToDoContext = createContext({
    todos :[
        {
            id: 1,
            todo: "todo text",
            completed: false
        }
    ],
    addTodo: ()=>{},
    updateTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{}

});

export const useToDoContext = ()=>{
    return useContext(ToDoContext)
}

export const ToDoContextProvider = ToDoContext.Provider;