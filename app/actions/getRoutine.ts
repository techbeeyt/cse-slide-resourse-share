import prisma from "@/app/libs/prismadb";

export async function getRoutines() {
  return await prisma.classRoutine.findMany({
    orderBy: {
      start_time: 'asc'
    },
    where: {
      day: {
        equals: new Date().getDay()
      }
    }
  });
}