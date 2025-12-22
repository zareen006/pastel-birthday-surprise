import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles } from '@/components/Confetti';
import { X, Home, Heart } from 'lucide-react';

interface Memory {
  id: number;
  image: string;
  caption: string;
  color: string;
}

const memories: Memory[] = [
  {
    id: 1,
    image: '/PIC1.jpg',
    caption: "PS: You’ll always be a noob 😜",
    color: 'from-blush to-lavender',
  },
  {
    id: 2,
    image: '/PIC3.jpg',
    caption: "Cheers! 🎂",
    color: 'from-lavender to-mint',
  },
  {
    id: 3,
    image: '/PIC2.jpg',
    caption: "You know, you're a fox!! (DUMBB ONE) 🦊",
    color: 'from-mint to-peach',
  },
  {
    id: 4,
    image: '/pic4.jpg',
    caption: "Enjoy Your E-Cake! 🍰🤭",
    color: 'from-peach to-blush',
  },
];

const Gallery = () => {
  const navigate = useNavigate();
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  return (
    <div className="min-h-screen warm-gradient flex flex-col items-center px-4 py-8 relative overflow-hidden">
      <Sparkles count={15} />

      {/* Header */}
      <div className="text-center mb-10 max-w-xl mx-auto">
        <h1 
          className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.2s' }}
        >
          HIHIHIHI😁
        </h1>
        <p 
          className="text-lg text-muted-foreground animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.4s' }}
        >
          Click on every picture to feel the pictures🎉
        </p>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-2xl w-full mb-10">
        {memories.map((memory, index) => (
          <div
            key={memory.id}
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: `${0.5 + index * 0.15}s` }}
          >
            <button
              onClick={() => setSelectedMemory(memory)}
              className="relative group w-full aspect-square rounded-2xl overflow-hidden shadow-card transition-all duration-300 hover:shadow-glow hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <img
                src={memory.image}
                alt={`Memory ${memory.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-t ${memory.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
              
              {/* Click indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-card/80 backdrop-blur-sm rounded-full p-3 shadow-soft">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Final message */}
      <div 
        className="glass-card rounded-2xl p-6 md:p-8 max-w-md w-full text-center mb-8 animate-fade-in-up opacity-0"
        style={{ animationDelay: '1.2s' }}
      >
        <Heart className="w-10 h-10 mx-auto text-primary mb-4" fill="currentColor" />
        <p className="text-lg md:text-xl text-foreground font-medium mb-2">
          Let’s make even more unforgettable nicknames! ✨
        </p>
        <p className="text-muted-foreground">
          May this year be packed with laughter, adventures, and memories to cherish! 🥳
        </p>
      </div>

      {/* Back to start button */}
      <Button
        variant="birthday"
        size="lg"
        onClick={() => navigate('/')}
        className="group animate-fade-in-up opacity-0"
        style={{ animationDelay: '1.4s' }}
      >
        <Home className="w-5 h-5 group-hover:animate-bounce" />
        Back to Start
      </Button>

      {/* Modal for selected memory */}
      {selectedMemory && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedMemory(null)}
        >
          <div 
            className="glass-card rounded-3xl p-6 max-w-md w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMemory(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>
            
            <img
              src={selectedMemory.image}
              alt={`Memory ${selectedMemory.id}`}
              className="w-full aspect-square object-cover rounded-2xl mb-4 shadow-soft"
            />
            
            <p className="text-lg text-foreground text-center font-medium">
              {selectedMemory.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
