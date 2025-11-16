import React, { useState, useMemo } from 'react';
import JobCard from '../components/JobCard';
import { useJobs } from '../hooks/useJobs';
import { JOB_CATEGORIES } from '../constants';
import { Job, JobType } from '../types';
import JobDetailModal from '../components/JobDetailModal';

const JobsPage: React.FC = () => {
  const { jobs, loading } = useJobs();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedJobType, setSelectedJobType] = useState('All');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
      const matchesJobType = selectedJobType === 'All' || job.type === selectedJobType;

      return matchesSearch && matchesCategory && matchesJobType;
    });
  }, [jobs, searchTerm, selectedCategory, selectedJobType]);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="md:w-1/4 lg:w-1/5">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
            <h3 className="text-xl font-bold mb-4">Filters</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option>All</option>
                  {JOB_CATEGORIES.map(cat => <option key={cat}>{cat}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Job Type</label>
                <select
                  value={selectedJobType}
                  onChange={(e) => setSelectedJobType(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option>All</option>
                  {Object.values(JobType).map(type => <option key={type}>{type}</option>)}
                </select>
              </div>
            </div>
          </div>
        </aside>

        {/* Job Listings */}
        <main className="flex-grow md:w-3/4 lg:w-4/5">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search by title, company, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {loading ? (
              <p>Loading jobs...</p>
          ) : filteredJobs.length > 0 ? (
            <div className="space-y-6">
              {filteredJobs.map(job => (
                <JobCard key={job.id} job={job} onViewDetails={() => setSelectedJob(job)} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700">No Jobs Found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </main>
      </div>
      <JobDetailModal job={selectedJob} onClose={() => setSelectedJob(null)} />
    </>
  );
};

export default JobsPage;
