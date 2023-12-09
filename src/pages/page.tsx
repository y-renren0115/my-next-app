import '../app/globals.css'
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import React, { useState } from 'react';
// import 'tailwindcss';
import About from './about'

const HomePage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  return (
    <>
    <Header />
    <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default HomePage;