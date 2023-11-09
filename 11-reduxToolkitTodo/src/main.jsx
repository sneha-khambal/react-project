import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todo'
import { Provider } from 'react-redux'
import { store } from './app/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
   <h3>Redux Toolkit </h3>
   <AddTodo/>
   <Todos/>
    </Provider>
  
  </React.StrictMode>,
)
