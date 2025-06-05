import { Activity } from '../types';

export const activities: Activity[] = [
  {
    id: '1',
    title: 'Web Development Workshop',
    description: 'A hands-on workshop teaching the fundamentals of modern web development using React and Next.js.',
    date: '2025-03-15',
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg',
    category: 'workshop',
    features: [
      'Learn React and Next.js from industry experts',
      'Build a real-world project during the workshop',
      'Interactive Q&A sessions',
      'Receive a certificate of completion'
    ],
    schedule: [
      { time: '09:00 - 09:30', description: 'Registration and Welcome' },
      { time: '09:30 - 12:00', description: 'Introduction to React and Next.js' },
      { time: '12:00 - 13:30', description: 'Lunch Break' },
      { time: '13:30 - 16:30', description: 'Hands-on Project Development' },
      { time: '16:30 - 17:00', description: 'Q&A and Closing Remarks' }
    ],
    location: 'Room 302, Information Building, No. 000, Sec. 1, Fuxing S. Rd., Da’an Dist., Taipei City',
    notes: [
      'Bring your own laptop with Node.js installed',
      'Basic knowledge of JavaScript recommended',
      'Free Wi-Fi provided',
      'Contact us for accessibility needs'
    ],
    registrationLink: 'https://example.com/register/web-dev-workshop',
    websiteLink: 'https://example.com/web-dev-workshop'
  },
  {
    id: '2',
    title: 'Annual Coding Competition',
    description: 'Our flagship competitive coding event with challenging problems and exciting prizes.',
    date: '2025-04-20',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    category: 'competition',
    features: [
      'Compete with top coders in Taiwan',
      'Solve real-world algorithmic problems',
      'Win cash prizes and tech gadgets',
      'Network with tech professionals'
    ],
    schedule: [
      { time: '08:30 - 09:00', description: 'Check-in and Team Formation' },
      { time: '09:00 - 12:00', description: 'Coding Round 1' },
      { time: '12:00 - 13:30', description: 'Lunch Break' },
      { time: '13:30 - 16:00', description: 'Coding Round 2' },
      { time: '16:00 - 17:00', description: 'Awards Ceremony' }
    ],
    location: 'Main Hall, Taipei Tech Arena, No. 123, Nanjing E. Rd., Taipei City',
    notes: [
      'Bring your own laptop',
      'Teams of up to 3 participants allowed',
      'Register by April 10, 2025',
      'No external libraries permitted'
    ],
    registrationLink: 'https://example.com/register/coding-competition',
    websiteLink: 'https://example.com/coding-competition'
  },
  {
    id: '3',
    title: 'AI & Machine Learning Seminar',
    description: 'An educational seminar covering the latest advancements in AI and ML technologies.',
    date: '2025-02-10',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    category: 'seminar',
    features: [
      'Insights from AI industry leaders',
      'Overview of cutting-edge ML models',
      'Panel discussion on AI ethics',
      'Networking with AI enthusiasts'
    ],
    schedule: [
      { time: '09:00 - 09:30', description: 'Registration and Coffee' },
      { time: '09:30 - 11:00', description: 'Keynote: Advances in AI' },
      { time: '11:00 - 12:00', description: 'Panel Discussion: AI Ethics' },
      { time: '12:00 - 13:30', description: 'Lunch Break' },
      { time: '13:30 - 15:30', description: 'Technical Talks on ML Models' },
      { time: '15:30 - 16:00', description: 'Closing and Networking' }
    ],
    location: 'Conference Room A, Taipei International Convention Center, No. 1, Xinyi Rd., Taipei City',
    notes: [
      'No laptops required',
      'Free admission with registration',
      'Q&A session at the end',
      'Translation services available'
    ],
    registrationLink: 'https://example.com/register/ai-seminar',
    websiteLink: 'https://example.com/ai-seminar'
  },
  {
    id: '4',
    title: 'Open Source Contribution Day',
    description: 'Join us to learn how to contribute to open source projects and make your first pull request.',
    date: '2025-05-05',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    category: 'workshop',
    features: [
      'Guided open-source contribution process',
      'Mentorship from experienced developers',
      'Contribute to real GitHub projects',
      'Learn Git and GitHub workflows'
    ],
    schedule: [
      { time: '09:00 - 09:30', description: 'Welcome and Introduction' },
      { time: '09:30 - 12:00', description: 'Git and GitHub Basics' },
      { time: '12:00 - 13:30', description: 'Lunch Break' },
      { time: '13:30 - 16:00', description: 'Guided Contribution Session' },
      { time: '16:00 - 16:30', description: 'Wrap-up and Certificates' }
    ],
    location: 'Room 101, Tech Building, No. 456, Zhongshan N. Rd., Taipei City',
    notes: [
      'Bring your own laptop with Git installed',
      'GitHub account required',
      'Beginner-friendly event',
      'Free drinks and snacks provided'
    ],
    registrationLink: 'https://example.com/register/open-source-day',
    websiteLink: 'https://example.com/open-source-day'
  },
  {
    id: '5',
    title: 'Hackathon: Build for Good',
    description: 'A 48-hour hackathon focused on developing solutions for social and environmental challenges.',
    date: '2025-06-15',
    image: 'https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg',
    category: 'competition',
    features: [
      'Collaborate on impactful projects',
      'Mentorship from social impact experts',
      'Prizes for top solutions',
      'Showcase your project to NGOs'
    ],
    schedule: [
      { time: 'Day 1, 08:00 - 09:00', description: 'Registration and Opening' },
      { time: 'Day 1, 09:00 - 18:00', description: 'Hackathon Development' },
      { time: 'Day 1, 18:00 - 20:00', description: 'Dinner and Team Check-in' },
      { time: 'Day 2, 09:00 - 15:00', description: 'Final Development and Submission' },
      { time: 'Day 2, 15:00 - 17:00', description: 'Presentations and Awards' }
    ],
    location: 'Innovation Hub, No. 789, Keelung Rd., Taipei City',
    notes: [
      'Teams of 2-5 participants',
      'Bring your own devices',
      'Meals provided during event',
      'Register by June 1, 2025'
    ],
    registrationLink: 'https://example.com/register/hackathon',
    websiteLink: 'https://example.com/hackathon'
  },
  {
    id: '6',
    title: 'Tech Industry Panel Discussion',
    description: 'Leading professionals from tech companies share insights about careers in the industry.',
    date: '2025-03-30',
    image: 'https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg',
    category: 'seminar',
    features: [
      'Hear from tech industry leaders',
      'Learn about career paths in tech',
      'Interactive Q&A with panelists',
      'Networking with professionals'
    ],
    schedule: [
      { time: '18:30 - 19:00', description: 'Registration and Networking' },
      { time: '19:00 - 20:30', description: 'Panel Discussion' },
      { time: '20:30 - 21:00', description: 'Q&A and Closing' }
    ],
    location: 'Auditorium, Taipei 101, No. 7, Xinyi Rd., Taipei City',
    notes: [
      'Free admission with registration',
      'Evening event, no laptops needed',
      'Business casual attire recommended',
      'Limited seating, RSVP required'
    ],
    registrationLink: 'https://example.com/register/tech-panel',
    websiteLink: 'https://example.com/tech-panel'
  }
];