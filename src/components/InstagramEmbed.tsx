import { useEffect } from "react";

const InstagramEmbed = () => {
  useEffect(() => {
    // Load Instagram embed script
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="flex justify-center my-8">
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/reel/DRXgZasj_XX/?utm_source=ig_embed&utm_campaign=loading"
        data-instgrm-version="14"
        style={{
          background: "hsl(var(--card))",
          border: 0,
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.15)",
          margin: "0 auto",
          maxWidth: "540px",
          width: "100%",
        }}
      />
    </div>
  );
};

// Add type declaration for Instagram embed
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export default InstagramEmbed;
