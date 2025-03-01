import {NextResponse} from 'next/server' 
import prisma from '@/lib/prisma'
import { random_index_insert } from '@/lib/utils'
import random from 'random'
import type { Destination } from '@prisma/client'

//Generate a new random trivia question. 
export async function GET(){
    try{
        const destinations_count = await prisma.destination.count()
        const random_index = random.int(0,destinations_count)
        const random_index_arr = [random.int(0,destinations_count),random.int(0,destinations_count),random.int(0,destinations_count)]
        const other_destinations : Destination[] = [] 

        const destination = await prisma.destination.findUnique({
            where:{
                id : random_index 
            }
        }) as Destination

        random_index_arr.forEach(async(index)=>{
            if(other_destinations.length < 3){
                const des = await prisma.destination.findUnique({
                    where:{
                        NOT : {
                            id : destination.id 
                        },
                        id : index,
                    }
                })
                other_destinations.push(des as Destination)
            }
        })

        const trivia_question = {
            id : destination.id,
            clues : destination.clues,
            fun_fact : destination.fun_fact,
            trivia : destination.trivia,
            options : random_index_insert(other_destinations,destination).map(des => des.city), 
            answer : destination.city, 
        }

        return NextResponse.json(trivia_question)
    }catch(error){
        return NextResponse.json({message:'Some error encountered while querying the DB.',error})
    }
}