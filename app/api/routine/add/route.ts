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
    course_title,
    start_time,
    end_time,
    teacher_name,
    room,
    day
  } = body;

  Object.keys(body).forEach((value: any) => {
    if(!body[value]) {
      NextResponse.error();
    }
  });

  const event = await prisma.classRoutine.create({
    data: {
      course_title,
      start_time: new Date("1970-01-01T" + start_time),
      end_time: new Date("1970-01-01T" + end_time),
      teacher_name,
      room_no: room,
      day: parseInt(day)
    }
  })

  console.log(event);

  return NextResponse.json({
    status: true,
    message: "Event added successfully"
  })
}