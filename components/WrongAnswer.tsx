'use client'

import {useRouter} from 'next/navigation'
import {Answer} from '@/lib/types'

export default function WrongAnswer({setTbd} : {setTbd : (str : Answer) => void}){ 
    const router = useRouter()
    
    const handlePlayAgain = () => {
        setTbd('tbd')  
        router.refresh() 
    }

    return(
        <div className='z-2 absolute inset-0 flex justify-center items-center bg-black/40'>
            <img src='/sad-emoji.webp' className='w-lg' alt="sad emoji"></img> 
            <button 
                onClick={handlePlayAgain} 
                className='cursor-pointer border-2 rounded-lg bg-amber-700 p-4 m-4'
            >
                Play Again
            </button> 
        </div>
    )
}