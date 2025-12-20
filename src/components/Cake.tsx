import React from 'react';

interface CakeProps {
  candleLit: boolean;
  onBlowCandle: () => void;
}

export const Cake: React.FC<CakeProps> = ({ candleLit, onBlowCandle }) => {
  return (
    <div className="relative animate-cake-bounce">
      {/* Cake SVG */}
      <svg
        width="280"
        height="320"
        viewBox="0 0 280 320"
        className="drop-shadow-lg"
      >
        {/* Plate */}
        <ellipse cx="140" cy="300" rx="130" ry="15" fill="hsl(0, 0%, 95%)" />
        <ellipse cx="140" cy="295" rx="120" ry="12" fill="hsl(0, 0%, 100%)" />

        {/* Bottom tier */}
        <rect x="40" y="220" width="200" height="80" rx="8" fill="hsl(340, 60%, 85%)" />
        <rect x="40" y="220" width="200" height="10" rx="4" fill="hsl(340, 60%, 80%)" />
        
        {/* Bottom tier decorations */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <circle
            key={`bottom-${i}`}
            cx={55 + i * 25}
            cy="265"
            r="8"
            fill="hsl(280, 50%, 88%)"
          />
        ))}

        {/* Middle tier */}
        <rect x="60" y="150" width="160" height="75" rx="6" fill="hsl(160, 45%, 85%)" />
        <rect x="60" y="150" width="160" height="8" rx="3" fill="hsl(160, 45%, 80%)" />
        
        {/* Middle tier decorations */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <circle
            key={`middle-${i}`}
            cx={78 + i * 25}
            cy="190"
            r="6"
            fill="hsl(45, 80%, 85%)"
          />
        ))}

        {/* Top tier */}
        <rect x="85" y="90" width="110" height="65" rx="5" fill="hsl(280, 50%, 88%)" />
        <rect x="85" y="90" width="110" height="6" rx="2" fill="hsl(280, 50%, 82%)" />
        
        {/* Top tier decorations */}
        {[0, 1, 2, 3].map((i) => (
          <circle
            key={`top-${i}`}
            cx={103 + i * 25}
            cy="125"
            r="5"
            fill="hsl(340, 60%, 85%)"
          />
        ))}

        {/* Frosting drips */}
        <path
          d="M60 150 Q70 165 75 150 Q85 170 95 150 Q105 168 115 150"
          fill="none"
          stroke="hsl(160, 45%, 80%)"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Candle */}
        <rect x="132" y="40" width="16" height="55" rx="3" fill="hsl(340, 60%, 75%)" />
        <rect x="134" y="40" width="4" height="55" fill="hsl(340, 60%, 80%)" opacity="0.5" />
        
        {/* Candle wick */}
        <rect x="138" y="32" width="4" height="12" rx="1" fill="hsl(30, 30%, 30%)" />

        {/* Flame */}
        {candleLit && (
          <g className="animate-flame origin-bottom">
            <ellipse cx="140" cy="22" rx="10" ry="16" fill="hsl(45, 100%, 60%)" />
            <ellipse cx="140" cy="20" rx="6" ry="10" fill="hsl(35, 100%, 65%)" />
            <ellipse cx="140" cy="18" rx="3" ry="6" fill="hsl(45, 100%, 90%)" />
          </g>
        )}

        {/* Smoke when blown out */}
        {!candleLit && (
          <g className="animate-fade-in">
            <path
              d="M140 30 Q145 20 140 10 Q135 0 140 -10"
              fill="none"
              stroke="hsl(0, 0%, 70%)"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.5"
            />
          </g>
        )}

        {/* Cherry on top */}
        <circle cx="140" cy="85" r="10" fill="hsl(0, 70%, 55%)" />
        <ellipse cx="137" cy="82" rx="3" ry="2" fill="hsl(0, 70%, 70%)" />
        <path
          d="M140 75 Q145 65 150 70"
          fill="none"
          stroke="hsl(120, 40%, 35%)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
