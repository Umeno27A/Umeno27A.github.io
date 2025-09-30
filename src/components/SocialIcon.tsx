import React from 'react';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  BookOpen, 
  Mail, 
  Globe,
  ExternalLink
} from 'lucide-react';

interface SocialIconProps {
  name: string;
  className?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ name, className = "w-6 h-6" }) => {
  const icons: Record<string, React.ComponentType<{ className?: string }>> = {
    Github,
    Twitter,
    Linkedin,
    BookOpen,
    Mail,
    Globe,
    ExternalLink
  };

  const IconComponent = icons[name] || ExternalLink;

  return <IconComponent className={className} />;
};

export default SocialIcon;