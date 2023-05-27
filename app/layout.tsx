import ClientOnly from './components/ClientOnly'
import Leftbar from './components/navbar/Leftbar'
import Topbar from './components/navbar/Topbar'
import SearchModal from './components/searchbar/SearchModal'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CSE 19 B',
  description: 'An app to manage resources by montasir mahmud',
}

export const style = {
  container: `bg-gray-900 h-screen overflow-hidden relative`,
  mainContainer: `flex flex-col h-screen pl-0 w-full lg:pl-20 lg:space-y-4`,
  main: `h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 md:pt-4 lg:pt-0 lg:px-4`,
};


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='bg-primary min-h-screen text-white'>
          <ClientOnly>
            <Topbar />
            <Leftbar />
            <SearchModal />
          </ClientOnly>
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
