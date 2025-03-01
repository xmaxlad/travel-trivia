'use client'

import axios from 'axios'
import {useEffect, useRef, useState} from 'react'

export const useQuestion = () => {
    const [question,setQuestion] = useState()
    const ref = useRef('default')

    const fetchQuestion = async () => {
        try{
            const res = await axios.get('/api/create-question')
            setQuestion(res.data)
        }catch(error){
            throw new Error(`Error encountered ${error}`)
        }
    }

    useEffect(()=>{
        fetchQuestion()
    },[ref])

    return {question}
}