import React, { useState } from 'react';
import { Mail, Phone, Globe, MapPin, Instagram, Facebook, Twitter, ChevronDown } from 'lucide-react';

const Information: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };
  
  const faqs = [
    {
      question: '¿Cuándo y dónde se realizará el festival?',
      answer: 'El Festival de Arte Urbano "Ciudad Viva" se llevará a cabo del 24 al 29 de junio de 2025 en diferentes locaciones de la ciudad. Consulta el mapa interactivo para ver todas las ubicaciones específicas.'
    },
    {
      question: '¿Los eventos son gratuitos?',
      answer: 'La mayoría de los eventos y exhibiciones son gratuitos. Algunos talleres específicos pueden tener un costo de reserva para cubrir materiales. Esta información se indica claramente en la descripción de cada taller.'
    },
    {
      question: '¿Cómo puedo participar como artista?',
      answer: 'Las convocatorias para artistas se realizan con varios meses de anticipación. Para la próxima edición, mantente atento a nuestras redes sociales o contacta directamente al comité organizador a través de info@ciudadviva.com.'
    },
    {
      question: '¿Se puede asistir con niños?',
      answer: 'Sí, muchos eventos son aptos para toda la familia. Cada actividad indica si tiene restricciones de edad. También contamos con talleres específicos para niños y jóvenes.'
    },
    {
      question: '¿Qué pasa si llueve?',
      answer: 'En caso de lluvia, los eventos al aire libre pueden ser reprogramados o trasladados a ubicaciones techadas. Los cambios se anunciarán en esta aplicación y en nuestras redes sociales.'
    },
    {
      question: '¿Cómo puedo ser voluntario en el festival?',
      answer: 'Agradecemos tu interés en apoyar el festival. Puedes registrarte como voluntario enviando un correo a voluntarios@ciudadviva.com con tus datos y disponibilidad.'
    }
  ];
  
  const organizers = [
    {
      name: 'Ana Martínez',
      role: 'Directora General',
      bio: 'Gestora cultural con más de 10 años de experiencia en la organización de eventos artísticos.',
      image: 'https://www.dzoom.org.es/wp-content/uploads/2019/09/portada-retratos-personas-mayores-ancianos-vejez-retrato-fotografia-734x489.jpg'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Coordinador de Artistas',
      bio: 'Artista urbano reconocido internacionalmente, especializado en murales de gran formato.',
      image: 'https://www.capitaldelarte.com/wp-content/uploads/2018/05/artista.jpg'
    },
    {
      name: 'Laura Gómez',
      role: 'Responsable de Talleres',
      bio: 'Educadora artística especializada en métodos de enseñanza innovadores para arte urbano.',
      image: 'https://img.fotocommunity.com/el-artista-creando-79227551-491b-4942-b30e-4fa71ac00b8d.jpg?height=1080'
    },
    {
      name: 'Marco Pérez',
      role: 'Coordinador de Logística',
      bio: 'Especialista en gestión de eventos con experiencia en festivales internacionales.',
      image: 'https://peruglobal.pe/uploadfotos/imgcom/peruglobal/userfiles/images/peruanos-en-el-exterior/roberto-moll-14-actores-peruanos-triunfan-en-el-extranjero.jpg'
    }
  ];
  
  const sponsors = [
    'Ayuntamiento Municipal',
    'Instituto de Cultura',
    'Fundación Artes Urbanas',
    'Universidad de Bellas Artes',
    'Empresa de Pinturas ColorMax',
    'Tienda de Arte UrbanStyle'
  ];

  return (
    <div className="pt-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Información General</h1>
        <p className="text-gray-600 mb-8">Todo lo que necesitas saber sobre el Festival de Arte Urbano "Ciudad Viva"</p>
        
        {/* About the festival */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">Sobre el Festival</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://images.pexels.com/photos/2119706/pexels-photo-2119706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Festival de Arte Urbano" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 md:w-1/2">
                <p className="text-gray-700 mb-4">
                  El Festival de Arte Urbano "Ciudad Viva" es un evento cultural que celebra la creatividad y la expresión artística en espacios públicos. Durante seis días, la ciudad se transforma en un lienzo gigante donde artistas locales e internacionales comparten su talento a través de murales, graffiti, música, danza y diversas expresiones del arte urbano.
                </p>
                <p className="text-gray-700 mb-4">
                  Nuestro objetivo es democratizar el arte, llevándolo a las calles y haciéndolo accesible para todos, a la vez que se recuperan y revitalizan espacios públicos a través de intervenciones artísticas.
                </p>
                <p className="text-gray-700">
                  El festival incluye exhibiciones de graffiti en vivo, talleres participativos, batallas de freestyle, presentaciones de danza urbana, conciertos y recorridos guiados, creando una experiencia cultural inmersiva para personas de todas las edades.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Organizers */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">Comité Organizador</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {organizers.map((organizer, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={organizer.image} 
                  alt={organizer.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{organizer.name}</h3>
                  <p className="text-purple-600 text-sm mb-2">{organizer.role}</p>
                  <p className="text-gray-600 text-sm">{organizer.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Contact info */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">Contacto</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Información de Contacto</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <Mail className="mr-3 text-purple-600" size={18} />
                      <a href="mailto:info@ciudadviva.com" className="hover:text-purple-600 transition-colors">
                        info@ciudadviva.com
                      </a>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Phone className="mr-3 text-purple-600" size={18} />
                      <a href="tel:+52123456789" className="hover:text-purple-600 transition-colors">
                        +52 123 456 789
                      </a>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <MapPin className="mr-3 text-purple-600" size={18} />
                      <span>Oficina Central: Av. Principal #123, Centro Cultural</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <Globe className="mr-3 text-purple-600" size={18} />
                      <a href="https://www.ciudadviva.org" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
                        www.ciudadviva.org
                      </a>
                    </li>
                  </ul>
                  
                  <h3 className="font-semibold text-lg mt-6 mb-4">Síguenos en Redes Sociales</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                      <Instagram size={24} />
                    </a>
                    <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                      <Facebook size={24} />
                    </a>
                    <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">
                      <Twitter size={24} />
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-4">Envíanos un Mensaje</h3>
                  <form>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Tu email"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Escribe tu mensaje aquí"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                    >
                      Enviar Mensaje
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQs */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">Preguntas Frecuentes</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                    <button
                      className="flex justify-between items-center w-full text-left focus:outline-none"
                      onClick={() => toggleFaq(index)}
                    >
                      <h3 className="font-medium text-lg text-gray-900">{faq.question}</h3>
                      <ChevronDown 
                        className={`h-5 w-5 text-purple-600 transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    {openFaq === index && (
                      <div className="mt-2 text-gray-600">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Sponsors */}
        <section>
          <h2 className="text-2xl font-semibold text-purple-900 mb-4">Patrocinadores y Colaboradores</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                El Festival de Arte Urbano "Ciudad Viva" es posible gracias al apoyo de las siguientes instituciones y empresas:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {sponsors.map((sponsor, index) => (
                  <div key={index} className="bg-gray-50 rounded-md p-4 text-center flex items-center justify-center h-24">
                    <span className="font-medium text-gray-800">{sponsor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Information;