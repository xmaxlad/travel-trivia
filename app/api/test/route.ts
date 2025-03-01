import {NextRequest,NextResponse} from 'next/server'
import prisma from '../../../lib/prisma'

export async function GET(){ 
    const destinations = await prisma.destination.findFirst({})
    return NextResponse.json(destinations === null ? null : destinations['fun_fact'][0]) 
}