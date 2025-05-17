import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { activities } from '../data/activities';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';

const ActivityDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const activity = activities.find(a => a.id === id);

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
            <h2 className="text-2xl font-bold mb-6">活動詳情 / Event Details</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6">{activity.description}</p>
              
              <h3 className="text-xl font-bold mb-4">活動特色 / Features</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>專業講師指導 / Professional instruction</li>
                <li>實作練習機會 / Hands-on practice opportunities</li>
                <li>小組討論交流 / Group discussions</li>
                <li>專案實務經驗 / Practical project experience</li>
              </ul>

              <h3 className="text-xl font-bold mb-4">活動流程 / Schedule</h3>
              <div className="space-y-4 text-gray-600 mb-6">
                <div className="flex items-start">
                  <div className="font-medium w-32">09:00 - 09:30</div>
                  <div>報到與開場 / Check-in and Opening</div>
                </div>
                <div className="flex items-start">
                  <div className="font-medium w-32">09:30 - 12:00</div>
                  <div>上午場活動 / Morning Session</div>
                </div>
                <div className="flex items-start">
                  <div className="font-medium w-32">12:00 - 13:30</div>
                  <div>午餐休息 / Lunch Break</div>
                </div>
                <div className="flex items-start">
                  <div className="font-medium w-32">13:30 - 16:30</div>
                  <div>下午場活動 / Afternoon Session</div>
                </div>
                <div className="flex items-start">
                  <div className="font-medium w-32">16:30 - 17:00</div>
                  <div>總結與回饋 / Conclusion and Feedback</div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">活動地點 / Location</h3>
              <p className="text-gray-600 mb-6">
                台北市大安區復興南路一段000號 資訊大樓302教室<br />
                Room 302, Information Building, No. 000, Sec. 1, Fuxing S. Rd., Da'an Dist., Taipei City
              </p>

              <h3 className="text-xl font-bold mb-4">注意事項 / Notes</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>請攜帶個人筆電 / Please bring your laptop</li>
                <li>現場提供飲用水 / Drinking water provided</li>
                <li>請準時參加 / Please arrive on time</li>
                <li>如有特殊需求請提前告知 / Please inform us in advance for special needs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;