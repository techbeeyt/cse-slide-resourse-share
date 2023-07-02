import Leftbar from './components/navbar/Leftbar'
import Topbar from './components/navbar/Topbar'
import SearchModal from './components/searchbar/SearchModal'
import './globals.css'
import { Inter } from 'next/font/google';
import Providers from './providers';
import getCurrentUser from '@/app/actions/getCurrentUser';
import { redirect } from 'next/navigation';
import AddNewEventModal from './components/modals/AddNewEventModal';
import AddNewRoutineModal from './components/modals/AddNewRoutineModal';
import EventDetailsModal from './components/modals/EventDetailsModal';
import EditEventModal from './components/modals/EditEventModal';
import ToasterProvider from './providers/ToastProvider';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CSE 19 B',
  description: 'An app to manage resources by montasir mahmud',
  twitter: {
    card: "summary_large_image",
    creator: "@imamdev_",
    images: "https://example.com/og.png",
  },
  applicationName: "CSE 19b Resource Manager",
  appleWebApp: {
    capable: true,
    title: "CSE 19b Resource Manager",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: "#FFFFFF",
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  manifest: "/manifest.json",
  icons: [
    { rel: "apple-touch-icon", url: "/icons/apple-touch-icon.png" },
    { rel: "shortcut icon", url: "/favicon.ico" },
  ],
  keywords: ["nextjs", "pwa", "next-pwa"],
};

export const style = {
  container: `bg-gray-900 h-screen overflow-hidden relative`,
  mainContainer: `flex flex-col h-screen pl-0 w-full lg:pl-20 lg:space-y-4`,
  main: `h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 md:pt-4 lg:pt-0 lg:px-4`,
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  if(!currentUser) {
    return redirect('/api/auth/signin?callbackUrl=/');
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className='bg-primary min-h-screen text-white'>
            <Topbar
              currentUser={currentUser}
            />
            <Leftbar />
            <SearchModal />
            <AddNewEventModal />
            <EditEventModal />
            <AddNewRoutineModal />
            <EventDetailsModal />
            <ToasterProvider />
            <main>
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
