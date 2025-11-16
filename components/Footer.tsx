
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} HR Job BD. All rights reserved.</p>
        <p className="text-sm text-gray-400 mt-1">Your trusted partner in finding the right career.</p>
      </div>
    </footer>
  );
};

export default Footer;
