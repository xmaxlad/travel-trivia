const index_option = ['A','B','C','D']
 
export default function Options({option, idx}: {option: string, idx: number}) {
    return(
        <div className='mx-auto border-2 rounded-lg min-w-xs p-2 m-2 bg-amber-700 cursor-pointer'>
            {`${index_option[idx]} - ${option}`} 
        </div>
    )
}