
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Star, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Juan Carlos Visñuk',
      role: 'Mecánico Principal y Propietario',
      experience: '15+ años',
      specialties: ['Motores', 'Transmisiones', 'Diagnóstico'],
      description: 'Fundador del taller con amplia experiencia en mecánica automotriz. Especialista en diagnóstico y reparaciones complejas.',
      image: 'Mecánico profesional con overol trabajando en taller automotriz'
    },
    {
      name: 'Carlos Martínez',
      role: 'Técnico Especialista',
      experience: '8+ años',
      specialties: ['Sistema Eléctrico', 'Frenos', 'Suspensión'],
      description: 'Técnico certificado especializado en sistemas eléctricos y de frenado. Experto en diagnóstico computarizado.',
      image: 'Técnico automotriz usando equipo de diagnóstico computarizado'
    },
    {
      name: 'Miguel Rodríguez',
      role: 'Mecánico Junior',
      experience: '3+ años',
      specialties: ['Mantenimiento', 'Cambios de Aceite', 'Filtros'],
      description: 'Mecánico en formación con gran dedicación y atención al detalle. Especializado en servicios de mantenimiento.',
      image: 'Joven mecánico realizando mantenimiento preventivo de vehículo'
    }
  ];

  const reviews = [
    {
      name: 'María González',
      rating: 5,
      comment: 'Excelente servicio, muy profesionales y honestos. Mi auto quedó como nuevo.',
      date: 'Hace 2 semanas'
    },
    {
      name: 'Roberto Silva',
      rating: 5,
      comment: 'Juan Carlos es muy confiable, siempre explica bien los problemas y las soluciones.',
      date: 'Hace 1 mes'
    },
    {
      name: 'Ana Pérez',
      rating: 5,
      comment: 'Precios justos y trabajo de calidad. Los recomiendo totalmente.',
      date: 'Hace 3 semanas'
    },
    {
      name: 'Luis Fernández',
      rating: 5,
      comment: 'Rápidos y eficientes. Solucionaron el problema de mi auto en tiempo record.',
      date: 'Hace 1 semana'
    }
  ];

  const achievements = [
    { icon: Users, title: 'Más de 500 clientes satisfechos' },
    { icon: Clock, title: '15+ años de experiencia' },
    { icon: Award, title: 'Certificaciones técnicas actualizadas' },
    { icon: Star, title: '4.9/5 estrellas en reseñas' }
  ];

  return (
    <div className="pt-16">
      <Helmet>
        <title>Sobre Nosotros - Juan Carlos Visñuk Servicio Mecánico</title>
        <meta name="description" content="Conoce nuestro equipo de mecánicos profesionales con más de 15 años de experiencia. Lee las reseñas de nuestros clientes satisfechos." />
        <meta property="og:title" content="Sobre Nosotros - Juan Carlos Visñuk Servicio Mecánico" />
        <meta property="og:description" content="Conoce nuestro equipo de mecánicos profesionales con más de 15 años de experiencia. Lee las reseñas de nuestros clientes satisfechos." />
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
              <span className="gradient-text">Sobre Nosotros</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Somos un equipo de profesionales dedicados a brindar el mejor 
              servicio mecánico con honestidad, calidad y experiencia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Nuestra Historia</h2>
              <p className="text-gray-300 mb-4">
                Juan Carlos Visñuk Servicio Mecánico nació hace más de 15 años con la visión 
                de ofrecer servicios mecánicos de calidad, honestos y confiables. Lo que comenzó 
                como un pequeño taller familiar, hoy se ha convertido en un referente de 
                confianza en la comunidad.
              </p>
              <p className="text-gray-300 mb-4">
                Nuestro compromiso siempre ha sido el mismo: tratar cada vehículo como si fuera 
                nuestro, brindando un servicio personalizado y explicando claramente cada 
                procedimiento a nuestros clientes.
              </p>
              <p className="text-gray-300">
                A lo largo de los años, hemos invertido en equipos modernos y capacitación 
                continua para mantenernos actualizados con las últimas tecnologías automotrices.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img  
                alt="Historia del taller mecánico Juan Carlos Visñuk"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
               src="https://images.unsplash.com/photo-1693289843022-9f75452a9697" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Nuestros Logros</h2>
            <p className="text-xl text-gray-300">
              Años de dedicación y trabajo duro nos han llevado a estos resultados
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center glass-effect rounded-lg p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-4">
                  <achievement.icon className="h-8 w-8 text-blue-400" />
                </div>
                <p className="text-white font-medium">{achievement.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Nuestro Equipo</h2>
            <p className="text-xl text-gray-300">
              Profesionales capacitados y comprometidos con la excelencia
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect rounded-lg p-6 text-center"
              >
                <img  
                  alt={`${member.name} - ${member.role}`}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                 src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm mb-3">{member.experience} de experiencia</p>
                <p className="text-gray-300 text-sm mb-4">{member.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.specialties.map((specialty) => (
                    <span 
                      key={specialty}
                      className="px-2 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Reseñas de Google</h2>
            <p className="text-xl text-gray-300">
              Lo que dicen nuestros clientes sobre nosotros
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm">{review.date}</span>
                </div>
                <p className="text-gray-300 mb-4">"{review.comment}"</p>
                <p className="text-white font-medium">- {review.name}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center space-x-2 bg-green-600/20 rounded-lg px-6 py-3">
              <Star className="h-6 w-6 text-yellow-400 fill-current" />
              <span className="text-white font-semibold text-lg">4.9/5</span>
              <span className="text-gray-300">basado en 50+ reseñas de Google</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Nuestras Instalaciones</h2>
            <p className="text-xl text-gray-300">
              Un vistazo a nuestro taller y equipos de trabajo
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Área de trabajo principal del taller mecánico con elevadores',
              'Zona de diagnóstico con equipos computarizados modernos',
              'Área de almacenamiento de repuestos y herramientas organizadas',
              'Estación de cambio de aceite y mantenimiento preventivo',
              'Zona de reparación de frenos y suspensión',
              'Oficina de atención al cliente cómoda y profesional'
            ].map((description, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-lg"
              >
                <img  
                  alt={`Instalaciones del taller - ${description}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                 src="https://images.unsplash.com/photo-1580894897591-ff1e18c89183" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
