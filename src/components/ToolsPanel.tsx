import { useState, useEffect, useCallback } from "react";
import { X, Search, ExternalLink, Code, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Tool {
  name: string;
  category: string;
  description: string;
}

const vibeTools: Tool[] = [
  { name: "Cursor AI", category: "IDE", description: "AI-first code editor" },
  { name: "GitHub Copilot", category: "AI Assistant", description: "AI pair programmer" },
  { name: "Tabnine", category: "AI Assistant", description: "AI code completion" },
  { name: "Codeium", category: "AI Assistant", description: "Free AI code assistant" },
  { name: "Replit", category: "IDE", description: "Browser-based collaborative IDE" },
  { name: "v0.dev", category: "UI Generator", description: "AI UI component generator" },
  { name: "Lovable", category: "App Builder", description: "Full-stack AI app builder" },
  { name: "Bolt.new", category: "App Builder", description: "Instant full-stack apps" },
  { name: "Claude", category: "LLM", description: "Anthropic's AI assistant" },
  { name: "ChatGPT", category: "LLM", description: "OpenAI's conversational AI" },
  { name: "Gemini", category: "LLM", description: "Google's multimodal AI" },
  { name: "Perplexity", category: "Search", description: "AI-powered search engine" },
  { name: "Phind", category: "Search", description: "AI search for developers" },
  { name: "Vercel", category: "Deployment", description: "Frontend cloud platform" },
  { name: "Netlify", category: "Deployment", description: "Web deployment platform" },
  { name: "Railway", category: "Deployment", description: "Infrastructure platform" },
  { name: "Supabase", category: "Backend", description: "Open source Firebase alternative" },
  { name: "PlanetScale", category: "Database", description: "Serverless MySQL platform" },
  { name: "Neon", category: "Database", description: "Serverless Postgres" },
  { name: "Upstash", category: "Database", description: "Serverless Redis & Kafka" },
  { name: "Clerk", category: "Auth", description: "User management & auth" },
  { name: "Auth0", category: "Auth", description: "Identity platform" },
  { name: "Stripe", category: "Payments", description: "Payment processing" },
  { name: "LemonSqueezy", category: "Payments", description: "Merchant of record" },
  { name: "Resend", category: "Email", description: "Email API for developers" },
  { name: "Loops", category: "Email", description: "Email marketing for SaaS" },
  { name: "Postmark", category: "Email", description: "Transactional email" },
  { name: "Cloudflare", category: "Infrastructure", description: "Edge network & security" },
  { name: "AWS Amplify", category: "Backend", description: "Full-stack cloud platform" },
  { name: "Firebase", category: "Backend", description: "Google's app platform" },
  { name: "Convex", category: "Backend", description: "Reactive backend platform" },
  { name: "Prisma", category: "ORM", description: "Next-gen Node.js ORM" },
  { name: "Drizzle", category: "ORM", description: "TypeScript ORM" },
  { name: "tRPC", category: "API", description: "End-to-end typesafe APIs" },
  { name: "Hono", category: "API", description: "Ultrafast web framework" },
  { name: "Elysia", category: "API", description: "Bun web framework" },
  { name: "Astro", category: "Framework", description: "Content-focused framework" },
  { name: "Next.js", category: "Framework", description: "React meta-framework" },
  { name: "Nuxt", category: "Framework", description: "Vue meta-framework" },
  { name: "SvelteKit", category: "Framework", description: "Svelte meta-framework" },
  { name: "Remix", category: "Framework", description: "Full stack web framework" },
  { name: "TailwindCSS", category: "Styling", description: "Utility-first CSS" },
  { name: "shadcn/ui", category: "UI Library", description: "Reusable components" },
  { name: "Radix UI", category: "UI Library", description: "Unstyled components" },
  { name: "Framer Motion", category: "Animation", description: "React animation library" },
  { name: "GSAP", category: "Animation", description: "Professional animations" },
  { name: "Lottie", category: "Animation", description: "Vector animations" },
  { name: "Three.js", category: "3D", description: "3D graphics library" },
  { name: "React Three Fiber", category: "3D", description: "React renderer for Three.js" },
  { name: "Spline", category: "3D", description: "3D design tool" },
  { name: "Figma", category: "Design", description: "Collaborative design tool" },
  { name: "Framer", category: "Design", description: "Interactive design tool" },
  { name: "Excalidraw", category: "Design", description: "Virtual whiteboard" },
  { name: "Linear", category: "Project Management", description: "Issue tracking" },
  { name: "Notion", category: "Productivity", description: "All-in-one workspace" },
  { name: "Raycast", category: "Productivity", description: "Mac productivity tool" },
  { name: "Warp", category: "Terminal", description: "Modern terminal" },
  { name: "Fig", category: "Terminal", description: "Terminal autocomplete" },
  { name: "Zed", category: "IDE", description: "High-performance code editor" },
  { name: "WindSurf", category: "IDE", description: "AI-powered code editor" },
];

interface ToolsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const ToolsPanel = ({ isOpen, onClose }: ToolsPanelProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const categories = [...new Set(vibeTools.map((tool) => tool.category))];

  const filteredTools = vibeTools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleClose = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      onClose();
      setIsAnimating(false);
    }, 300);
  }, [onClose]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  // Prevent body scroll when panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-background/80 backdrop-blur-sm panel-backdrop ${
          isOpen && !isAnimating ? "panel-backdrop-enter-active" : "panel-backdrop-enter"
        }`}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Vibe Coding Tools"
        className={`fixed right-0 top-0 z-50 h-full w-full sm:w-[400px] md:w-[480px] bg-card border-l border-border shadow-2xl slide-panel ${
          isOpen && !isAnimating ? "slide-panel-enter-active" : "slide-panel-enter"
        } ${isAnimating ? "slide-panel-exit-active" : ""}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground">Vibe Coding Tools</h2>
                <p className="text-xs text-muted-foreground">{vibeTools.length}+ tools for modern development</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="hover:bg-muted"
              aria-label="Close panel"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Search */}
          <div className="p-4 sm:px-6 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background"
                aria-label="Search tools"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="p-4 sm:px-6 border-b border-border">
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
                className="text-xs"
              >
                All
              </Button>
              {categories.slice(0, 8).map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-xs"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Tools List */}
          <ScrollArea className="flex-1">
            <div className="p-4 sm:px-6 space-y-2">
              {filteredTools.map((tool, index) => (
                <div
                  key={tool.name}
                  className="group p-3 rounded-lg border border-border bg-background/50 hover:bg-muted/50 hover:border-primary/30 transition-all duration-200 cursor-pointer"
                  style={{
                    animationDelay: `${index * 20}ms`,
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`${tool.name} - ${tool.description}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="p-1.5 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        {tool.category === "IDE" || tool.category === "Framework" ? (
                          <Code className="h-4 w-4 text-primary" />
                        ) : tool.category === "AI Assistant" || tool.category === "LLM" ? (
                          <Sparkles className="h-4 w-4 text-primary" />
                        ) : (
                          <Zap className="h-4 w-4 text-primary" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                          {tool.name}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{tool.description}</p>
                        <span className="inline-block text-[10px] text-muted-foreground/70 bg-muted px-1.5 py-0.5 rounded mt-1.5">
                          {tool.category}
                        </span>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </div>
                </div>
              ))}

              {filteredTools.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No tools found matching your search.</p>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Footer */}
          <div className="p-4 sm:px-6 border-t border-border bg-muted/30">
            <p className="text-xs text-muted-foreground text-center">
              Showing {filteredTools.length} of {vibeTools.length} tools
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolsPanel;
