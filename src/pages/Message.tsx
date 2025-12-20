import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles } from '@/components/Confetti';
import { Heart, Cake, Eye, EyeOff } from 'lucide-react';

const Message = () => {
  const navigate = useNavigate();
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="min-h-screen warm-gradient flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
      <Sparkles count={15} />

      {/* Floating hearts */}
      <div className="absolute top-16 left-8 animate-float opacity-50">
        <Heart className="w-8 h-8 text-primary" fill="currentColor" />
      </div>
      <div className="absolute top-32 right-12 animate-float delay-300 opacity-50">
        <Heart className="w-6 h-6 text-secondary" fill="currentColor" />
      </div>
      <div className="absolute bottom-40 left-16 animate-float delay-200 opacity-50">
        <Heart className="w-10 h-10 text-accent" fill="currentColor" />
      </div>

      {/* Main card */}
      <div 
        className="glass-card rounded-3xl p-8 md:p-12 max-w-xl w-full mx-4 text-center animate-fade-in-up opacity-0 relative"
        style={{ animationDelay: '0.2s' }}
      >
        {/* Decorative corner elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full" />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-secondary/30 rounded-full" />
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/30 rounded-full" />
        <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-primary/20 rounded-full" />

        <div className="mb-8">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blush to-lavender rounded-full flex items-center justify-center mb-6 shadow-soft">
            <Heart className="w-10 h-10 text-foreground" fill="currentColor" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            A Special Message
          </h1>
          <p className="text-muted-foreground">Just for you, Sarah</p>
        </div>

        {/* Hidden/Revealed message */}
        <div className="min-h-[200px] flex items-center justify-center">
          {!revealed ? (
            <div 
              className="bg-muted/50 rounded-2xl p-8 w-full border-2 border-dashed border-primary/30 cursor-pointer hover:border-primary/50 transition-all"
              onClick={() => setRevealed(true)}
            >
              <EyeOff className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground italic">
                Click to reveal your special message...
              </p>
            </div>
          ) : (
            <div className="animate-fade-in-up">
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                "Happy Birthday, dear Sarah! 🎉
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                You light up every room you walk into, and your kindness touches everyone around you. Thank you for being such an amazing friend who always knows how to make people smile.
              </p>
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                May this year bring you endless joy, laughter, and all the wonderful things you deserve. Here's to celebrating YOU today! 💕"
              </p>
              <p className="text-primary font-semibold text-lg">
                — With love, Your Friends
              </p>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          {!revealed ? (
            <Button
              variant="birthday"
              size="lg"
              onClick={() => setRevealed(true)}
              className="group"
            >
              <Eye className="w-5 h-5" />
              Reveal Message
            </Button>
          ) : (
            <Button
              variant="birthday"
              size="lg"
              onClick={() => navigate('/cake')}
              className="group"
            >
              <Cake className="w-5 h-5 group-hover:animate-bounce" />
              Cut the Cake
            </Button>
          )}
        </div>
      </div>

      {/* Back button */}
      <button
        onClick={() => navigate('/')}
        className="mt-8 text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-2"
      >
        ← Back to Welcome
      </button>
    </div>
  );
};

export default Message;
