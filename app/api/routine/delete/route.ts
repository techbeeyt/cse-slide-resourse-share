import prisma from '@/app/libs/prismadb';
import { NextRequest, NextResponse } from 'next/server';
export async function POST(request: NextRequest) {
  const body = await request.json()
  try {
    await prisma.classRoutine.delete({
      where: {
        id: body.id as string
      }
    })
    return NextResponse.json({
      success: true,
      message: "Class Routine deleted successfully"
    })
  } catch(error) {
    return NextResponse.json({
      success: false,
      message: "No Class Routine found with this ID"
    })
  }
  
}