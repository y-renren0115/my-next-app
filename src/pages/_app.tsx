// pages/_app.tsx
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../app/globals.css'
import { AppProps } from 'next/app';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Header />
      <Navbar />
      <Sidebar />
      {/* <main>
        <Component {...pageProps} />
      </main> */}
      {/* <Footer /> */}
    </>
  );
}

export default MyApp;