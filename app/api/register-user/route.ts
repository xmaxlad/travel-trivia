import {NextRequest,NextResponse} from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(req : NextRequest){
    try{
        const {username,score} = await req.json()

    await prisma.user.upsert({
        where:{
            username:username
        },
        update:{
            latest_score : Number(score)
        },
        create:{
            username : username,
            latest_score : Number(score)
        }
    })
    return NextResponse.json({message:"User created/updated successfully."}, {status : 200}) 
    }catch(error){
        console.log(error)
        return NextResponse.json({message:"Some error encountered while adding/updating user.", error}, {status : 400})
    }
}