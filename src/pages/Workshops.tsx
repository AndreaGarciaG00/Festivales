import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Calendar, Clock, MapPin, Users, ChevronRight } from 'lucide-react';

const Workshops: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'graffiti', name: 'Graffiti' },
    { id: 'stencil', name: 'Stencil' },
    { id: 'dance', name: 'Danza Urbana' },
    { id: 'photo', name: 'Fotografía' },
    { id: 'music', name: 'Música' }
  ];
  
  const workshops = [
    {
      id: 1,
      title: 'Introducción al Graffiti',
      category: 'graffiti',
      instructor: 'Marco Pérez',
      date: '24 Junio, 2025',
      time: '10:00 - 13:00',
      location: 'Plaza Principal',
      capacity: 15,
      availableSpots: 8,
      image: 'https://images.pexels.com/photos/3978928/pexels-photo-3978928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Aprende las técnicas básicas del graffiti, desde el boceto hasta la aplicación del aerosol. Incluye materiales.'
    },
    {
      id: 2,
      title: 'Técnicas de Stencil',
      category: 'stencil',
      instructor: 'Laura Gómez',
      date: '25 Junio, 2025',
      time: '16:00 - 19:00',
      location: 'Centro Cultural',
      capacity: 20,
      availableSpots: 5,
      image: 'https://images.pexels.com/photos/6474543/pexels-photo-6474543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Taller práctico donde aprenderás a crear plantillas y aplicar la técnica del stencil en diferentes superficies.'
    },
    {
      id: 3,
      title: 'Danza Urbana y Expresión',
      category: 'dance',
      instructor: 'Carlos Rodríguez',
      date: '26 Junio, 2025',
      time: '18:00 - 20:00',
      location: 'Parque Urbano',
      capacity: 25,
      availableSpots: 15,
      image: 'https://images.pexels.com/photos/2820896/pexels-photo-2820896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Aprende los fundamentos del breaking, popping y locking con uno de los mejores bailarines de la escena urbana.'
    },
    {
      id: 4,
      title: 'Fotografía Callejera',
      category: 'photo',
      instructor: 'Ana Martínez',
      date: '27 Junio, 2025',
      time: '09:00 - 12:00',
      location: 'Barrio Antiguo',
      capacity: 15,
      availableSpots: 3,
      image: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Recorrido fotográfico por la ciudad para capturar la esencia del arte urbano. Se requiere cámara propia.'
    },
    {
      id: 5,
      title: 'Producción Musical Urbana',
      category: 'music',
      instructor: 'DJ Sonic',
      date: '28 Junio, 2025',
      time: '17:00 - 20:00',
      location: 'Estudio Soundlab',
      capacity: 10,
      availableSpots: 2,
      image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Introducción a la producción de beats y bases musicales para hip-hop y música urbana.'
    },
    {
      id: 6,
      title: 'Graffiti Avanzado',
      category: 'graffiti',
      instructor: 'Sara León',
      date: '29 Junio, 2025',
      time: '15:00 - 19:00',
      location: 'Muro Comunitario',
      capacity: 12,
      availableSpots: 4,
      image: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Taller para artistas con experiencia previa. Incluye técnicas avanzadas de sombreado y perspectiva.'
    }
  ];
  
  const filteredWorkshops = workshops.filter(workshop => {
    const matchesCategory = categoryFilter === 'all' || workshop.category === categoryFilter;
    const matchesSearch = workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        workshop.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Talleres y Actividades</h1>
        <p className="text-gray-600 mb-6">Reserva tu lugar en los talleres del Festival de Arte Urbano "Ciudad Viva"</p>
        
        {/* Search and filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              placeholder="Buscar por título o instructor..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex overflow-x-auto gap-2 pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setCategoryFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  categoryFilter === category.id
                    ? 'bg-purple-100 text-purple-800'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border border-gray-300`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Workshops grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkshops.map((workshop) => (
            <div 
              key={workshop.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
            >
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(${workshop.image})` }}
              >
                <div className="h-full w-full bg-black bg-opacity-20 flex items-end">
                  <div className="bg-purple-600 text-white text-sm font-medium px-3 py-1 m-3 rounded-full">
                    {categories.find(c => c.id === workshop.category)?.name}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{workshop.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{workshop.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar size={16} className="mr-2 text-purple-600" />
                    {workshop.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock size={16} className="mr-2 text-purple-600" />
                    {workshop.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin size={16} className="mr-2 text-purple-600" />
                    {workshop.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users size={16} className="mr-2 text-purple-600" />
                    <span>
                      <span className="font-medium">{workshop.availableSpots}</span> lugares disponibles de {workshop.capacity}
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-700">Instructor: <span className="font-medium">{workshop.instructor}</span></p>
                  <Link
                    to={`/workshops/${workshop.id}`}
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium text-sm"
                  >
                    Reservar <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredWorkshops.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron talleres que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Workshops;