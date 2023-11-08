import { useState } from 'react'
 

function BgChanger() {
  const [color, setColor] = useState("olive")

  return (
    <>
     <div className='h-screen duration-200' style={{backgroundColor:color, width: '100vw'}}>
        
     </div>
    

    </>
  )
}

export default BgChanger
