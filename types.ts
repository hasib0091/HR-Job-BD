
export enum JobType {
  FULL_TIME = 'Full Time',
  PART_TIME = 'Part Time',
  CONTRACT = 'Contract',
  INTERNSHIP = 'Internship',
  REMOTE = 'Remote',
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  category: string;
  type: JobType;
  salary?: string;
  description: string;
  requirements: string[];
  companyLogoUrl: string;
}

export interface User {
  email: string;
  role: 'admin' | 'user';
}
