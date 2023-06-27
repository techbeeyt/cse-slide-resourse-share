import { getEvents } from "@/app/actions/getEvents";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    return NextResponse.json(await getEvents());
  } catch (error: any) {
    return NextResponse.error();
  }
}