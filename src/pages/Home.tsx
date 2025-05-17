import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import RecentActivities from '../components/RecentActivities';
import StatsSection from '../components/StatsSection';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <RecentActivities />
      <StatsSection />
    </div>
  );
};

export default Home;