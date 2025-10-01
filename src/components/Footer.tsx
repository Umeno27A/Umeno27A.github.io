import React from 'react';
import { profile } from '../data/profile';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">{profile.name}</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            {profile.bio}
          </p>
          
          
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} {profile.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;