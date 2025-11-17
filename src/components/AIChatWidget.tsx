import { useEffect } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-id': string;
      };
    }
  }
}

const AIChatWidget = () => {
  useEffect(() => {
    // The script is loaded in index.html, this component just renders the custom element
  }, []);

  return (
    <elevenlabs-convai agent-id="agent_1201ka8gh7ayff2v0nangve3t3yc"></elevenlabs-convai>
  );
};

export default AIChatWidget;
