import { Score } from "@/lib/types";

export default function({score}:{score : Score}){
    const {total,correct,wrong} = score 
    return(
        <nav className='flex flex-row justify-end py-4 px-8 gap-x-8 text-lg rounded-xl'>  
            <div className='bg-amber-700 rounded-lg p-2 border-2'>{`Score - ${total}`}</div>
            <div className='bg-amber-700 rounded-lg p-2 border-2'>{`Right - ${correct}`}</div>
            <div className='bg-amber-700 rounded-lg p-2 border-2'>{`Wrong - ${wrong}`}</div> 
        </nav>
    )
}