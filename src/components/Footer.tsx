import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Github, Mail, MapPin, Code, Wrench} from 'lucide-react';


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code size={24} className="text-blue-400" />
              <h3 className="text-xl font-bold">資訊研究社</h3>
            </div>
            <p className="text-gray-300 mb-4">
              專注於計算機科學和資訊技術研究的學生社團，培養學生的技術能力和創新思維。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:info@infoclub.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">快速連結 / Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  首頁 / Home
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-gray-300 hover:text-blue-400 transition-colors">
                  活動 / Activities
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="text-gray-300 hover:text-blue-400 transition-colors">
                  幹部 / Leadership
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">聯絡我們 / Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">嘉義市大雅路</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-400 flex-shrink-0" />
                <a href="mailto:cyshirc@gamil.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                  cyshirc@gmail.com
                </a>
              </li>
                <li className="flex items-center space-x-3">  
                 <Wrench size={20} className="text-blue-400 flex-shrink-0" /> 
                <a href="https://hyjdevelop.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                  維護團隊：HYJdevelop
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} 嘉義高中資訊研究社 / Powered by <a href="https://hyjdevelop.com" target="_blank" rel="noopener noreferrer">HYJdevelop</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;