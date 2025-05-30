export interface Activity {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  category: 'workshop' | 'competition' | 'seminar' | 'project';
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
