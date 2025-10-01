import React from 'react';
import { ChevronDown, MapPin, Mail } from 'lucide-react';
import { profile, socialLinks } from '../data/profile';
import SocialIcon from './SocialIcon';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const element = document.getElementById('skills');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center relative overflow-hidden pt-24">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="梅野 夢作繁"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-25 animate-pulse"></div>
            </div>
          </div>

          {/* Name and Role */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            {profile.name}
          </h1>
          
          <p className="text-xl sm:text-2xl text-blue-600 font-medium mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {profile.role}
          </p>

          {/* Catchphrase */}
          <p className="text-lg sm:text-xl text-gray-600 mb-8 font-medium animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {profile.catchphrase}
          </p>

          {/* Bio */}
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {profile.bio}
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={18} />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail size={18} />
              <a href={`mailto:${profile.email}`} className="hover:text-blue-600 transition-colors">
                {profile.email}
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                title={link.name}
              >
                <SocialIcon name={link.icon} className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </a>
            ))}
          </div>

          {/* Scroll Down */}
          <button
            onClick={scrollToNext}
            className="animate-bounce p-2 text-gray-500 hover:text-blue-600 transition-colors animate-fade-in-up"
            style={{ animationDelay: '1.2s' }}
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;