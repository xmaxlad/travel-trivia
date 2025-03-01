import { Score, Invitee } from "@/lib/types"

export default function Navbar({score, invitee}:{score : Score, invitee : Invitee | null}){
    const {total,correct,wrong} = score 
    return(
        <nav className='flex flex-row justify-end py-4 px-8 gap-x-8 text-lg rounded-xl'>  
        {invitee && (
            <div className='bg-amber-700 rounded-lg p-2 border-2 flex-1 text-center'>
                {`${invitee.invitee_username} challanged you with score ${invitee.invitee_score}`}
            </div>
        )}
            <div className='bg-amber-700 rounded-lg p-2 border-2'>{`Score - ${total}`}</div>
            <div className='bg-amber-700 rounded-lg p-2 border-2'>{`Right - ${correct}`}</div>
            <div className='bg-amber-700 rounded-lg p-2 border-2'>{`Wrong - ${wrong}`}</div> 

        </nav>
    )
}