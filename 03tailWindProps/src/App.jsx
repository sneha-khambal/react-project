import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
let obj = {"one":"two"}
  return (
    <>
     <h1 className='bg-indigo-600 shadow rounded text-black p-4 mb-4'>TailWind test</h1>
     <Card username="person1" btnTxt="click me " obj={obj}/>
     <Card username="person2" btnTxt="visit me "/>
    </>
  )
}

export default App
