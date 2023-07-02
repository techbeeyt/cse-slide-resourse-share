import { NextResponse } from "next/server";
import prisma from '@/app/libs/prismadb';
import moment from 'moment-timezone';

export async function POST(request: Request) {
  try {
    const routines = await prisma.classRoutine.findMany({
      orderBy: {
        start_time: 'asc'
      }
    });
    return NextResponse.json(routines);
  } catch (error: any) {
    return NextResponse.error();
  }
}