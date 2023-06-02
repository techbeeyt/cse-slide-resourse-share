import prisma from "@/app/libs/prismadb";

export async function getEvents() {
  return await prisma.event.findMany();
}