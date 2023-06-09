import prisma from "@/app/libs/prismadb";

export async function getEvents() {
  return await prisma.event.findMany({
    orderBy: {
      date: 'asc'
    },
    where: {
      date: {
        gte: new Date()
      }
    }
  });
}