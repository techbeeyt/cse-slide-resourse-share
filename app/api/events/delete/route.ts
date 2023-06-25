import prisma from '@/app/libs/prismadb';
import { NextRequest, NextResponse } from 'next/server';
export async function POST(request: NextRequest) {
  const body = await request.json()
  try {
    await prisma.event.delete({
      where: {
        id: body.id as string
      }
    })
    return NextResponse.json({
      success: true,
      message: "Event deleted successfully"
    })
  } catch(error) {
    return NextResponse.json({
      success: false,
      message: "No event found with this ID"
    })
  }
  
}