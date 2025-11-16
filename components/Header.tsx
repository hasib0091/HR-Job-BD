import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import Modal from './Modal';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { Page } from '../App';
import { User } from '../types';

interface HeaderProps {
  navigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ navigate }) => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLoginSuccess = (loggedInUser: User) => {
    setLoginModalOpen(false);
    if (loggedInUser.role === 'admin') {
      navigate(Page.ADMIN);
    }
  };
  
  const handleLogout = () => {
    logout();
    navigate(Page.HOME);
  }

  const openLoginModal = () => {
    setRegisterModalOpen(false);
    setLoginModalOpen(true);
  }

  const openRegisterModal = () => {
    setLoginModalOpen(false);
    setRegisterModalOpen(true);
  }

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div 
            className="text-2xl font-bold text-blue-600 cursor-pointer"
            onClick={() => navigate(Page.HOME)}
          >
            HR Job BD
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => navigate(Page.HOME)} className="text-gray-600 hover:text-blue-600 font-medium">Home</button>
            <button onClick={() => navigate(Page.JOBS)} className="text-gray-600 hover:text-blue-600 font-medium">চাকরি (Jobs)</button>
          </div>
          <div className="flex items-center space-x-3">
            {user ? (
              <>
                {user.role === 'admin' && (
                  <button onClick={() => navigate(Page.ADMIN)} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 font-semibold">
                    Admin Panel
                  </button>
                )}
                 <span className="text-gray-700 font-medium hidden sm:block">Welcome, {user.email.split('@')[0]}</span>
                <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 font-semibold">
                  Logout
                </button>
              </>
            ) : (
              <>
                <button onClick={openLoginModal} className="text-blue-600 font-semibold hover:underline">
                  Login
                </button>
                <button onClick={openRegisterModal} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-semibold">
                  Register
                </button>
              </>
            )}
          </div>
        </nav>
      </header>
      <Modal isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)} title="Login to your Account">
        <LoginForm onSuccess={handleLoginSuccess} />
      </Modal>
       <Modal isOpen={isRegisterModalOpen} onClose={() => setRegisterModalOpen(false)} title="Create an Account">
        <RegisterForm onSuccess={() => { setRegisterModalOpen(false); setLoginModalOpen(true); }} />
      </Modal>
    </>
  );
};

export default Header;
