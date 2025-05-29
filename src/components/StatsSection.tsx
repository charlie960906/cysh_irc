import React from 'react';
import { Users, Calendar, Handshake, BookOpen } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-3xl font-bold mb-1">{value}</h3>
      <p className="text-gray-500">{label}</p>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          <StatItem 
            icon={<Users size={32} />} 
            value="100+" 
            label="歷屆社員 / Club Members" 
          />
          <StatItem 
            icon={<Calendar size={32} />} 
            value="10+" 
            label="年度活動 / Annual Events" 
          />
          <StatItem 
            icon={<Handshake size={32} />} 
            value="15+" 
            label=" 合作友社 / Partner Club" 
          />
          <StatItem 
            icon={<BookOpen size={32} />} 
            value="10y+" 
            label="創辦至今 / Since Founding" 
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;