import React ,{useContext} from 'react';
import UserContext from '../Context/User.Contextjs';

export default function Profile() {
    const {user} = useContext(UserContext)
  
    if(!user) return <div>Please Login</div>

    return <div>Wlecome || {user.username}</div>
    
}