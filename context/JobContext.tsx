
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Job } from '../types';
import { MOCK_JOBS } from '../constants';

interface JobContextType {
  jobs: Job[];
  addJob: (job: Job) => void;
  loading: boolean;
}

export const JobContext = createContext<JobContextType | undefined>(undefined);

export const JobProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const storedJobs = localStorage.getItem('jobs');
    if (storedJobs) {
      setJobs(JSON.parse(storedJobs));
    } else {
      setJobs(MOCK_JOBS);
      localStorage.setItem('jobs', JSON.stringify(MOCK_JOBS));
    }
    setLoading(false);
  }, []);

  const addJob = (job: Job) => {
    const updatedJobs = [job, ...jobs];
    setJobs(updatedJobs);
    localStorage.setItem('jobs', JSON.stringify(updatedJobs));
  };

  return (
    <JobContext.Provider value={{ jobs, addJob, loading }}>
      {children}
    </JobContext.Provider>
  );
};
