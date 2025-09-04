import React from 'react';
import type { CardId } from '../types';

interface PortfolioCardProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onClick'> {
  id: CardId;
  title: string;
  Icon: React.ElementType;
  isSelected: boolean;
  onClick: (id: CardId) => void;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ id, title, Icon, isSelected, onClick, style }) => {
  const baseClasses = 'relative group w-full h-48 p-6 rounded-xl border-2 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden animate-fade-in-up text-left appearance-none';
  
  const selectedClasses = 'border-huffle-yellow shadow-2xl shadow-huffle-yellow/20';
  const notSelectedClasses = 'border-huffle-dark bg-huffle-dark hover:border-huffle-yellow hover:-translate-y-2 hover:shadow-xl hover:shadow-huffle-yellow/10';

  const cardStyle: React.CSSProperties = {
    ...style,
    transformStyle: 'preserve-3d',
    transform: isSelected ? 'rotateY(0deg) scale(1.05)' : 'rotateY(0deg)',
  };

  return (
    <button
      type="button"
      aria-expanded={isSelected}
      aria-controls="content-section"
      onClick={() => onClick(id)}
      className={`${baseClasses} ${isSelected ? selectedClasses : notSelectedClasses}`}
      style={cardStyle}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-huffle-dark via-huffle-dark/80 to-huffle-darker opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10 flex flex-col justify-between h-full">
            <div>
                <Icon className={`w-10 h-10 mb-4 transition-colors duration-300 ${isSelected ? 'text-huffle-yellow' : 'text-huffle-gray group-hover:text-huffle-yellow'}`} />
                <h3 className={`text-2xl font-bold transition-colors duration-300 ${isSelected ? 'text-huffle-light' : 'text-huffle-light'}`}>
                    {title}
                </h3>
            </div>
            <p className={`text-sm font-medium transition-all duration-300 ${isSelected ? 'opacity-100 text-huffle-yellow' : 'opacity-0 group-hover:opacity-100 text-huffle-gray'}`} aria-hidden="true">
                Click to expand
            </p>
        </div>
        <div className="absolute top-4 right-4 w-12 h-12 bg-huffle-yellow/10 rounded-full blur-xl group-hover:w-20 group-hover:h-20 transition-all duration-500"></div>
    </button>
  );
};