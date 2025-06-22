import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const useData = useLoaderData()
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/Nashrakha')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])
    
  return (
    <div className='text-center m-4 bg-red-200 text-black p-4 text-3xl'>Github followers: {data.followers}
    <h1 className='text-2xl font-bold'>Github User: {data.name}</h1>
    <img src={data.avatar_url} alt="Git picture" width={300} className='rounded-lg' />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Nashrakha')
    return response.json()
}