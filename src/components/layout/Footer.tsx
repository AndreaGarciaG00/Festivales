import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center text-white font-bold text-xl mb-4">
              <span className="bg-orange-500 px-2 py-1 rounded mr-2">Ciudad</span>
              <span className="bg-blue-500 px-2 py-1 rounded">Viva</span>
            </Link>
            <p className="text-gray-300 mt-2">
              Festival de Arte Urbano que celebra la creatividad y la expresión artística en espacios públicos.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/map" className="text-gray-300 hover:text-white transition-colors">
                  Mapa Interactivo
                </Link>
              </li>
              <li>
                <Link to="/workshops" className="text-gray-300 hover:text-white transition-colors">
                  Reserva de Talleres
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-gray-300 hover:text-white transition-colors">
                  Programación de Eventos
                </Link>
              </li>
              <li>
                <Link to="/information" className="text-gray-300 hover:text-white transition-colors">
                  Información General
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:info@ciudadviva.com" className="text-gray-300 hover:text-white transition-colors">
                  info@ciudadviva.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+52123456789" className="text-gray-300 hover:text-white transition-colors">
                  +52 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>© {new Date().getFullYear()} Festival de Arte Urbano "Ciudad Viva". Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;