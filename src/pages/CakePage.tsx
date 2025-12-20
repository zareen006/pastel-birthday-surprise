import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Cake } from '@/components/Cake';
import { Confetti, Sparkles } from '@/components/Confetti';
import { Wind, Image, PartyPopper } from 'lucide-react';

const CakePage = () => {
  const navigate = useNavigate();
  const [candleLit, setCandleLit] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleBlowCandle = () => {
    if (candleLit) {
      setCandleLit(false);
      setShowConfetti(true);
      // Hide confetti after a while
      setTimeout(() => setShowConfetti(false), 5000);
    }
  };

  return (
    <div className="min-h-screen pastel-gradient flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      <Sparkles count={20} />
      {showConfetti && <Confetti count={100} active={showConfetti} />}

      {/* Floating decorations */}
      <div className="absolute top-12 left-8 animate-float opacity-50">
        <PartyPopper className="w-10 h-10 text-primary" />
      </div>
      <div className="absolute top-24 right-12 animate-float delay-200 opacity-50">
        <PartyPopper className="w-8 h-8 text-secondary" />
      </div>

      {/* Main content */}
      <div className="text-center z-10 max-w-lg mx-auto">
        <h1 
          className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.2s' }}
        >
          Make a Wish! ✨
        </h1>

        <p 
          className="text-lg text-muted-foreground mb-8 animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.4s' }}
        >
          {candleLit 
            ? "Close your eyes, make a wish, and blow out the candle!"
            : "Your wish has been sent to the universe! 🌟"
          }
        </p>

        {/* Cake */}
        <div 
          className="flex justify-center mb-8 animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.6s' }}
        >
          <Cake candleLit={candleLit} onBlowCandle={handleBlowCandle} />
        </div>

        {/* Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.8s' }}
        >
          {candleLit ? (
            <Button
              variant="birthday"
              size="xl"
              onClick={handleBlowCandle}
              className="group"
            >
              <Wind className="w-5 h-5 group-hover:animate-pulse" />
              Blow Candle
            </Button>
          ) : (
            <Button
              variant="birthday"
              size="xl"
              onClick={() => navigate('/gallery')}
              className="group"
            >
              <Image className="w-5 h-5 group-hover:animate-bounce" />
              See Memories
            </Button>
          )}
        </div>

        {!candleLit && (
          <p 
            className="mt-6 text-primary font-semibold animate-fade-in-up"
          >
            🎂 Happy Birthday, Sarah! 🎂
          </p>
        )}
      </div>

      {/* Back button */}
      <button
        onClick={() => navigate('/message')}
        className="mt-8 text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-2"
      >
        ← Back to Message
      </button>
    </div>
  );
};

export default CakePage;
