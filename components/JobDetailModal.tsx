import React from 'react';
import { Job } from '../types';
import Modal from './Modal';

interface JobDetailModalProps {
  job: Job | null;
  onClose: () => void;
}

const JobDetailModal: React.FC<JobDetailModalProps> = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <Modal isOpen={!!job} onClose={onClose} title={job.title}>
      <div className="space-y-4 text-gray-700">
        <div className="flex items-center space-x-4">
          <img src={job.companyLogoUrl} alt={`${job.company} logo`} className="w-16 h-16 rounded-lg object-cover border" />
          <div>
            <h3 className="text-xl font-bold text-gray-800">{job.company}</h3>
            <p className="text-gray-500">{job.location}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 pt-2">
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">{job.type}</span>
            <span className="bg-gray-100 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">{job.category}</span>
            {job.salary && <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">{job.salary}</span>}
        </div>

        <div>
          <h4 className="font-bold text-gray-800 mt-4 mb-2">Job Description</h4>
          <p className="whitespace-pre-wrap">{job.description}</p>
        </div>

        <div>
          <h4 className="font-bold text-gray-800 mt-4 mb-2">Requirements</h4>
          <ul className="list-disc list-inside space-y-1">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
        
        <div className="pt-6 text-center">
            <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Apply Now
            </button>
        </div>

      </div>
    </Modal>
  );
};

export default JobDetailModal;
