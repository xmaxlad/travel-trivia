'use client'

import {useSelector} from 'react-redux'
import { RootState } from '@/lib/store'
import {useState} from 'react'
import { ROOT_LINK } from '@/lib/utils'
import Link from 'next/link'
import axios from 'axios'

export default function Page(){
    const score = useSelector((state : RootState) => state.score) 
    const [username,setUsername] = useState<string>('')
    const [shareLinkBox,setShareLinkBox] = useState<boolean>(false) 

    const registerUser = async () => {
        try{
            await axios.post('/api/register-user',{
                username,
                score : score.total 
            })
        }catch(error){
            console.log(error) 
        }
    }

    return(
        <div className='flex flex-col justify-center items-center absolute w-full h-full'>
            <input type='text' placeholder='Choose a username' value={username} onChange={(e)=>{
                setUsername(e.target.value)
                setShareLinkBox(false) 
            }}
            className='p-2 m-2 min-w-xs border-2 rounded-lg'
            ></input> 
            <button onClick={async()=>{
                await registerUser() 
                setShareLinkBox(true)
            }} className='bg-amber-700 border-2 rounded-lg p-2 m-2 min-w-xs'>Register and Generate a share link</button>
            {shareLinkBox && (
                <div className='flex flex-row bg-amber-700 p-2 m-2 items-center rounded-lg'> 
                    <Link href={`${ROOT_LINK}?invitee_username=${username}&invitee_score=${score.total}`}>{`${ROOT_LINK}?invitee_username=${username}&invitee_score=${score.total}`}</Link>
                </div>
            )}
        </div>
    )
}