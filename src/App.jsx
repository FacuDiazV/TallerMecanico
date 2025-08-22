import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home.jsx';
import Services from '@/pages/Services.jsx';
import About from '@/pages/About.jsx';
import Contact from '@/pages/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Juan Carlos Visñuk Servicio Mecánico - Taller Mecánico Profesional</title>
        <meta name="description" content="Servicio mecánico profesional con años de experiencia. Reparaciones, mantenimiento y diagnóstico automotriz de calidad." />
        <meta property="og:title" content="Juan Carlos Visñuk Servicio Mecánico - Taller Mecánico Profesional" />
        <meta property="og:description" content="Servicio mecánico profesional con años de experiencia. Reparaciones, mantenimiento y diagnóstico automotriz de calidad." />
      </Helmet>
      
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;