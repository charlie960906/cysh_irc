import React from 'react';
import { Member } from '../types';
import { Github, Globe, Instagram } from 'lucide-react';

interface MemberCardProps {
  member: Member;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
      <div className="h-64 overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
        <p className="text-blue-600 font-medium mb-3">{member.role}</p>
        <p className="text-gray-600 mb-4">{member.description}</p>
        
        {member.socialLinks && (
          <div className="flex space-x-4">
            {member.socialLinks.github && (
              <a 
                href={member.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
            )}
            {member.socialLinks.website && (
              <a 
                href={member.socialLinks.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="Website"
              >
                <Globe size={20} />
              </a>
            )}
            {member.socialLinks.instagram && (
              <a 
                href={member.socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberCard