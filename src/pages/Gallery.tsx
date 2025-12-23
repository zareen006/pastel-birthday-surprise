import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "@/components/Confetti";
import { X, Home, Heart } from "lucide-react";

/* ✅ IMPORT WITH EXACT FILENAMES */
import pic1 from "/pic1.jpg";
import pic2 from "/pic2.jpg";
import pic3 from "/pic3.jpg";
import pic4 from "/PIC4.jpg";

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

      <div className="text-center mb-10 max-w-xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          HIHIHIHI 😁
        </h1>
        <p className="text-muted-foreground">
          Click on every picture to relive the moments 🎉
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-2xl w-full mb-10">
        {memories.map((memory) => (
          <button
            key={memory.id}
            onClick={() => setSelectedMemory(memory)}
            className="relative aspect-square rounded-2xl overflow-hidden shadow-card hover:scale-105 transition"
          >
            <img
              src={memory.image}
              alt={`Memory ${memory.id}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition">
              <Heart className="w-6 h-6 text-primary" />
            </div>
          </button>
        ))}
      </div>

      <Button variant="birthday" size="lg" onClick={() => navigate("/")}>
        <Home className="w-5 h-5 mr-2" />
        Back to Start
      </Button>

      {selectedMemory && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4"
          onClick={() => setSelectedMemory(null)}
        >
          <div
            className="bg-white rounded-2xl p-4 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedMemory.image}
              className="w-full rounded-xl mb-4"
            />
            <p className="text-center font-medium">
              {selectedMemory.caption}
            </p>
            <button
              className="absolute top-4 right-4"
              onClick={() => setSelectedMemory(null)}
            >
              <X />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
