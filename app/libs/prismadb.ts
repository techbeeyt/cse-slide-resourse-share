// this is best practice to use prisma in next js 13. Because next 13 hot reload feature can create
// multiple instances of PrismaClient which is not good!

import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== 'production') globalThis.prisma = client

export default client;