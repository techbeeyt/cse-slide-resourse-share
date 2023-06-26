import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(await prisma.event.findMany({
    orderBy: {
      date: 'asc'
    },
    where: {
      date: {
        gte: new Date()
      }
    }
  }));
}