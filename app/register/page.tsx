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
    const [backgroundImage, setBackgroundImage] = useState<string>('')

    const fetchRandomTravelImage = async () => {
        try {
            const response = await axios.get(
                `https://api.unsplash.com/photos/random?query=travel&orientation=landscape&client_id=${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
            )
            setBackgroundImage(response.data.urls.regular)
        } catch (error) {
            console.error('Error fetching image:', error)
        }
    }

    const registerUser = async () => {
        try{
            await axios.post('/api/register-user',{
                username,
                score : score.total 
            })
            await fetchRandomTravelImage()
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
                <div className='flex flex-col bg-amber-700 p-4 m-2 items-center rounded-lg max-w-2xl'> 
                    {backgroundImage && (
                        <div className='relative w-full mb-4'>
                            <img 
                                src={backgroundImage} 
                                alt="Travel background" 
                                className='w-full h-48 object-cover rounded-lg'
                            />
                            <div className='absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4 rounded-lg'>
                                <h2 className='text-2xl font-bold mb-2'>Travel Trivia Challenge!</h2>
                                <p className='text-xl'>{username} Score: {score.total}</p>
                            </div>
                        </div>
                    )}
                    <Link 
                        href={`${ROOT_LINK}?invitee_username=${username}&invitee_score=${score.total}`}
                        className='text-white hover:text-amber-200 text-center break-all'
                    >
                        {`${ROOT_LINK}?invitee_username=${username}&invitee_score=${score.total}`}
                    </Link>
                </div>
            )}
        </div>
    )
}