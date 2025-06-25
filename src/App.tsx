import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import InfiniteSlider from './components/InfiniteSlider/InfiniteSlider';
import Services from './components/Services/Services';
import Work from './components/Work/Work';
import Booking from './components/Booking/Booking';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import ZakatProject from './pages/Projects/ZakatProject/ZakatProject';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #000;
    color: white;
    font-family: 'Satoshi', sans-serif;
    min-height: 100vh;
    overflow-x: hidden;
  }
`;

const Home = () => (
  <>
    <Hero />
    <InfiniteSlider />
    <section id="services">
      <Services />
    </section>
    <section id="work">
      <Work />
    </section>
    <section id="booking">
      <Booking />
    </section>
    <section id="faq">
      <FAQ />
    </section>
  </>
);

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/wealth-purifying-app" element={<ZakatProject />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
