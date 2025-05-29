import React from 'react';
import { Link } from 'react-router-dom';
import { activities } from '../data/activities';
import { Calendar, ArrowRight } from 'lucide-react';
import { Activity } from '../types';
const ActivityCard: React.FC<{ activity: Activity }> = ({ activity }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-TW', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'workshop':
        return 'bg-blue-100 text-blue-800';
      case 'competition':
        return 'bg-purple-100 text-purple-800';
      case 'seminar':
        return 'bg-green-100 text-green-800';
      case 'project':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'workshop':
        return '工作坊 / Workshop';
      case 'competition':
        return '競賽 / Competition';
      case 'seminar':
        return '講座 / Seminar';
      case 'project':
        return '專案 / Project';
      default:
        return category;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img 
          src={activity.image} 
          alt={activity.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-2">
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${getCategoryColor(activity.category)}`}>
            {getCategoryName(activity.category)}
          </span>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar size={14} className="mr-1" />
            {formatDate(activity.date)}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{activity.description}</p>
        <Link 
          to={`/activities/${activity.id}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          了解更多 / Learn more
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

const RecentActivities: React.FC = () => {
  const recentActivities = [...activities]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              近期活動 / Recent Activities
            </h2>
            <p className="text-gray-600">
              探索我們最新的研討會、競賽和工作坊
            </p>
          </div>
          <Link 
            to="/activities" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-4 md:mt-0 font-medium"
          >
            查看所有活動 / View all activities
            <ArrowRight size={18} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentActivities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentActivities;