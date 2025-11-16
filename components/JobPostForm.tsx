
import React, { useState } from 'react';
import { useJobs } from '../hooks/useJobs';
import { Job, JobType } from '../types';
import { JOB_CATEGORIES } from '../constants';

const JobPostForm: React.FC = () => {
  const { addJob } = useJobs();
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState(JOB_CATEGORIES[0]);
  const [type, setType] = useState(JobType.FULL_TIME);
  const [salary, setSalary] = useState('');
  const [description, setDescription] = useState('');
  const [requirements, setRequirements] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newJob: Job = {
      id: new Date().toISOString(),
      title,
      company,
      location,
      category,
      type,
      salary,
      description,
      requirements: requirements.split('\n').filter(req => req.trim() !== ''),
      companyLogoUrl: `https://picsum.photos/seed/${company.replace(/\s/g, '')}/100`,
    };
    addJob(newJob);
    alert('Job posted successfully!');
    // Reset form
    setTitle('');
    setCompany('');
    setLocation('');
    setCategory(JOB_CATEGORIES[0]);
    setType(JobType.FULL_TIME);
    setSalary('');
    setDescription('');
    setRequirements('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Job Title</label>
          {/* FIX: Replaced custom 'form-input' class with Tailwind CSS classes for consistency and to fix compilation error. */}
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Company Name</label>
          {/* FIX: Replaced custom 'form-input' class with Tailwind CSS classes for consistency and to fix compilation error. */}
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            {/* FIX: Replaced custom 'form-input' class with Tailwind CSS classes for consistency and to fix compilation error. */}
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Salary (Optional)</label>
            {/* FIX: Replaced custom 'form-input' class with Tailwind CSS classes for consistency and to fix compilation error. */}
            <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="e.g., BDT 50,000 / month"/>
          </div>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            {/* FIX: Replaced custom 'form-select' class with Tailwind CSS classes for consistency and to fix compilation error. */}
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
              {JOB_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Job Type</label>
            {/* FIX: Replaced custom 'form-select' class with Tailwind CSS classes for consistency and to fix compilation error. */}
            <select value={type} onChange={(e) => setType(e.target.value as JobType)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
              {Object.values(JobType).map(jobType => <option key={jobType} value={jobType}>{jobType}</option>)}
            </select>
          </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Job Description</label>
        {/* FIX: Replaced custom 'form-textarea' class with Tailwind CSS classes for consistency and to fix compilation error. */}
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Requirements (one per line)</label>
        {/* FIX: Replaced custom 'form-textarea' class with Tailwind CSS classes for consistency and to fix compilation error. */}
        <textarea value={requirements} onChange={(e) => setRequirements(e.target.value)} required rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
      </div>
      
      <button type="submit" className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Post Job
      </button>

      {/* FIX: Removed invalid <style jsx> block which caused a compilation error. Styles are now handled by Tailwind CSS classes. */}
    </form>
  );
};

export default JobPostForm;
