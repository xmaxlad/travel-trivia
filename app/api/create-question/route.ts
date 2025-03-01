import {NextResponse} from 'next/server' 
import prisma from '@/lib/prisma'
import { random_index_insert } from '@/lib/utils'

//Generate a new random trivia question. 
export async function GET(){
    try{
        const destinations_count = await prisma.destination.count()
        const random_index = Math.floor(Math.random() * destinations_count)

        const destination = await prisma.destination.findMany({
            skip: random_index,
            take : 1,
        })

        const other_destinations = await prisma.destination.findMany({
            where:{
                NOT :{
                    id : destination[0].id 
                }
            },
            take : 3,
            orderBy:{
                id : 'asc'
            }
        })

        const trivia_question = {
            id : destination[0].id,
            clues : destination[0].clues,
            fun_fact : destination[0].fun_fact,
            trivia : destination[0].trivia,
            options : random_index_insert(other_destinations,destination[0]).map(des => des.city), 
            answer : destination[0].city, 
        }

        return NextResponse.json(trivia_question)
    }catch(error){
        return NextResponse.json({message:'Some error encountered while querying the DB.',error})
    }
}