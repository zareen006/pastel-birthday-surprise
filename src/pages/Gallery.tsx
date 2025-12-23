import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "@/components/Confetti";
import { X, Home, Heart } from "lucide-react";

/* ✅ IMPORT IMAGES FROM PUBLIC */
import pic1 from "/PIC1.jpg";
import pic2 from "/PIC2.jpg";
import pic3 from "/PIC3.jpg";
import pic4 from "/pic4.jpg";

interface Memory {
  id: number;
  image: string;
  caption: string;
  color: string;
}

const memories: Memory[] = [
  {
    id: 1,
    image: pic1,
    caption: "PS: You’ll always be a noob 😜",
    color: "from-blush to-lavender",
  },
  {
    id: 2,
    image: pic3,
    caption: "Cheers! 🎂",
    color: "from-lavender to-mint",
  },
  {
    id: 3,
    image: pic2,
    caption: "You know, you're a fox!! (DUMBB ONE) 🦊",
    color: "from-mint to-peach",
  },
  {
    id: 4,
    image: pic4,
    caption: "Enjoy Your E-Cake! 🍰🤭",
    color: "from-peach to-blush",
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
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          HIHIHIHI 😁
        </h1>
        <p className="text-lg text-muted-foreground">
          Click on every picture to relive the moments 🎉
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-2xl w-full mb-10">
        {memories.map((memory) => (
          <button
            key={memory.id}
            onClick={() => setSelectedMemory(memory)}
            className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-card transition-all duration-300 hover:scale-105"
          >
            <img
              src={memory.image}
              alt={`Memory ${memory.id}`}
              className="w-full h-full object-cover"
            />

            <div
              className={`absolute inset-0 bg-gradient-to-t ${memory.color} opacity-0 hover:opacity-30 transition-opacity`}
            />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <div className="bg-card/80 rounded-full p-3">
                <Heart className="w-6 h-6 text-primary" />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Final Message */}
      <div className="glass-card rounded-2xl p-6 max-w-md text-center mb-8">
        <Heart className="w-10 h-10 mx-auto text-primary mb-4" fill="currentColor" />
        <p className="text-lg font-medium mb-2">
          Let’s make even more unforgettable memories ✨
        </p>
        <p className="text-muted-foreground">
          May this year be full of laughter and love 🥳
        </p>
      </div>

      {/* Back Button */}
      <Button variant="birthday" size="lg" onClick={() => navigate("/")}>
        <Home className="w-5 h-5 mr-2" />
        Back to Start
      </Button>

      {/* Modal */}
      {selectedMemory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 p-4"
          onClick={() => setSelectedMemory(null)}
        >
          <div
            className="glass-card rounded-3xl p-6 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMemory(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-muted"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedMemory.image}
              alt={`Memory ${selectedMemory.id}`}
              className="w-full aspect-square object-cover rounded-2xl mb-4"
            />

            <p className="text-lg text-center font-medium">
              {selectedMemory.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
