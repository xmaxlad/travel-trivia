import type {AnswerVerdict} from '@/lib/types'
import random from 'random'

export default function Answer({wrongOrRight,funFacts,playNext}:{wrongOrRight : AnswerVerdict,funFacts:string[],playNext : () => void}){ 
    const image_uri = wrongOrRight === 'wrong' ? '/sad-emoji.webp' : 'victory.png' 
    const rand_num = random.int(0,1) 
    return(
        <div className='z-2 absolute inset-0 flex justify-center items-center bg-black/40'>
            <img src={image_uri} className='w-lg' alt={wrongOrRight}/>
            <div className='flex flex-col items-center'>
                <div className='bg-amber-700 border-2 rounded-lg p-8 max-w-xl text-wrap'>
                    Fun Fact : {funFacts[rand_num]} 
                </div>
                <div className='flex flex-row'>
                <button onClick={playNext}  
                className='cursor-pointer border-2 rounded-lg bg-amber-700 p-4 m-4'>
                    Challange a Friend
                </button>
                <button onClick={playNext}  
                className='cursor-pointer border-2 rounded-lg bg-amber-700 p-4 m-4'>
                    Play Again
                </button>
                </div>
            </div>
        </div>
    )
}