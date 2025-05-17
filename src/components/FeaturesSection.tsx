import React from 'react';
import { Code, Users, Lightbulb, Trophy } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
      <div className="flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-600 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Code size={24} />,
      title: "技術培訓 / Technical Training",
      description: "通過研討會、工作坊和專案，發展和增強會員的技術能力。",
    },
    {
      icon: <Users size={24} />,
      title: "社群交流 / Community",
      description: "建立一個支持性的社群，促進會員之間的知識分享和合作。",
    },
    {
      icon: <Lightbulb size={24} />,
      title: "創新項目 / Innovation",
      description: "鼓勵和支持創新思維，開發解決現實問題的項目。",
    },
    {
      icon: <Trophy size={24} />,
      title: "比賽與挑戰 / Competitions",
      description: "參與各種技術競賽，培養問題解決能力和團隊合作精神。",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            我們的特色 / Our Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            資訊研究社致力於提供全面的技術教育和實踐機會，打造未來科技人才
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;