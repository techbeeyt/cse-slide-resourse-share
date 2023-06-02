import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
  const events = await prisma.event.findMany();
  return NextResponse.json({
    ...events
  })
}