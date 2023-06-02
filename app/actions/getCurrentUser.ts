import { getServerSession } from "next-auth";

import { authOptions  } from "@/app/api/auth/[...nextauth]/route";

import prisma from '@/app/libs/prismadb';
import { User } from "@prisma/client";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if(!session?.user?.email) {
      return null;
    }

    const currentUser: User | null = await prisma.user.findUnique({
      where: {
        email: session.user.email as string
      }
    });

    if(!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error: any) {
    return null;
  }
}