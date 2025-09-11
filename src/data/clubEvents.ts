export type EventType = {
  title: string;
  date: string;
  description: string;
  link?: string;
  image: string;
};

export const events: EventType[] = [
  //FUTURE
  {
    title: 'Post-Microsoft Event meeting and Word Vectorization',
    date: '2025-04-17',
    description: 'Discussion on the Microsoft event and discussion on Word Vectorization.',
    image: '/wordvector.png',
    link: '4-17-25',
  },
  {
    title: 'ML Workshop',
    date: '2025-04-18',
    description: 'Build your first ML model.',
    image: '/AI_hero.jpeg',
    link: '#',
  },

  {
    title: 'Welcome Meeting',
    date: '2025-03-30',
    description: 'Kick off the semester with club info.',
    image: '/AI_hero.jpeg',
    link: '#',
  },

  //PAST
  {
    title: 'Hackathon: Solve with AI',
    date: '2025-03-20',
    description: 'Team up and solve problems using AI.',
    image: '/AI_hero.jpeg',
    link: '#',
  },
  {
    title: 'Python and AI Intro',
    date: '2025-03-06',
    description: 'Join us in Northeast Medical Center for a Introductory workshop on Python and AI!',
    image: '/codingSession.webp',
    link: 'pythonintro',
  },
  {
    title: 'Kickoff meeting',
    date: '2025-02-27',
    description:
      'Join us for our first meeting of the semester to discuss upcoming events and opportunities and hear from AI Professionals!',
    image: '/AI_hero.jpeg',
    link: 'tutorialpage',
  },
  

  // Add more
];
