import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Users, Clock, Award } from 'lucide-react';
const Home = () => {
  const stats = [{
    icon: Users,
    label: 'Clientes Satisfechos',
    value: '500+'
  }, {
    icon: Clock,
    label: 'Años de Experiencia',
    value: '15+'
  }, {
    icon: Star,
    label: 'Calificación Promedio',
    value: '4.9'
  }, {
    icon: Award,
    label: 'Certificaciones',
    value: '10+'
  }];
  return <div className="pt-16">
      <Helmet>
        <title>Inicio - Juan Carlos Visñuk Servicio Mecánico</title>
        <meta name="description" content="Bienvenido al taller mecánico Juan Carlos Visñuk. Servicio profesional, confiable y de calidad para tu vehículo." />
        <meta property="og:title" content="Inicio - Juan Carlos Visñuk Servicio Mecánico" />
        <meta property="og:description" content="Bienvenido al taller mecánico Juan Carlos Visñuk. Servicio profesional, confiable y de calidad para tu vehículo." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Juan Carlos Visñuk</span>
              <br />
              <span className="text-white">Servicio Mecánico</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/servicios">
                  Ver Servicios <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contacto">Solicitar Presupuesto</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => <motion.div key={stat.label} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios mecánicos para mantener 
              tu vehículo en perfectas condiciones.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[{
            title: 'Mantenimiento Preventivo',
            description: 'Cambios de aceite, filtros y revisiones periódicas',
            image: 'Mecánico realizando cambio de aceite en un vehículo'
          }, {
            title: 'Reparaciones Generales',
            description: 'Diagnóstico y reparación de fallas mecánicas',
            image: 'Mecánico diagnosticando problemas en motor de automóvil'
          }, {
            title: 'Frenos y Suspensión',
            description: 'Servicio especializado en sistemas de frenado',
            image: 'Técnico trabajando en sistema de frenos de vehículo'
          }].map((service, index) => <motion.div key={service.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="service-card rounded-lg p-6 glass-effect">
                <img alt={service.image} className="w-full h-48 object-cover rounded-lg mb-4" src="https://horizons-cdn.hostinger.com/ba2d70f4-b70b-4d8a-9282-0962299c91f6/foto-taller-VOnve.png" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>)}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/servicios">Ver Todos los Servicios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Necesitas servicio para tu vehículo?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contáctanos hoy mismo y obtén un presupuesto personalizado
            </p>
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contacto">Contactar Ahora</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default Home;