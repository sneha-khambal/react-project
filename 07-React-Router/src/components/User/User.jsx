import React from 'react';
import {useParams} from 'react-router-Dom'

export default function User( ) {
    const {userid} = useParams();
   return(
    <>
    <div className="text-white bg-gray-400 xl">User: {userid} </div>
    </>
   ) 
}