import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { 
  Wrench, 
  Gauge, 
  Shield
} from 'lucide-react';

const Services = () => {

  return (
    <div className="pt-16">
      <Helmet>
        <title>Nuestros Servicios - Juan Carlos Visñuk Servicio Mecánico</title>
        <meta name="description" content="Servicios mecánicos profesionales: mantenimiento preventivo, reparaciones de motor, frenos, transmisión, sistema eléctrico y más." />
        <meta property="og:title" content="Nuestros Servicios - Juan Carlos Visñuk Servicio Mecánico" />
        <meta property="og:description" content="Servicios mecánicos profesionales: mantenimiento preventivo, reparaciones de motor, frenos, transmisión, sistema eléctrico y más." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Nuestros Servicios</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ofrecemos una amplia gama de servicios mecánicos profesionales 
              para mantener tu vehículo en óptimas condiciones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service List Image */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
            >
                <img 
                    src="https://horizons-cdn.hostinger.com/ba2d70f4-b70b-4d8a-9282-0962299c91f6/ac087fd5806b53b7ca09fcbf4a677869.png" 
                    alt="Lista de servicios del taller mecánico Juan Carlos Visñuk" 
                    className="rounded-lg shadow-2xl w-full max-w-3xl"
                />
            </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Por qué elegir nuestros servicios?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Garantía de Calidad</h3>
                <p className="text-gray-300">Todos nuestros trabajos incluyen garantía</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gauge className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Equipos Modernos</h3>
                <p className="text-gray-300">Tecnología de diagnóstico avanzada</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Experiencia</h3>
                <p className="text-gray-300">Más de 15 años en el sector</p>
              </div>
            </div>
            <p className="text-lg text-gray-300 mb-8">
              Trabajamos con repuestos originales y de calidad. 
              Nuestro equipo está capacitado para atender todo tipo de vehículos.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Contactar para Más Información
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;