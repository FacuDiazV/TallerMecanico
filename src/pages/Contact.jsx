
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Send,
  User,
  Car
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "¡Mensaje Enviado!",
      description: "Hemos recibido tu consulta. Te contactaremos pronto para brindarte un presupuesto personalizado.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      vehicle: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Dirección',
      details: ['Av. Principal 123', 'Ciudad, Provincia', 'Código Postal 12345']
    },
    {
      icon: Phone,
      title: 'Teléfono',
      details: ['+54 11 1234-5678', '+54 9 11 8765-4321']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@jcvisnuk.com', 'presupuestos@jcvisnuk.com']
    },
    {
      icon: Clock,
      title: 'Horarios',
      details: ['Lun - Vie: 8:00 - 18:00', 'Sáb: 8:00 - 13:00', 'Dom: Cerrado']
    }
  ];

  const services = [
    'Mantenimiento Preventivo',
    'Reparación de Motor',
    'Sistema de Frenos',
    'Transmisión',
    'Sistema Eléctrico',
    'Diagnóstico Computarizado',
    'Afinación Completa',
    'Otro (especificar en mensaje)'
  ];

  return (
    <div className="pt-16">
      <Helmet>
        <title>Contacto - Juan Carlos Visñuk Servicio Mecánico</title>
        <meta name="description" content="Contáctanos para solicitar presupuestos y consultas. Estamos ubicados en Av. Principal 123. Teléfono: +54 11 1234-5678." />
        <meta property="og:title" content="Contacto - Juan Carlos Visñuk Servicio Mecánico" />
        <meta property="og:description" content="Contáctanos para solicitar presupuestos y consultas. Estamos ubicados en Av. Principal 123. Teléfono: +54 11 1234-5678." />
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
              <span className="gradient-text">Contacto</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              ¿Necesitas un presupuesto o tienes alguna consulta? 
              Estamos aquí para ayudarte con el mejor servicio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect rounded-lg p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-4">
                  <info.icon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-300 text-sm">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass-effect rounded-lg p-8">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-6 w-6 text-blue-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">Solicitar Presupuesto</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <User className="inline h-4 w-4 mr-1" />
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <Mail className="inline h-4 w-4 mr-1" />
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <Phone className="inline h-4 w-4 mr-1" />
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="+54 11 1234-5678"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <Car className="inline h-4 w-4 mr-1" />
                        Vehículo
                      </label>
                      <input
                        type="text"
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Marca, modelo, año"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Servicio Requerido
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Selecciona un servicio</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Mensaje / Descripción del Problema
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Describe el problema o servicio que necesitas..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    <Send className="h-5 w-5 mr-2" />
                    Enviar Consulta
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="glass-effect rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Nuestra Ubicación</h3>
                <div className="bg-slate-700 rounded-lg h-64 flex items-center justify-center">
                  <img  
                    alt="Mapa de ubicación del taller mecánico Juan Carlos Visñuk"
                    className="w-full h-full object-cover rounded-lg"
                   src="https://images.unsplash.com/photo-1629491370286-1c742871a36c" />
                </div>
                <p className="text-gray-300 mt-4 text-sm">
                  Estamos ubicados en una zona de fácil acceso con estacionamiento disponible.
                </p>
              </div>

              {/* Emergency Contact */}
              <div className="glass-effect rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Contacto de Emergencia</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-red-400 mr-3" />
                    <div>
                      <p className="text-white font-medium">Línea de Emergencia</p>
                      <p className="text-gray-300 text-sm">+54 9 11 9999-8888</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Para emergencias fuera del horario de atención, 
                    contamos con servicio de grúa y asistencia mecánica.
                  </p>
                </div>
              </div>

              {/* Quick Tips */}
              <div className="glass-effect rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Consejos Rápidos</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Para un presupuesto más preciso, incluye marca, modelo y año de tu vehículo
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Describe los síntomas o problemas que has notado
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Menciona si es urgente o puedes programar una cita
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Preguntas Frecuentes</h2>
            <p className="text-xl text-gray-300">
              Respuestas a las consultas más comunes
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: '¿Cuánto tiempo toma un diagnóstico?',
                answer: 'Un diagnóstico básico toma entre 30-60 minutos. Para problemas complejos puede requerir más tiempo.'
              },
              {
                question: '¿Ofrecen garantía en sus trabajos?',
                answer: 'Sí, todos nuestros trabajos incluyen garantía. El tiempo varía según el tipo de servicio realizado.'
              },
              {
                question: '¿Trabajan con todas las marcas de vehículos?',
                answer: 'Trabajamos con la mayoría de marcas y modelos. Contáctanos para confirmar tu vehículo específico.'
              },
              {
                question: '¿Necesito cita previa?',
                answer: 'Recomendamos agendar cita para garantizar atención inmediata, aunque también atendemos sin cita según disponibilidad.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
