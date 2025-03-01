import {NextRequest, NextResponse} from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(req : NextRequest){
    const {username, latest_score} = await req.json() 

    
}