import React, { useState, useEffect } from 'react';
import { MapPin, Search, Filter, Info } from 'lucide-react';

const Map: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);
  const [selectedPoint, setSelectedPoint] = useState<any>(null);
  
  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'murals', name: 'Murales' },
    { id: 'events', name: 'Eventos' },
    { id: 'workshops', name: 'Talleres' },
    { id: 'installations', name: 'Instalaciones' }
  ];
  
  const interestPoints = [
    {
      id: 1,
      name: 'Mural "Espíritu Urbano"',
      category: 'murals',
      artist: 'Carlos Rodríguez',
      coordinates: { x: 30, y: 40 },
      description: 'Un mural vibrante que representa la esencia de la cultura urbana con colores llamativos.'
    },
    {
      id: 2,
      name: 'Batalla de Freestyle',
      category: 'events',
      time: '18:00 - 20:00',
      date: '24 Junio',
      coordinates: { x: 65, y: 35 },
      description: 'Competencia de improvisación entre los mejores MCs de la ciudad.'
    },
    {
      id: 3,
      name: 'Taller de Stencil',
      category: 'workshops',
      instructor: 'Laura Gómez',
      time: '10:00 - 12:00',
      date: '26 Junio',
      coordinates: { x: 45, y: 60 },
      description: 'Aprende técnicas básicas y avanzadas de stencil para crear tu propia obra.'
    },
    {
      id: 4,
      name: 'Instalación "Luces de Ciudad"',
      category: 'installations',
      artist: 'Colectivo Neon',
      coordinates: { x: 75, y: 70 },
      description: 'Una instalación inmersiva de luces que transforma el espacio público.'
    },
    {
      id: 5,
      name: 'Mural "Raíces"',
      category: 'murals',
      artist: 'Ana Martínez',
      coordinates: { x: 20, y: 75 },
      description: 'Un mural que conecta la tradición con la modernidad a través de símbolos ancestrales.'
    }
  ];
  
  const filteredPoints = interestPoints.filter(point => {
    const matchesCategory = selectedCategory === 'all' || point.category === selectedCategory;
    const matchesSearch = point.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  const handlePointClick = (point: any) => {
    setSelectedPoint(point);
    setIsInfoOpen(true);
  };
  
  // Determine color based on category
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'murals':
        return 'text-orange-500 border-orange-500';
      case 'events':
        return 'text-blue-500 border-blue-500';
      case 'workshops':
        return 'text-purple-500 border-purple-500';
      case 'installations':
        return 'text-green-500 border-green-500';
      default:
        return 'text-gray-500 border-gray-500';
    }
  };
  
  const getCategoryBg = (category: string) => {
    switch(category) {
      case 'murals':
        return 'bg-orange-500';
      case 'events':
        return 'bg-blue-500';
      case 'workshops':
        return 'bg-purple-500';
      case 'installations':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Mapa Interactivo</h1>
        
        {/* Search and filters */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              placeholder="Buscar punto de interés..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex overflow-x-auto gap-2 pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  selectedCategory === category.id
                    ? 'bg-purple-100 text-purple-800'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } border border-gray-300`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Map container */}
        <div className="relative bg-gray-100 rounded-lg overflow-hidden border border-gray-200 h-[60vh] mb-6">
          {/* This would be replaced with an actual map integration */}
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://th.bing.com/th/id/R.6bd27c807165f72380ded0d368e3bf30?rik=ON6H8DTeBL0NVA&riu=http%3a%2f%2fcartografiagps.com%2fimg%2fciudades%2fmapa-E32-gps-mexico-leon.jpg&ehk=DN5mOY%2bGp6vFzE9%2fOj%2b5D%2fQAZ42eSNVGB%2bb%2bR0pY4J8%3d&risl=&pid=ImgRaw&r=0')" }}>
            {/* Map markers */}
            {filteredPoints.map((point) => (
              <button
                key={point.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform duration-200 focus:outline-none`}
                style={{ left: `${point.coordinates.x}%`, top: `${point.coordinates.y}%` }}
                onClick={() => handlePointClick(point)}
              >
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${getCategoryBg(point.category)} text-white shadow-lg`}>
                  <MapPin className="h-5 w-5" />
                </div>
              </button>
            ))}
          </div>
          
          {/* Map legend */}
          <div className="absolute bottom-4 right-4 bg-white p-3 rounded-md shadow-md">
            <h3 className="font-medium text-sm mb-2">Leyenda</h3>
            <ul className="space-y-1">
              <li className="flex items-center text-xs">
                <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                Murales
              </li>
              <li className="flex items-center text-xs">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                Eventos
              </li>
              <li className="flex items-center text-xs">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                Talleres
              </li>
              <li className="flex items-center text-xs">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                Instalaciones
              </li>
            </ul>
          </div>
        </div>
        
        {/* List view */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Puntos de Interés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPoints.map((point) => (
              <div 
                key={point.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handlePointClick(point)}
              >
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{point.name}</h3>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryBg(point.category)} text-white`}>
                      {categories.find(c => c.id === point.category)?.name}
                    </span>
                  </div>
                  {point.artist && (
                    <p className="text-sm text-gray-600 mb-1">Artista: {point.artist}</p>
                  )}
                  {point.time && (
                    <p className="text-sm text-gray-600 mb-1">Horario: {point.time}</p>
                  )}
                  {point.date && (
                    <p className="text-sm text-gray-600 mb-1">Fecha: {point.date}</p>
                  )}
                  <button 
                    className="mt-2 text-sm flex items-center text-purple-600 hover:text-purple-800"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePointClick(point);
                    }}
                  >
                    <Info size={14} className="mr-1" /> Ver detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Point details modal */}
      {isInfoOpen && selectedPoint && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6 max-h-[80vh] overflow-y-auto">
            <div className="mb-4 flex justify-between items-start">
              <h2 className="text-xl font-bold">{selectedPoint.name}</h2>
              <button 
                onClick={() => setIsInfoOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-4 ${getCategoryBg(selectedPoint.category)} text-white`}>
              {categories.find(c => c.id === selectedPoint.category)?.name}
            </div>
            
            {selectedPoint.artist && (
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Artista:</span> {selectedPoint.artist}
              </p>
            )}
            
            {selectedPoint.instructor && (
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Instructor:</span> {selectedPoint.instructor}
              </p>
            )}
            
            {selectedPoint.date && (
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Fecha:</span> {selectedPoint.date}
              </p>
            )}
            
            {selectedPoint.time && (
              <p className="text-gray-700 mb-2">
                <span className="font-medium">Horario:</span> {selectedPoint.time}
              </p>
            )}
            
            <p className="text-gray-700 mb-4">
              <span className="font-medium">Descripción:</span><br />
              {selectedPoint.description}
            </p>
            
            {selectedPoint.category === 'workshops' && (
              <button 
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md w-full transition-colors"
                onClick={() => {
                  setIsInfoOpen(false);
                  // Navigate to workshop details/reservation
                }}
              >
                Reservar lugar
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;