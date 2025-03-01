'use client'

import { MouseEvent, useState } from 'react'
import {confetti_animation} from '@/lib/confetti'
import WrongAnswer from './WrongAnswer'
const index_option = ['A','B','C','D']
 
export default function Options({options, answer}: {options: string[], answer: string}) {
    const [wrong, setWrong] = useState(false)

    const handleSubmitQuestion = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        if((e.target as HTMLDivElement).innerText.split(' ')[2] === answer) {
            confetti_animation()
        } else {
            setWrong(true)
        }
    }

    const resetWrongState = () => {
        setWrong(false)
    }

    return(
        <div className='grid grid-cols-2' onClick={(e)=>{handleSubmitQuestion(e)}}>
            {options.map((option,idx)=>(
                <div key={idx} className='mx-auto border-2 rounded-lg min-w-xs p-2 m-2 bg-amber-700 cursor-pointer'>
                    {`${index_option[idx]} - ${option}`}
                </div>
            ))}
            {wrong && <WrongAnswer resetState={resetWrongState} />}
        </div>
    )
}