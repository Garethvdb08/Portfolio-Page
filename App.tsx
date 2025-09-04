
import React, { useState, useMemo, useEffect } from 'react';
import { PortfolioCard } from './components/PortfolioCard';
import { CardContent } from './components/CardContent';
import { UserIcon, CodeIcon, BriefcaseIcon, MailIcon, GithubIcon } from './components/Icons';
import type { CardId } from './types';
import TypingEffect from './components/TypingEffect';

const StarryBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const generateStars = (count: number) => {
    const boxShadows = [];
    for (let i = 0; i < count; i++) {
      boxShadows.push(`${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`);
    }
    return boxShadows.join(', ');
  };

  const starsSmall = useMemo(() => generateStars(700), []);
  const starsMedium = useMemo(() => generateStars(200), []);
  const starsLarge = useMemo(() => generateStars(100), []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
            className="absolute inset-0 animate-space-gradient"
            style={{ 
                background: 'radial-gradient(ellipse at 50% 0%, hsl(215, 60%, 30%) 0%, #000 80%)',
                backgroundSize: '150% 150%',
            }}
        />
        {/* Small stars (slowest parallax) */}
        <div style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
            <div 
                className="absolute top-0 left-0 w-[1px] h-[1px] rounded-full animate-stars-slow"
                style={{ boxShadow: starsSmall }}
            />
        </div>
        {/* Medium stars */}
        <div style={{ transform: `translateY(${scrollY * 0.15}px)` }}>
            <div 
                className="absolute top-0 left-0 w-[2px] h-[2px] rounded-full animate-stars-medium"
                style={{ boxShadow: starsMedium }}
            />
        </div>
        {/* Large stars (fastest parallax) */}
        <div style={{ transform: `translateY(${scrollY * 0.25}px)` }}>
            <div 
                className="absolute top-0 left-0 w-[3px] h-[3px] rounded-full animate-stars-fast"
                style={{ boxShadow: starsLarge }}
            />
        </div>
    </div>
  );
};


const App: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<CardId | null>(null);

  const cardData = [
    { id: 'about', title: 'About Me', Icon: UserIcon },
    { id: 'skills', title: 'Skills', Icon: CodeIcon },
    { id: 'projects', title: 'Projects', Icon: BriefcaseIcon },
    { id: 'contact', title: 'Contact', Icon: MailIcon },
  ];

  const handleCardClick = (id: CardId) => {
    setSelectedCard(prev => (prev === id ? null : id));
  };

  const content = useMemo(() => {
    if (!selectedCard) return null;
    return <CardContent cardId={selectedCard} />;
  }, [selectedCard]);

  return (
    <div className="relative min-h-screen bg-huffle-darker font-sans p-4 sm:p-6 lg:p-8">
      <StarryBackground />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center py-12 md:py-20 animate-fade-in-up">
          <TypingEffect />
          <p className="mt-4 text-base sm:text-lg md:text-xl text-huffle-gray max-w-3xl mx-auto">
            A passionate frontend developer crafting beautiful and functional web experiences. This interactive portfolio showcases my skills and projects. Click a card to learn more.
          </p>
          <div className="flex justify-center space-x-6 mt-8">
             <a href="https://github.com/Garethvdb08" target="_blank" rel="noopener noreferrer" className="text-huffle-gray hover:text-huffle-yellow transition-colors" aria-label="Gareth's GitHub Profile"><GithubIcon className="w-7 h-7" /></a>
             <a href="https://mail.google.com/mail/?view=cm&fs=1&to=garethvdb18@gmail.com" target="_blank" rel="noopener noreferrer" className="text-huffle-gray hover:text-huffle-yellow transition-colors" aria-label="Email Gareth"><MailIcon className="w-7 h-7" /></a>
          </div>
        </header>

        {/* Cards Grid */}
        <main style={{ perspective: '1000px' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {cardData.map((card, index) => (
              <PortfolioCard
                key={card.id}
                id={card.id as CardId}
                title={card.title}
                Icon={card.Icon}
                isSelected={selectedCard === card.id}
                onClick={handleCardClick}
                style={{ animationDelay: `${100 * (index + 1)}ms` }}
              />
            ))}
          </div>
        </main>
        
        {/* Content Section */}
        <section id="content-section" className="mt-12" aria-live="polite">
            {content}
        </section>

        {/* Footer */}
        <footer className="text-center py-12 mt-12 border-t border-huffle-dark">
          <p className="text-huffle-gray">&copy; {new Date().getFullYear()} Gareth vdb. All Rights Reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
             <a href="https://github.com/Garethvdb08" target="_blank" rel="noopener noreferrer" className="text-huffle-gray hover:text-huffle-yellow transition-colors" aria-label="Gareth's GitHub Profile"><GithubIcon className="w-6 h-6" /></a>
             <a href="https://mail.google.com/mail/?view=cm&fs=1&to=garethvdb18@gmail.com" target="_blank" rel="noopener noreferrer" className="text-huffle-gray hover:text-huffle-yellow transition-colors" aria-label="Email Gareth"><MailIcon className="w-6 h-6" /></a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;