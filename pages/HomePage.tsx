import React, { useState } from 'react';
import { JOB_CATEGORIES } from '../constants';
import { useJobs } from '../hooks/useJobs';
import JobCard from '../components/JobCard';
import JobDetailModal from '../components/JobDetailModal';
import { Job } from '../types';

interface HomePageProps {
  navigateToJobs: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateToJobs }) => {
  const { jobs } = useJobs();
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <>
      <div className="space-y-16">
        {/* Hero Section */}
        <section className="text-center py-16 bg-blue-600 text-white rounded-lg -mt-8 -mx-4 sm:mx-0">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold">Find Your Dream Job Today</h1>
            <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
              Search through thousands of open positions in Bangladesh and find the perfect fit for your career.
            </p>
            <div className="mt-8 max-w-2xl mx-auto flex flex-col sm:flex-row items-center bg-white rounded-lg p-2 shadow-lg">
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                className="w-full sm:flex-grow p-3 text-gray-700 rounded-md sm:rounded-none sm:rounded-l-md focus:outline-none"
              />
              <button
                onClick={navigateToJobs}
                className="w-full sm:w-auto mt-2 sm:mt-0 bg-blue-600 text-white px-8 py-3 rounded-md sm:rounded-none sm:rounded-r-md hover:bg-blue-700 font-semibold transition-colors"
              >
                Search
              </button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Browse Jobs by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {JOB_CATEGORIES.map((category) => (
              <div
                key={category}
                onClick={navigateToJobs}
                className="bg-white p-6 rounded-lg text-center cursor-pointer hover:bg-blue-50 hover:shadow-lg transition-all duration-300 border"
              >
                <h3 className="font-semibold text-gray-700">{category}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Jobs Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Recent Job Postings</h2>
          <div className="space-y-6">
            {jobs.slice(0, 3).map((job) => (
              <JobCard key={job.id} job={job} onViewDetails={() => setSelectedJob(job)} />
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={navigateToJobs}
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 font-semibold text-lg"
            >
              View All Jobs
            </button>
          </div>
        </section>
      </div>
      <JobDetailModal job={selectedJob} onClose={() => setSelectedJob(null)} />
    </>
  );
};

export default HomePage;
