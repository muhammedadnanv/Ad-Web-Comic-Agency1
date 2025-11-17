import { useEffect } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'agent-id': string;
      }, HTMLElement>;
    }
  }
}

const AIChatWidget = () => {
  useEffect(() => {
    // Load ElevenLabs script dynamically
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    // Add custom CSS to hide the watermark
    const style = document.createElement('style');
    style.textContent = `
      elevenlabs-convai::part(watermark),
      elevenlabs-convai [class*="watermark"],
      elevenlabs-convai [class*="powered"],
      elevenlabs-convai a[href*="elevenlabs"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return (
    <div className="elevenlabs-widget-container">
      <elevenlabs-convai agent-id="agent_1201ka8gh7ayff2v0nangve3t3yc"></elevenlabs-convai>
    </div>
  );
};

export default AIChatWidget;
