import { Activity } from '../types';

export const activities: Activity[] = [
  {
    id: '1',
    title: '嘉義高中第一屆校內競程推廣競賽',
    description: '想挑戰邏輯極限、讓實力被看見嗎？ 嘉義高中首度舉辦校內競程比賽隆重登場，等你來一戰成名，檢驗自我、發展資訊專長！',
    date: '2025-06-07',
    image: '',
    category: 'competition',
    features: [],
    schedule: [
      { time: '12:30 - 13:00', description: '報到' },
      { time: '13:00 - 13:20', description: '競賽講解' },
      { time: '13:20 - 13:30', description: '賽前準備' },
      { time: '13:30 - 16:30', description: '競賽時間' },
      { time: '16:30 - 17:00', description: '頒獎典禮' },
      { time: '17:00 -', description: '賦歸'}
    ],
    location: '嘉義高中科學大樓電腦教室B',
    notes: [
      '比賽雖不提供午餐，但備有免費充飢小點心！',
      '📝 報名截止 6 月 4 日（三）',
      '📧 競賽通知寄發 6 月 5 日（四)'
    ],
    registrationLink: 'https://forms.gle/Behp1XXJ9acfJnMWA',
    websiteLink: '',
    prizes: ['🥇 第一名：$1500', '🥈 第二名：$1000', '🥉 第三名：$500' ,'🏅 佳作：$200 x 5 名' ,'前八名皆有獎金、所有參賽者皆可獲得學校認證之參與獎狀！']
  }
];