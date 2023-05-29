"use client";

import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth'

interface NextAuthProviderProps {
  children: React.ReactNode;
}

const NextAuthProvider: React.FC<NextAuthProviderProps> = ({
  children
}) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default NextAuthProvider
