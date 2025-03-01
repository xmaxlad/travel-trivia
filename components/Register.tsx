'use client'

import {useState} from 'react'
import axios from 'axios'

export default function Register(){
    const [username,setUsername] = useState<string>('')   
    async function registerUser(){
        await axios.post('/api/register-user')
    }
    return(
        <div>
            <input placeholder="Choose username" type='text' value={username} onChange={(e)=>{setUsername(e.target.name)}}></input> 
            <button onClick={registerUser}>  
                Register and generate a share link
            </button>
        </div>
    )
}