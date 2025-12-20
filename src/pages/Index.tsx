import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Confetti, Sparkles } from '@/components/Confetti';
import { Gift, Heart, Sparkles as SparklesIcon } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pastel-gradient flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      <Sparkles count={30} />
      <Confetti count={40} />
      
      {/* Floating decorations */}
      <div className="absolute top-10 left-10 animate-float opacity-60">
        <Heart className="w-12 h-12 text-primary" fill="currentColor" />
      </div>
      <div className="absolute top-20 right-16 animate-float delay-200 opacity-60">
        <SparklesIcon className="w-10 h-10 text-secondary" />
      </div>
      <div className="absolute bottom-20 left-20 animate-float delay-300 opacity-60">
        <Gift className="w-14 h-14 text-accent" />
      </div>
      <div className="absolute bottom-32 right-12 animate-float delay-100 opacity-60">
        <Heart className="w-8 h-8 text-primary" fill="currentColor" />
      </div>

      {/* Main content */}
      <div className="text-center z-10 max-w-2xl mx-auto">
        <div className="mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
          <SparklesIcon className="w-16 h-16 mx-auto text-primary mb-4 animate-pulse-glow rounded-full p-3 bg-card/50" />
        </div>

        <h1 
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-in-up opacity-0 text-shadow-soft leading-tight"
          style={{ animationDelay: '0.4s' }}
        >
          HAPPY BIRTHDAY
        </h1>
        
        <h2 
          className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-8 animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.6s' }}
        >
          Sarah! 🎂
        </h2>

        <p 
          className="text-lg md:text-xl text-muted-foreground mb-12 animate-fade-in-up opacity-0 max-w-md mx-auto"
          style={{ animationDelay: '0.8s' }}
        >
          Today is all about celebrating the wonderful person you are!
        </p>

        <div 
          className="animate-fade-in-up opacity-0"
          style={{ animationDelay: '1s' }}
        >
          <Button
            variant="birthday"
            size="xl"
            onClick={() => navigate('/message')}
            className="group"
          >
            <Gift className="w-5 h-5 group-hover:animate-bounce" />
            Open Your Surprise
          </Button>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,75 1440,60 L1440,120 L0,120 Z"
            fill="hsl(var(--card))"
            opacity="0.5"
          />
          <path
            d="M0,80 C360,140 720,20 1080,80 C1260,110 1380,95 1440,80 L1440,120 L0,120 Z"
            fill="hsl(var(--card))"
            opacity="0.8"
          />
        </svg>
      </div>
    </div>
  );
};

export default Index;
