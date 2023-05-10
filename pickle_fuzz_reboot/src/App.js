import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar'
import Products from './components/Products'
import FAQ from './components/FAQ'
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

// import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
        <Header />
        <Navbar />
        <Products />
        <FAQ />
        <Contact />
        <Footer />
    </ChakraProvider>
  )
};

export default App;