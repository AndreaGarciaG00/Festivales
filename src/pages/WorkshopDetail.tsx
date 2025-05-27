import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, ArrowLeft, CheckCircle } from 'lucide-react';

const WorkshopDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [workshop, setWorkshop] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    participants: 1
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<any>({});

  // Mock data - would be replaced with actual API call
  const workshopData = {
    1: {
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
      description: 'Aprende las técnicas básicas del graffiti, desde el boceto hasta la aplicación del aerosol. Incluye materiales.',
      longDescription: 'Este taller está dirigido a principiantes interesados en aprender las técnicas básicas del graffiti. Durante 3 horas, exploraremos desde la creación de bocetos hasta la aplicación práctica con aerosol. Todos los materiales están incluidos, por lo que solo necesitas traer ropa que pueda mancharse. El instructor Marco Pérez cuenta con más de 10 años de experiencia en arte urbano y ha participado en festivales internacionales.',
      requirements: ['Ropa cómoda que pueda mancharse', 'Mayores de 15 años', 'No se requiere experiencia previa'],
      included: ['Materiales de dibujo', 'Aerosoles', 'Guantes protectores', 'Mascarillas', 'Certificado de participación']
    },
    2: {
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
      description: 'Taller práctico donde aprenderás a crear plantillas y aplicar la técnica del stencil en diferentes superficies.',
      longDescription: 'En este taller práctico, los participantes aprenderán a diseñar y crear sus propias plantillas para stencil, así como las técnicas para aplicarlas en diferentes superficies. Laura Gómez, reconocida artista especializada en stencil, guiará a los participantes a través de todo el proceso, desde la concepción de la idea hasta la aplicación final. Se explorarán técnicas de corte precisas y métodos para crear diseños multicapa.',
      requirements: ['Mayores de 16 años', 'No se requiere experiencia previa'],
      included: ['Materiales para crear plantillas', 'Aerosoles', 'Superficies para práctica', 'Cutter y herramientas de corte', 'Guantes protectores']
    }
  };

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      if (id && workshopData[id as keyof typeof workshopData]) {
        setWorkshop(workshopData[id as keyof typeof workshopData]);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when field is changed
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };

  const validateForm = () => {
    const newErrors: any = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    }
    
    if (formData.participants < 1) {
      newErrors.participants = 'Debe ser al menos 1 participante';
    } else if (formData.participants > workshop.availableSpots) {
      newErrors.participants = `No hay suficientes lugares disponibles (máximo ${workshop.availableSpots})`;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call to reserve
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (loading) {
    return (
      <div className="pt-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
            <div className="h-96 bg-gray-200 rounded mb-6"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
            <div className="h-12 bg-gray-200 rounded mb-4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!workshop) {
    return (
      <div className="pt-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Taller no encontrado</h2>
            <p className="text-gray-600 mb-6">El taller que buscas no existe o ha sido eliminado.</p>
            <button
              onClick={() => navigate('/workshops')}
              className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" /> Volver a talleres
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate('/workshops')}
          className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium mb-6"
        >
          <ArrowLeft size={16} className="mr-2" /> Volver a talleres
        </button>
        
        {isSuccess ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle size={64} className="text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">¡Reserva Completada!</h2>
            <p className="text-gray-600 mb-6">Tu lugar para "{workshop.title}" ha sido reservado exitosamente.</p>
            <div className="bg-gray-50 p-4 rounded-md mb-6 text-left">
              <h3 className="font-medium mb-2">Detalles de la reserva:</h3>
              <p>Nombre: {formData.name}</p>
              <p>Email: {formData.email}</p>
              <p>Teléfono: {formData.phone}</p>
              <p>Participantes: {formData.participants}</p>
              <p>Fecha: {workshop.date}</p>
              <p>Hora: {workshop.time}</p>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Hemos enviado un correo de confirmación a {formData.email} con todos los detalles.
            </p>
            <button
              onClick={() => navigate('/workshops')}
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
            >
              Explorar más talleres
            </button>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-lg overflow-hidden shadow-md mb-8">
              <div 
                className="h-64 bg-cover bg-center" 
                style={{ backgroundImage: `url(${workshop.image})` }}
              ></div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h1 className="text-2xl font-bold text-gray-900">{workshop.title}</h1>
                  <div className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full mt-2 md:mt-0">
                    {workshop.category.charAt(0).toUpperCase() + workshop.category.slice(1)}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">{workshop.longDescription || workshop.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600">
                      <Calendar size={18} className="mr-3 text-purple-600" />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock size={18} className="mr-3 text-purple-600" />
                      <span>{workshop.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={18} className="mr-3 text-purple-600" />
                      <span>{workshop.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users size={18} className="mr-3 text-purple-600" />
                      <span>
                        <span className="font-medium">{workshop.availableSpots}</span> lugares disponibles de {workshop.capacity}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-medium mb-2">Instructor:</p>
                    <p className="text-gray-700 mb-4">{workshop.instructor}</p>
                    
                    {workshop.requirements && (
                      <>
                        <p className="font-medium mb-2">Requisitos:</p>
                        <ul className="list-disc list-inside text-gray-700 mb-4">
                          {workshop.requirements.map((req: string, index: number) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
                
                {workshop.included && (
                  <div className="mb-6">
                    <p className="font-medium mb-2">El taller incluye:</p>
                    <ul className="list-disc list-inside text-gray-700">
                      {workshop.included.map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            
            {/* Reservation form */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Reserva tu lugar</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      placeholder="Tu nombre completo"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      placeholder="correo@ejemplo.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full p-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500`}
                      placeholder="(123) 456-7890"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="participants" className="block text-sm font-medium text-gray-700 mb-1">
                      Número de participantes *
                    </label>
                    <select
                      id="participants"
                      name="participants"
                      value={formData.participants}
                      onChange={handleChange}
                      className={`w-full p-2 border ${errors.participants ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500`}
                    >
                      {[...Array(Math.min(10, workshop.availableSpots))].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                      ))}
                    </select>
                    {errors.participants && <p className="mt-1 text-sm text-red-600">{errors.participants}</p>}
                  </div>
                </div>
                
                <div className="text-sm text-gray-500 mb-6">
                  <p>* Campos obligatorios</p>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-md transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Procesando...' : 'Confirmar Reserva'}
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WorkshopDetail;