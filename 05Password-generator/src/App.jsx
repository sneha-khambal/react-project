import { useState, useCallback ,useEffect ,useRef} from 'react'
 

function App() {

  // useState
const [length, setLength] = useState(8)
const [numberAllowed, setnumberAllowed] = useState(false)
const [chartAllowed, setchartAllowed] = useState(false)
const [password, setPassword] = useState("")

// useCallBack
const  passwordGenerator = useCallback( ()=>{
  let pass = '';
  let str ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  if(numberAllowed) str += '1234567890';
  if(chartAllowed) str += '!@#$%^&*()?<>:"|\`{}[]_';

  for (let i = 1; i <= length; i++) {
   let char = Math.floor(Math.random()*str.length+1);
   pass += str.charAt(char)
    
  }
  setPassword(pass)
  
},[length,numberAllowed,chartAllowed,setPassword])

// useEffect
useEffect(()=>{
  passwordGenerator()
},
[length,numberAllowed,chartAllowed,passwordGenerator])

// useRef
const passwordRef = useRef(null)
const copyBtnRef  = useRef(null)

const copyPassword = useCallback(()=>{
  window.navigator.clipboard.writeText(password);
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,8)
  // color chnge on btn click
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  copyBtnRef.current.style.backgroundColor = randomColor;


},[password])
  return (
    <>
    <div className='bg-gray-600 rounded p-10 text-white pb-5 '
  >
    <h3 className='text-center'>Password Generator</h3>

    <input type="text"  value={password}  readOnly className='h-11 rounded p-3' ref={passwordRef}/>
    <button
    onClick={copyPassword}
     className='bg-blue-200 rounded text-white ml-5 '
     ref={copyBtnRef}>Copy</button>
    <div className='flex justify-content-space-around  text-white'>
<div className='p-2 '>
   <input type="range"  value={length} id='length' min={8} max={50} onChange={(e)=>{setLength(e.target.value)}} />
 <label htmlFor="length" >length: {length}</label></div>
<div className='p-2'>
<input type="checkbox" id='number'   onChange={()=>{setnumberAllowed(prev=>!prev)}} />
 <label htmlFor="number">number</label>
</div>
<div className='p-2'>
<input type="checkbox"    onChange={()=>{setchartAllowed(prev=>!prev)}}/>
 <label htmlFor="Characters" >Characters</label>
</div>

    </div>

    </div>


    </>
  )
}

export default App
