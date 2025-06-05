import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { activities } from '../data/activities';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

const ActivityDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const activity = activities.find(a => a.id === id);
  const currentDate = new Date('2025-06-05'); // 當前日期

  if (!activity) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            活動未找到 / Activity not found
          </h1>
          <button
            onClick={() => navigate('/activities')}
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft size={20} className="mr-2" />
            返回活動列表 / Back to activities
          </button>
        </div>
      </div>
    );
  }

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

  // 檢查活動是否已結束
  const isEventEnded = new Date(activity.date) < currentDate;

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="relative h-96">
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <button
              onClick={() => navigate('/activities')}
              className="inline-flex items-center text-white hover:text-blue-200 mb-4"
            >
              <ArrowLeft size={20} className="mr-2" />
              返回活動列表 / Back to activities
            </button>
            <h1 className="text-4xl font-bold mb-4">{activity.title}</h1>
            <div className="flex items-center space-x-4">
              <span className={`px-3 py-1 rounded-full ${getCategoryColor(activity.category)}`}>
                {getCategoryName(activity.category)}
              </span>
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                {formatDate(activity.date)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
              <h2 className="text-2xl font-bold">活動詳情 / Event Details</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                {activity.registrationLink && !isEventEnded ? (
                  <a
                    href={activity.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    立即報名 / Register Now
                  </a>
                ) : isEventEnded ? (
                  <span className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-600 rounded-lg">
                    活動已結束 / Event Ended
                  </span>
                ) : null}
                {activity.websiteLink && (
                  <a
                    href={activity.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    活動官網 / Event Website
                  </a>
                )}
              </div>
            </div>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6">{activity.description}</p>

              {activity.features && activity.features.length > 0 && (
                <>
                  <h3 className="text-xl font-bold mb-4">活動特色 / Features</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                    {activity.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}

              {activity.schedule && activity.schedule.length > 0 && (
                <>
                  <h3 className="text-xl font-bold mb-4">活動流程 / Schedule</h3>
                  <div className="space-y-4 text-gray-600 mb-6">
                    {activity.schedule.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="font-medium w-32">{item.time}</div>
                        <div>{item.description}</div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {activity.location && (
                <>
                  <h3 className="text-xl font-bold mb-4">活動地點 / Location</h3>
                  <p className="text-gray-600 mb-6">{activity.location}</p>
                </>
              )}

              {activity.notes && activity.notes.length > 0 && (
                <>
                  <h3 className="text-xl font-bold mb-4">注意事項 / Notes</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {activity.notes.map((note, index) => (
                      <li key={index}>{note}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;