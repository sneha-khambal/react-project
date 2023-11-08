import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")
  return (
    <>
    <div className='h-screen duration-200' style={{backgroundColor:color, width: '100vw'}}> 
 
    </div>
       <div style={{position: 'fixed',display: 'grid', marginTop: '-417px', gap: '10px',outline:'none',border:'none'}}>
       <button 
       onClick={()=>{setColor('red')}}
       style={{backgroundColor:'red', width:'50px',borderRadius:'20px'}}></button>
       <button
           onClick={()=>{setColor('blue')}}
        style={{backgroundColor:'blue', width:'50px',borderRadius:'20px'}}></button>
       <button 
           onClick={()=>{setColor('yellow')}}
       style={{backgroundColor:'yellow', width:'50px',borderRadius:'20px'}}></button>
       <button
         onClick={()=>{setColor('green')}}
       style={{backgroundColor:'green', width:'50px',borderRadius:'20px'}}></button>
       <button
         onClick={()=>{setColor('indigo')}}
 
        style={{backgroundColor:'indigo', width:'50px',borderRadius:'20px'}}></button>
       <button
         onClick={()=>{setColor('orange')}}
 
        style={{backgroundColor:'orange', width:'50px',borderRadius:'20px'}}></button>
     </div>
</>
  
  )
}

export default App
