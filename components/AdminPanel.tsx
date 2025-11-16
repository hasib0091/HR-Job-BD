
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import JobPostForm from './JobPostForm';
import { useJobs } from '../hooks/useJobs';

const AdminPanel: React.FC = () => {
  const { user } = useAuth();
  const { jobs } = useJobs();

  if (user?.role !== 'admin') {
    return (
      <div className="text-center p-10">
        <h1 className="text-2xl font-bold text-red-600">Access Denied</h1>
        <p className="text-gray-600">You do not have permission to view this page.</p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome, {user.email}. You can manage job postings here.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Post a New Job</h2>
          <JobPostForm />
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Stats</h2>
          <div className="space-y-4">
            <div className="bg-blue-100 p-4 rounded-md">
              <p className="text-lg font-semibold text-blue-800">Total Jobs Posted</p>
              <p className="text-3xl font-bold text-blue-900">{jobs.length}</p>
            </div>
             <div className="bg-green-100 p-4 rounded-md">
              <p className="text-lg font-semibold text-green-800">Applicants</p>
              <p className="text-3xl font-bold text-green-900">0</p>
               <p className="text-sm text-green-700">(Feature coming soon)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
