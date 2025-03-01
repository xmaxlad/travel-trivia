'use client'

import Option from '@/components/Option'
import HintMultiple from '@/components/Hint'
import axios from 'axios'
import {useState, useEffect, MouseEvent} from 'react'
import type {Question, AnswerVerdict, Score} from '@/lib/types'
import { confetti_animation } from '@/lib/confetti'
import Answer from '@/components/Answer'
import Navbar from '@/components/Navbar'

export default function Page(){
    const [question,setQuestion] = useState<Question>()
    const [score,setScore] = useState<Score>({total:0,correct:0,wrong:0}) 
    const [wrongOrRight,setWrongOrRight] = useState<AnswerVerdict>('tbd') 
    const [next,setNext] = useState<number>(0) 

    const fetchQuestion = async () => {
        try{
            const res = await axios.get('/api/create-question')
            setQuestion(res.data)
        }catch(error){
            throw new Error('Some error enountered.')
        }
    }

    const handleSubmitQuestion = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        if((e.target as HTMLDivElement).innerText.split(' ')[2] === question?.answer) {
            setScore( {...score , total : score.total + 1, correct : score.correct + 1}) 
            setWrongOrRight('right')
            confetti_animation()
        } else {
            setScore( {...score , total : score.total - 1, wrong : score.wrong + 1}) 
            setWrongOrRight('wrong')
        }
    }

    const playNext = () => {
        setWrongOrRight('tbd')
        setNext(prev => prev + 1) 
    }

    useEffect(()=>{
        fetchQuestion()
    },[next]) 

    return(
        <>
            <Navbar score={score}></Navbar>
            {question ? (
                <div>
                    <HintMultiple hints={question['clues']}></HintMultiple>
                    <div className='grid grid-cols-2' onClick={(e)=>{handleSubmitQuestion(e)}}>
                    {question['options'].map((opt,idx) => (
                        <Option key={idx} option={opt} idx={idx}/>  
                    ))}
                    </div>
                    {wrongOrRight !== 'tbd' && <Answer wrongOrRight={wrongOrRight} funFacts={question['fun_fact']} playNext={playNext}/>} 
                </div>
            ) : (
                <div>
                </div>
            )}
        </>
    )
}