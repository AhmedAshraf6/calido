import TopNavbar from '@/components/shared-component/navbar/TopNavbar';
import './globals.css';
import { Inter } from 'next/font/google';
import MainProvider from '@/contexts/MainContext';
import AsideNavbar from '@/components/shared-component/navbar/AsideNavbar';
import Navbar from '@/components/shared-component/navbar/Navbar';
import Footer from '@/components/shared-component/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Prolighthub',
  description: 'Prolighthub',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <MainProvider>
          <TopNavbar />
          <Navbar />
          {/* Responsive Navbar */}
          <div>
            <AsideNavbar />
          </div>
          {children}
          <Footer />
          <ToastContainer position='top-center' />
        </MainProvider>
      </body>
    </html>
  );
}
