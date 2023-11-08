import { useState } from 'react'
 
import './App.css'

function App() {
  let [counter , setCounter] = useState(15)
// let counter = 15; 
let addValue = ()=>{
  console.log('clicked '+ counter )
// counter = counter +1;
if(counter < 20)
setCounter(counter +1)

}
let removeValue = ()=>{
  console.log('clicked '+ counter )
// counter = counter +1;
if(counter > 0)
setCounter(counter -1)

}
  return (
    <>
 <h1>Counter Project</h1>
<p> Counter Value : {counter}</p>
<button
onClick={addValue}
>Add Value :  {counter}</button>
<button onClick={removeValue}>Remove Value : {counter} </button>
    </>
  )
}

export default App
