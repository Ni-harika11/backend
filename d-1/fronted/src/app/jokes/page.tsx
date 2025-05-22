"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Jokes = () => {
    const [jokes,setJokes]=useState([]);
    useEffect(()=>{
        axios.get('/api/jokes')
        .then((response)=>{
            setJokes(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
  return (
     <>
     <div className=''>
        <h1>Jokes:{jokes.length}</h1>

        {
            jokes.map((joke,index)=>(
                <div key={joke.id}>
                    <h3>{joke.title}</h3>
                    <p>{joke.content}</p>
                </div>
            ))
        }
     </div>
     </>
  )
}

export default Jokes