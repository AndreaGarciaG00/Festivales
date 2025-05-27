import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Brush, ChevronRight, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const [nextEvents, setNextEvents] = useState([
    {
      id: 1,
      title: 'Batalla de Freestyle',
      date: '24 Jun',
      time: '18:00',
      location: 'Plaza Principal'
    },
    {
      id: 2,
      title: 'Exhibición de Graffiti',
      date: '25 Jun',
      time: '16:00',
      location: 'Callejón del Arte'
    },
    {
      id: 3,
      title: 'Taller de Stencil',
      date: '26 Jun',
      time: '10:00',
      location: 'Centro Cultural'
    }
  ]);

  const features = [
    {
      icon: <MapPin className="h-10 w-10 text-orange-500" />,
      title: 'Mapa Interactivo',
      description: 'Explora todas las ubicaciones de murales, instalaciones y eventos en tiempo real.',
      link: '/map'
    },
    {
      icon: <Brush className="h-10 w-10 text-blue-500" />,
      title: 'Talleres y Actividades',
      description: 'Reserva tu lugar en talleres de graffiti, stencil, danza urbana y más.',
      link: '/workshops'
    },
    {
      icon: <Calendar className="h-10 w-10 text-purple-500" />,
      title: 'Programación',
      description: 'Consulta los horarios de todas las actividades, batallas de freestyle y recorridos guiados.',
      link: '/schedule'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/70 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1647121/pexels-photo-1647121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}
        ></div>
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 animate-fade-in">
            Festival de Arte Urbano
          </h1>
          <div className="flex items-center text-2xl md:text-4xl font-bold mb-8">
            <span className="bg-orange-500 px-2 py-1 rounded mr-2">Ciudad</span>
            <span className="bg-blue-500 px-2 py-1 rounded">Viva</span>
          </div>
          <p className="text-xl md:text-2xl text-center max-w-3xl mb-8">
            Tu guía interactiva para explorar murales, asistir a talleres y disfrutar del arte urbano.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/map"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-colors flex items-center justify-center"
            >
              Explorar Mapa <MapPin className="ml-2" size={18} />
            </Link>
            <Link
              to="/workshops"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md transition-colors flex items-center justify-center"
            >
              Reservar Talleres <Brush className="ml-2" size={18} />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center">
          <div className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-slate-900/5 shadow-lg rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-purple-900" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-900">
            Todo lo que necesitas para disfrutar del festival
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Link 
                  to={feature.link} 
                  className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium"
                >
                  Explorar <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-900">Próximos Eventos</h2>
            <Link 
              to="/schedule" 
              className="text-purple-600 hover:text-purple-800 font-medium flex items-center"
            >
              Ver todos <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nextEvents.map((event) => (
              <div 
                key={event.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    <div className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded">
                      {event.date}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500 mb-1">
                    <Calendar size={16} className="mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin size={16} className="mr-2" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para vivir la experiencia?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Descarga nuestra guía, explora el mapa y reserva tus talleres favoritos ahora.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/workshops"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              Reservar Talleres
            </Link>
            <Link
              to="/map"
              className="bg-transparent hover:bg-white/10 border border-white text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              Explorar Mapa
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;