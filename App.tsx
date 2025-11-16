
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import AdminPanel from './components/AdminPanel';
import { useAuth } from './hooks/useAuth';

export enum Page {
  HOME = 'HOME',
  JOBS = 'JOBS',
  ADMIN = 'ADMIN'
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const { user } = useAuth();

  const navigate = (page: Page) => {
    // Prevent non-admins from accessing the admin panel
    if (page === Page.ADMIN && user?.role !== 'admin') {
      setCurrentPage(Page.HOME);
      return;
    }
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <HomePage navigateToJobs={() => navigate(Page.JOBS)} />;
      case Page.JOBS:
        return <JobsPage />;
      case Page.ADMIN:
        if (user?.role === 'admin') {
          return <AdminPanel />;
        }
        // Redirect to home if a non-admin tries to access
        navigate(Page.HOME);
        return <HomePage navigateToJobs={() => navigate(Page.JOBS)} />;
      default:
        return <HomePage navigateToJobs={() => navigate(Page.JOBS)} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header navigate={navigate} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
