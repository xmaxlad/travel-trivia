import random from 'random'
import type {Destination} from './types'

export function random_index_insert(original_array : Destination[],insert_element : Destination){
    const random_index = random.int(0,original_array.length) 
    original_array.splice(random_index,0,insert_element)
    return original_array
}

export function shuffle_array(original_array : Destination[]){
    for(let i = original_array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1)) as number;
        [original_array[i], original_array[j]] = [original_array[j], original_array[i]];
    }
    return original_array 
}