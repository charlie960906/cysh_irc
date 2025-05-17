import React from 'react';
import { Calendar, Tag } from 'lucide-react';
import { Activity } from '../types';

interface ActivityCardProps {
  activity: Activity;
  detailed?: boolean;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity, detailed = false }) => {
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-TW', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Category badge color
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

  // Category translation
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
    <div 
      id={activity.id}
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl ${
        detailed ? '' : 'transform hover:-translate-y-1'
      }`}
    >
      <div className={`${detailed ? 'h-64 md:h-80' : 'h-48'} overflow-hidden`}>
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
        <p className={`text-gray-600 ${detailed ? '' : 'line-clamp-2'}`}>
          {activity.description}
        </p>
        
        {/* Additional content for detailed view */}
        {detailed && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="font-bold mb-2">活動詳情 / Event Details</h4>
            <p className="text-gray-600 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu erat quis nisi tincidunt finibus. 
              Vivamus facilisis mauris at nibh congue, et malesuada odio posuere.
            </p>
            <p className="text-gray-600">
              Suspendisse potenti. Mauris efficitur sagittis eros, at finibus ante blandit sed. 
              Nulla facilisi. Mauris non nibh at tortor vehicula finibus.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityCard;