export default function HintMultiple({hints}:{hints : string[]}){
    return(
        <div className='grid grid-cols-2'>
            {hints.map((hint,idx)=>(
                <div key={idx} className='w-xs mx-auto relative m-16'>
                    <img src='/hint-bg.png' className='-z-1 w-full'></img>
                    <div className='mystery-font absolute inset-0 flex items-center justify-center px-6'>{`Hint ${idx+1} - ${hint}`}</div> 
                </div>
            ))}
        </div>
    )
}

export function HintSingle({hint}:{hint : string}){
    return(
        <div className='hint-box'>
            <img src='/hint-bg.png' className='hint-bg'/>
            <div className='mystery-font hint-text'>{hint}</div>
        </div>
    )
}