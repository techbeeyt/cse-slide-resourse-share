import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
  const routines = await prisma.classRoutine.findMany({
    orderBy: {
      start_time: 'asc'
    },
    where: {
      day: {
        equals: new Date().getDay()
      }
    }
  });
  return NextResponse.json([
    ...routines
  ])
}