'use client'

import Option from '@/components/Option'
import HintMultiple from '@/components/Hint'
import Answer from '@/components/Answer'
import Navbar from '@/components/Navbar'
import axios from 'axios'

import { RootState } from '@/lib/store'
import { confetti_animation } from '@/lib/confetti'
import type {Question, AnswerVerdict} from '@/lib/types'
import { incrementCorrect, incrementWrong } from '@/lib/features/scoreSlice'

import {useSearchParams} from 'next/navigation'
import {useState, useEffect, MouseEvent} from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Page(){
    //React state that is not needed to be shared anywhere else.
    const [question,setQuestion] = useState<Question>()
    const [wrongOrRight,setWrongOrRight] = useState<AnswerVerdict>('tbd') 
    const [next,setNext] = useState<number>(0) 

    //Redux state that is needed to be shared.
    const dispatch = useDispatch()
    const score = useSelector((state: RootState) => state.score)

    //NextJS Search Params
    const searchParams = useSearchParams()
    const invitee_username = searchParams.get('invitee_username')
    const invitee_score = searchParams.get('invitee_score') 
    const invitee = invitee_username ? {invitee_username, invitee_score : Number(invitee_score)} : null 

    const fetchQuestion = async () => {
        try{
            const res = await axios.get('/api/create-question')
            setQuestion(res.data)
            console.log(res.data) 
        }catch(error){
            console.log(error)
        }
    }

    const handleSubmitQuestion = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        if((e.target as HTMLDivElement).innerText.split(' ')[2] === question?.answer) {
            dispatch(incrementCorrect())
            setWrongOrRight('right')
            confetti_animation()
        } else {
            dispatch(incrementWrong())
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
            <Navbar score={score} invitee={invitee}/> 
            {question ? (
                <div>
                    <HintMultiple hints={question['clues']}></HintMultiple>
                    <div className='grid grid-cols-2' onClick={(e)=>{handleSubmitQuestion(e)}}>
                    {
                        //Todo 
                        question['options']?.map((opt,idx) => (
                            <Option key={idx} option={opt} idx={idx}/>  
                        ))
                    }
                    </div>
                    {wrongOrRight !== 'tbd' && <Answer wrongOrRight={wrongOrRight} funFacts={question['fun_fact']} playNext={playNext}/>} 
                </div>
            ) : (
                <div>
                    Please refresh the page.
                </div>
            )}
        </>
    )
}