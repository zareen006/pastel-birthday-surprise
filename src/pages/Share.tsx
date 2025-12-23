import { Button } from "@/components/ui/button";
import { Share2, QrCode, Copy } from "lucide-react";

const SITE_URL = "https://zareen006.github.io/pastel-birthday-surprise/";

const Share = () => {
  const shareSite = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "Birthday Surprise 🎉",
        text: "I made something special for you 💖",
        url: SITE_URL,
      });
    } else {
      await navigator.clipboard.writeText(SITE_URL);
      alert("Link copied! 💕");
    }
  };

  return (
    <div className="min-h-screen warm-gradient flex items-center justify-center px-4">
      <div className="glass-card max-w-md w-full p-6 text-center rounded-3xl space-y-6">
        
        <h1 className="text-3xl font-bold">Share the Surprise 🎁</h1>
        <p className="text-muted-foreground">
          Send this birthday surprise to someone special 💕
        </p>

        {/* Share Button */}
        <Button
          variant="birthday"
          size="lg"
          className="w-full"
          onClick={shareSite}
        >
          <Share2 className="mr-2" />
          Share Website
        </Button>

        {/* Copy Link */}
        <Button
          variant="outline"
          className="w-full"
          onClick={() => {
            navigator.clipboard.writeText(SITE_URL);
            alert("Link copied! 🎉");
          }}
        >
          <Copy className="mr-2" />
          Copy Link
        </Button>

        {/* QR Code */}
        <div className="pt-4">
          <p className="mb-2 flex items-center justify-center gap-2">
            <QrCode /> Scan QR
          </p>
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${SITE_URL}`}
            alt="QR Code"
            className="mx-auto rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Share;
