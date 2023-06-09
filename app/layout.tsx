import './globals.css';
import { Nunito } from 'next/font/google';
import ClientOnly from './components/ClientOnly';
import Navbar from  './components/navbar/Navbar';
import LoginModal from './components/modal/LoginModal';
import RegisterModal from './components/modal/RegisterModal';
import RentModal from './components/modal/RentModal';
import SearchModal from './components/modal/SearchModal';
import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';

// META DATA
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

// FONT
const font = Nunito({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <RentModal />
          <SearchModal />
          <Navbar currentUser={currentUser}/>
        </ClientOnly>
        <div className='pb-20 pt-20'>
          {children}
        </div>
      </body>
    </html>
  )
}
