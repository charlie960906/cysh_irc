import React from 'react';
import { members } from '../data/members';
import MemberCard from '../components/MemberCard';
import { Users } from 'lucide-react';

const Leadership: React.FC = () => {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            幹部團隊 / Our Team
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            認識我們的幹部團隊，他們致力於創造卓越的社團體驗
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Team Introduction */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="bg-blue-100 text-blue-600 p-4 rounded-full">
              <Users size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">
                關於我們的團隊 / About Our Team
              </h2>
              <p className="text-gray-600">
                資訊研究社的幹部團隊由一群熱情且有才華的學生組成，他們擁有不同的專業技能和背景。
                我們的幹部們致力於創建一個富有教育意義和支持性的環境，讓所有社員都能發展技術技能並探索自己的興趣領域。
                透過他們的努力和奉獻，我們能夠組織高質量的活動，促進知識分享，並建立緊密的社群關係。
              </p>
            </div>
          </div>
        </div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map(member => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leadership;