import React from 'react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
  onViewDetails: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onViewDetails }) => {
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:ring-2 hover:ring-blue-500 transition-all duration-300 border border-gray-200 flex flex-col sm:flex-row items-start space-x-0 sm:space-x-6 cursor-pointer"
      onClick={onViewDetails}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && onViewDetails()}
      aria-label={`View details for ${job.title} at ${job.company}`}
    >
      <img src={job.companyLogoUrl} alt={`${job.company} logo`} className="w-16 h-16 rounded-full mb-4 sm:mb-0 object-cover border-2 border-gray-100" />
      <div className="flex-grow">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                <p className="text-gray-600 font-semibold">{job.company}</p>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full">{job.type}</span>
        </div>
        <p className="text-gray-500 mt-1">{job.location}</p>
        {job.salary && <p className="text-green-600 font-medium mt-2">{job.salary}</p>}
        <p className="text-gray-700 mt-3 text-sm line-clamp-2">{job.description}</p>
        <div className="mt-4">
          <span className="font-semibold text-blue-600 hover:underline">View Details &rarr;</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
