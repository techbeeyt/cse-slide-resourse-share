import prisma from "@/app/libs/prismadb";

const getUpcomingEvents = async () => {
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

const getAllEvents = async () => {
  return await prisma.event.findMany({
    orderBy: {
      date: 'asc'
    }
  });
}

const getPastEvents = async () => {
  return await prisma.event.findMany({
    orderBy: {
      date: 'desc'
    },
    where: {
      date: {
        lt: new Date()
      }
    }
  });
}



const Events = {
  getUpcomingEvents,
  getAllEvents,
  getPastEvents
}

export default Events;