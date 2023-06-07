import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(
  request: NextRequest
) {
  const currentUser = await getCurrentUser();

  if(currentUser?.role !== 'ADMIN') {
    return NextResponse.error();
  }

  const body = await request.json();

  console.log(body);

  const {
    title,
    description,
    date,
    time
  } = body;

  Object.keys(body).forEach((value: any) => {
    if(!body[value]) {
      NextResponse.error();
    }
  });

  const event = await prisma.event.create({
    data: {
      title,
      description,
      date: new Date(date),
      time: new Date("1970-01-01T" + time)
    }
  })

  console.log(event);

  return NextResponse.json({
    status: true,
    message: "Event added successfully"
  })

}