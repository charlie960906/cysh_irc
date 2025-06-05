export interface Activity {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  category: 'workshop' | 'competition' | 'seminar' | 'project';
  features?: string[]; // 活動特色
  schedule?: { time: string; description: string }[]; // 行程
  location?: string; // 地點
  notes?: string[]; // 注意事項
  registrationLink?: string; // 報名連結
  websiteLink?: string; // 活動官網連結
}

export interface Member {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
  batch: string;
  socialLinks?: {
    github?: string;
    website?: string;
    instagram?: string;
  };
}
