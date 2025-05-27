import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Search, Filter } from 'lucide-react';

const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  
  const days = [
    { id: 'all', name: 'Todos los días' },
    { id: '24', name: '24 Junio' },
    { id: '25', name: '25 Junio' },
    { id: '26', name: '26 Junio' },
    { id: '27', name: '27 Junio' },
    { id: '28', name: '28 Junio' },
    { id: '29', name: '29 Junio' }
  ];
  
  const categories = [
    { id: 'all', name: 'Todas' },
    { id: 'freestyle', name: 'Freestyle' },
    { id: 'exhibition', name: 'Exhibiciones' },
    { id: 'workshop', name: 'Talleres' },
    { id: 'tour', name: 'Recorridos' },
    { id: 'performance', name: 'Presentaciones' }
  ];
  
  const events = [
    {
      id: 1,
      title: 'Batalla de Freestyle',
      category: 'freestyle',
      day: '24',
      time: '18:00 - 20:00',
      location: 'Plaza Principal',
      description: 'Competencia de improvisación entre los mejores MCs de la ciudad.'
    },
    {
      id: 2,
      title: 'Exhibición de Graffiti en Vivo',
      category: 'exhibition',
      day: '25',
      time: '16:00 - 19:00',
      location: 'Callejón del Arte',
      description: 'Artistas locales e internacionales crean murales en vivo frente al público.'
    },
    {
      id: 3,
      title: 'Taller de Stencil',
      category: 'workshop',
      day: '26',
      time: '10:00 - 12:00',
      location: 'Centro Cultural',
      description: 'Aprende técnicas básicas y avanzadas de stencil para crear tu propia obra.'
    },
    {
      id: 4,
      title: 'Recorrido Guiado: Murales Históricos',
      category: 'tour',
      day: '26',
      time: '17:00 - 19:00',
      location: 'Punto de Encuentro: Parque Central',
      description: 'Tour por los murales más emblemáticos de la ciudad con explicación histórica.'
    },
    {
      id: 5,
      title: 'Presentación de Danza Urbana',
      category: 'performance',
      day: '27',
      time: '19:00 - 20:30',
      location: 'Anfiteatro Municipal',
      description: 'Grupos de danza urbana presentan coreografías de breaking, popping y locking.'
    },
    {
      id: 6,
      title: 'Taller de Fotografía Callejera',
      category: 'workshop',
      day: '27',
      time: '09:00 - 12:00',
      location: 'Barrio Antiguo',
      description: 'Recorrido fotográfico por la ciudad para capturar la esencia del arte urbano.'
    },
    {
      id: 7,
      title: 'Inauguración de Mural Comunitario',
      category: 'exhibition',
      day: '28',
      time: '12:00 - 13:30',
      location: 'Escuela Primaria Central',
      description: 'Ceremonia de inauguración del mural creado por artistas y niños de la comunidad.'
    },
    {
      id: 8,
      title: 'Batalla Final de Freestyle',
      category: 'freestyle',
      day: '29',
      time: '20:00 - 22:00',
      location: 'Plaza Principal',
      description: 'Gran final de la competencia de freestyle con los mejores improvisadores.'
    },
    {
      id: 9,
      title: 'Recorrido Nocturno: Arte y Luces',
      category: 'tour',
      day: '28',
      time: '21:00 - 23:00',
      location: 'Punto de Encuentro: Fuente de la Plaza',
      description: 'Tour nocturno para apreciar el arte urbano iluminado y las instalaciones de luz.'
    },
    {
      id: 10,
      title: 'Concierto de Cierre',
      category: 'performance',
      day: '29',
      time: '18:00 - 23:00',
      location: 'Anfiteatro Municipal',
      description: 'Gran concierto de cierre con artistas locales de rap, hip-hop y música urbana.'
    }
  ];
  
  const filteredEvents = events.filter(event => {
    const matchesDay = activeDay === 'all' || event.day === activeDay;
    const matchesCategory = categoryFilter === 'all' || event.category === categoryFilter;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDay && matchesCategory && matchesSearch;
  });
  
  // Group events by day for the filtered results
  const groupedEvents = filteredEvents.reduce((acc, event) => {
    const day = event.day;
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(event);
    return acc;
  }, {} as Record<string, typeof events>);
  
  // Sort days
  const sortedDays = Object.keys(groupedEvents).sort((a, b) => parseInt(a) - parseInt(b));
  
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'freestyle':
        return 'bg-blue-500';
      case 'exhibition':
        return 'bg-orange-500';
      case 'workshop':
        return 'bg-purple-500';
      case 'tour':
        return 'bg-green-500';
      case 'performance':
        return 'bg-pink-500';
      default:
        return 'bg-gray-500';
    }
  };
  
  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Programación de Eventos</h1>
        <p className="text-gray-600 mb-6">Consulta los horarios de todas las actividades del festival</p>
        
        {/* Search and filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              placeholder="Buscar eventos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            {days.map((day) => (
              <button
                key={day.id}
                onClick={() => setActiveDay(day.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  activeDay === day.id
                    ? 'bg-purple-100 text-purple-800'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border border-gray-300`}
              >
                {day.name}
              </button>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2">
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
        
        {/* Schedule display */}
        {filteredEvents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron eventos que coincidan con tu búsqueda.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {sortedDays.map((day) => (
              <div key={day}>
                <h2 className="text-xl font-semibold mb-4 px-4 py-2 bg-purple-50 rounded-md">
                  {days.find(d => d.id === day)?.name}
                </h2>
                
                <div className="space-y-4">
                  {groupedEvents[day]
                    .sort((a, b) => {
                      const timeA = a.time.split(' - ')[0];
                      const timeB = b.time.split(' - ')[0];
                      return timeA.localeCompare(timeB);
                    })
                    .map((event) => (
                      <div 
                        key={event.id} 
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="p-4 sm:p-6">
                          <div className="sm:flex sm:items-start sm:justify-between">
                            <div className="mb-4 sm:mb-0">
                              <div className="flex items-center mb-2">
                                <div className={`w-3 h-3 rounded-full ${getCategoryColor(event.category)} mr-2`}></div>
                                <h3 className="text-lg font-semibold">{event.title}</h3>
                              </div>
                              <p className="text-gray-600 mb-3">{event.description}</p>
                              
                              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                <div className="flex items-center">
                                  <Clock size={16} className="mr-2 text-purple-600" />
                                  {event.time}
                                </div>
                                <div className="flex items-center">
                                  <MapPin size={16} className="mr-2 text-purple-600" />
                                  {event.location}
                                </div>
                              </div>
                            </div>
                            
                            <div className="mt-2 sm:mt-0 sm:ml-4">
                              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(event.category)}`}>
                                {categories.find(c => c.id === event.category)?.name}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;