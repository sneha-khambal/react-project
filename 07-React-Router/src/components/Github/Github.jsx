import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-Dom'

export default function Github() {
    const data = useLoaderData()
    // const [ data , setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)})
    // },[])
    return (
        <>
            <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'>
                <span  >
                    <h3>Github followers: {data.followers} </h3>
                    <h3>Github id: {data.id} </h3>
                    <h3>Github Name: {data.name} </h3>
                    <h3 className='text-left' >Github Bio: {data.bio} </h3>
                </span>
                <span>  <img src={data.avatar_url} alt="" /></span>
            </div>
        </>
    )
}

export const GithubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/hiteshchoudhary')
    return res.json()

}