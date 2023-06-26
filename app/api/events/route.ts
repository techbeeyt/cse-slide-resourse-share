import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
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

  console.log(events);
  console.log("logged in api/events/route.ts");

  return NextResponse.json([
    ...events
  ])
}