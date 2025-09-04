
import React, { useState, useEffect, useMemo } from 'react';

const TypingEffect: React.FC = () => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = useMemo(() => ["Digital craftsman", "Web Developer", "Software Composer", "Software Developer"], []);

  useEffect(() => {
    const type = () => {
      const currentWord = words[wordIndex];
      const updatedText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        // Pause at end of word
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const typingSpeed = isDeleting ? 75 : 150;
    const timer = setTimeout(type, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-huffle-yellow via-yellow-300 to-yellow-500 min-h-[5rem] sm:min-h-[6rem] md:min-h-[7rem] flex items-center justify-center">
      <span className="text-huffle-light whitespace-nowrap">Gareth:&nbsp;</span>
      <span className="whitespace-nowrap">{text}</span>
      <span className="animate-pulse text-huffle-yellow">|</span>
    </h1>
  );
};

export default TypingEffect;