import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const events = await prisma.event.findUnique({
    where: {
      id: id
    }
  });

  console.log(events);
  console.log("console.log(): api/events/[id]/route.ts");

  return NextResponse.json(events);
}