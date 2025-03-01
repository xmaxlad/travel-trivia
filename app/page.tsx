'use client'

import {useRouter} from 'next/navigation'

export default function Home(){
  const router = useRouter()
  return(
    <div className='flex justify-center items-center h-full w-full absolute' onClick={()=>{router.push('/play')}}> 
      <p className='text-4xl bg-amber-700 p-4 border-2 rounded-xl cursor-pointer'>Play</p>
    </div>
  )
}