import React from 'react';
import Cat from './Cat';

const THEME_COLORS = [
  '#6366f1', // Indigo Primary
  '#818cf8', // Indigo Light
  '#4f46e5', // Indigo Dark
  '#3b82f6', // Bright Blue
  '#60a5fa', // Sky Blue
  '#1d4ed8', // Royal Blue
  '#f59e0b', // Amber Accent
  '#ec4899', // Pink Accent
];

const Mascot: React.FC = () => {
  const cats = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    color: THEME_COLORS[i % THEME_COLORS.length],
    initialX: Math.random() * (window.innerWidth - 100),
    initialY: Math.random() * (window.innerHeight - 100),
  }));

  return (
    <>
      {cats.map((cat) => (
        <Cat 
          key={cat.id}
          id={cat.id}
          color={cat.color}
          initialX={cat.initialX}
          initialY={cat.initialY}
        />
      ))}
    </>
  );
};

export default Mascot;