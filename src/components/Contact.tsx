import React from 'react';
import { Mail } from 'lucide-react';
import { profile, socialLinks } from '../data/profile';
import SocialIcon from './SocialIcon';

const Contact: React.FC = () => {

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            お問い合わせ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            プロジェクトのご相談や採用に関するお問い合わせなど、お気軽にご連絡ください
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">連絡先情報</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">メールアドレス</p>
                    <a 
                      href={`mailto:${profile.email}`} 
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">SNS</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-blue-100 transition-colors">
                      <SocialIcon 
                        name={link.icon} 
                        className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" 
                      />
                    </div>
                    <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;