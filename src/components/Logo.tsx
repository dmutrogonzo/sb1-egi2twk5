import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12 w-12" }) => {
  return (
    <img 
      src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/levcamp-2024.png"
      alt="LevCamp Logo"
      className={`object-contain ${className}`}
    />
  );
};

export default Logo;