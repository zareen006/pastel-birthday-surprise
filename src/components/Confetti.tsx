import React, { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
  type: 'circle' | 'square' | 'star';
}

const colors = [
  'hsl(340, 60%, 70%)', // blush
  'hsl(280, 50%, 75%)', // lavender
  'hsl(160, 45%, 70%)', // mint
  'hsl(45, 80%, 75%)',  // cream/gold
  'hsl(25, 80%, 75%)',  // peach
];

export const Confetti: React.FC<{ count?: number; active?: boolean }> = ({ 
  count = 50, 
  active = true 
}) => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (!active) {
      setPieces([]);
      return;
    }

    const newPieces: ConfettiPiece[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 8 + Math.random() * 12,
      type: (['circle', 'square', 'star'] as const)[Math.floor(Math.random() * 3)],
    }));
    setPieces(newPieces);
  }, [count, active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
          }}
        >
          {piece.type === 'circle' && (
            <div
              className="rounded-full"
              style={{
                width: piece.size,
                height: piece.size,
                backgroundColor: piece.color,
              }}
            />
          )}
          {piece.type === 'square' && (
            <div
              className="rotate-45"
              style={{
                width: piece.size,
                height: piece.size,
                backgroundColor: piece.color,
              }}
            />
          )}
          {piece.type === 'star' && (
            <svg
              width={piece.size}
              height={piece.size}
              viewBox="0 0 24 24"
              fill={piece.color}
            >
              <polygon points="12,2 15,9 22,9 17,14 19,22 12,17 5,22 7,14 2,9 9,9" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

export const Sparkles: React.FC<{ count?: number }> = ({ count = 20 }) => {
  const [sparkles, setSparkles] = useState<{ id: number; top: number; left: number; delay: number; size: number }[]>([]);

  useEffect(() => {
    const newSparkles = Array.from({ length: count }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      size: 4 + Math.random() * 8,
    }));
    setSparkles(newSparkles);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle"
          style={{
            top: `${sparkle.top}%`,
            left: `${sparkle.left}%`,
            animationDelay: `${sparkle.delay}s`,
          }}
        >
          <svg
            width={sparkle.size}
            height={sparkle.size}
            viewBox="0 0 24 24"
            fill="hsl(45, 80%, 70%)"
          >
            <polygon points="12,2 15,9 22,9 17,14 19,22 12,17 5,22 7,14 2,9 9,9" />
          </svg>
        </div>
      ))}
    </div>
  );
};
