import prisma from "@/app/libs/prismadb";
import moment from 'moment-timezone';

export async function getRoutines() {
  return await prisma.classRoutine.findMany({
    orderBy: {
      start_time: 'asc'
    },
    where: {
      day: {
        equals: moment().tz('Asia/Dhaka').get('day')
      }
    }
  });
}