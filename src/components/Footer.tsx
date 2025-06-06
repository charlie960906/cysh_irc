import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Instagram, Github, Mail, MapPin, Code, Wrench } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <>
      {/* Added Error Reporting Section */}
      <div className="bg-gray-800 text-center py-4">
        <a
        className="text-gray-200 text-sm font-medium"
        > 
          網站出錯了？ </a>
        <a
          href="https://forms.gle/L3oe8yZJuuTKtrAo8"
          className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
        >
           點此告訴我們
        </a>
      </div>

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
                專注於資訊科技的學生社團，培養學生的資訊能力和探討新科技。
              </p>
              <div className="flex space-x-4">
                <a href="https://cc.cysh.cy.edu.tw/home" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Terminal size={20} />
                </a>
                <a href="https://www.instagram.com/cysh_irc/?hl=zh-tw" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://github.com/113cyshirc" className="text-gray-300 hover:text-blue-400 transition-colors">
                  <Github size={20} />
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
                  <span className="text-gray-300">嘉義市東區大雅路二段738號</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail size={20} className="text-blue-400 flex-shrink-0" />
                  <a href="mailto:cyshirc@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
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
    </>
  );
};

export default Footer;