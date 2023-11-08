import React ,{useContext}from 'react';
import UserContext from '../Context/User.Contextjs';

export default function Login() {
const [username ,setUsername] = React.useState('');
const [password ,setPassword] = React.useState('');

const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({username,password})

    }
    return(
        <>
        <h3>Login</h3>
        <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}  placeholder='Username'/>
        <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
    
}