import React from 'react';
import { members } from '../data/members';
import MemberCard from '../components/MemberCard';
import { Users } from 'lucide-react';

const Leadership: React.FC = () => {
  // 按屆數分組幹部
  const groupedMembers = members.reduce((acc, member) => {
    const batch = member.batch;
    if (!acc[batch]) {
      acc[batch] = [];
    }
    acc[batch].push(member);
    return acc;
  }, {} as Record<string, typeof members>);

  // 按屆數降序排序（115, 114, 113...）
  const sortedBatches = Object.keys(groupedMembers).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            幹部團隊 / Our Team
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            認識我們的幹部團隊，盡力創造美好的社團體驗
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
              <p className="text-gray-600">我們是一群對資訊很有興趣的高中生</p>
              <p className="text-gray-600">我們分享所學的新知，例如:</p>
              <p className="text-red-600">Traceback (most recent call last):</p>
              <p className="text-red-600">  File ＜stdin＞, line 1, in ＜module＞</p>
              <p className="text-red-600">TypeError: can only concatenate str (not "knowledge") to str</p>
              <p className="text-gray-600">啊! 出錯了...</p>
              <p className="text-gray-600">不過沒關係，因為</p>
              <p className="text-gray-600">就在今年，2025年，我們有許多全新的企劃正在展開。</p>
              <p className="text-gray-600">快來加入資研社，讓我們一起探索資訊世界的奧妙吧!</p>
              <p className="text-gray-600">往下滑看看以前的電神吧!!!</p>
            </div>
          </div>
        </div>

        {/* Team Grid by Batch */}
        {sortedBatches.map(batch => (
          <div key={batch} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              第 {batch} 屆幹部
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groupedMembers[batch].map(member => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;