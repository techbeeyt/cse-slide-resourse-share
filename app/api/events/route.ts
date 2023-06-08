import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
  const events = await prisma.event.findMany({
    orderBy: {
      date: 'asc'
    },
    where: {
      date: {
        gte: new Date()
      }
    }
  });

  return NextResponse.json([
    ...events
  ])
}