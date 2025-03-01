import {NextRequest, NextResponse} from 'next/server'
import prisma from '../../../lib/prisma'

export async function GET(req : NextRequest){
    const {username, latest_score} = await req.json() 

    if(!username) return NextResponse.json({error:'Please provide a username.'})

    const username_exists = await prisma.user.findUnique({
        where:{
            username : username as string
        }
    })

    if(username_exists) return NextResponse.json({error:'Username already exists, please choose another one.'})

    const create_user = await prisma.user.create({
        username,
        latest_score
    })
}