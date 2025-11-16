
import { Job, JobType } from './types';

export const ADMIN_EMAIL = 'hasib@gmail.com';
export const ADMIN_PASSWORD = 'hasibkh12';

export const JOB_CATEGORIES = [
  'Software Engineering',
  'Marketing',
  'Design (UI/UX)',
  'Sales',
  'Customer Support',
  'Human Resources',
  'Data Science',
  'Project Management'
];

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Senior React Developer',
    company: 'Tech Solutions Ltd.',
    location: 'Dhaka, Bangladesh',
    category: 'Software Engineering',
    type: JobType.FULL_TIME,
    salary: 'BDT 120,000 - 150,000 / month',
    description: 'We are looking for an experienced React Developer to join our dynamic team. You will be responsible for developing and implementing user interface components using React.js concepts and workflows such as Redux, Flux, and Webpack.',
    requirements: ['5+ years of experience with React.js', 'Strong proficiency in JavaScript, TypeScript, CSS, and HTML', 'Experience with RESTful APIs', 'BSc in Computer Science or related field'],
    companyLogoUrl: 'https://picsum.photos/seed/tech/100',
  },
  {
    id: '2',
    title: 'Digital Marketing Manager',
    company: 'Marketify Inc.',
    location: 'Chittagong, Bangladesh',
    category: 'Marketing',
    type: JobType.REMOTE,
    description: 'Marketify is seeking a Digital Marketing Manager to develop, implement, track and optimize our digital marketing campaigns across all digital channels.',
    requirements: ['Proven working experience in digital marketing', 'Experience with SEO/SEM, marketing database, email, social media and/or display advertising campaigns', 'Solid knowledge of website analytics tools (e.g., Google Analytics)'],
    companyLogoUrl: 'https://picsum.photos/seed/market/100',
  },
  {
    id: '3',
    title: 'UI/UX Designer',
    company: 'Creative Minds',
    location: 'Dhaka, Bangladesh',
    category: 'Design (UI/UX)',
    type: JobType.CONTRACT,
    salary: 'BDT 80,000 - 100,000 / month',
    description: 'We are looking for a talented UI/UX Designer to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into interaction flows and artifacts.',
    requirements: ['Proven UI/UX design experience with a strong portfolio', 'Proficiency in Figma, Sketch, or Adobe XD', 'Excellent visual design skills with sensitivity to user-system interaction'],
    companyLogoUrl: 'https://picsum.photos/seed/creative/100',
  },
  {
    id: '4',
    title: 'Junior Software Engineer',
    company: 'CodeGenius',
    location: 'Remote',
    category: 'Software Engineering',
    type: JobType.INTERNSHIP,
    description: 'An exciting opportunity for a recent graduate to kickstart their career. You will work with senior engineers to build and maintain our web applications.',
    requirements: ['Basic understanding of web development (HTML, CSS, JavaScript)', 'Familiarity with at least one programming language (e.g., Python, Java, Node.js)', 'Eagerness to learn and grow'],
    companyLogoUrl: 'https://picsum.photos/seed/codegenius/100',
  },
];
