import { useEffect, useRef, useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import logo from "./assets/mentorque-logo.png";
import chromeLogo from "./assets/chrome-logo.svg";
import calendarIcon from "./assets/calendar-icon.svg";
import { HeroScrollDemo } from "@/components/ui/hero-scroll-demo";

const proofItems = [
  { name: "Priya S.", company: "Amazon", time: "2h ago" },
  { name: "Rahul M.", company: "EY", time: "5h ago" },
  { name: "Ananya K.", company: "Microsoft", time: "1d ago" },
];

const capabilities = [
  "AI Resume Builder",
  "Mentor Connects",
  "Agentic Outreach",
  "Interview Prep",
  "Chrome Extension",
];

function App() {
  const mentorSectionRef = useRef<HTMLElement>(null);
  const macosCanvasRef = useRef<HTMLDivElement>(null);
  const [isExtensionOpen, setIsExtensionOpen] = useState(false);
  const isPlansPage = window.location.pathname === "/plans";

  useEffect(() => {
    if (!mentorSectionRef.current) return;

    let openTimer: number | null = null;
    let didAutoOpen = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || didAutoOpen) return;

        // Trigger only when user scrolls into section.
        didAutoOpen = true;
        openTimer = window.setTimeout(() => {
          setIsExtensionOpen(true);
        }, 450);
      },
      {
        threshold: 0.45,
      }
    );

    observer.observe(mentorSectionRef.current);

    return () => {
      observer.disconnect();
      if (openTimer) window.clearTimeout(openTimer);
    };
  }, []);

  if (isPlansPage) {
    return (
      <div className="min-h-screen bg-black">
        <section
          className="relative h-screen w-full bg-cover bg-center"
          style={{
            backgroundImage: 'url("/WhatsApp Image 2026-04-26 at 12.33.06.jpeg")',
          }}
        >
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-black/0 via-black/85 to-black" />
        </section>
        <section className="bg-black">
          <HeroScrollDemo />
        </section>
      </div>
    );
  }

  return (
    <div className="landing-container">
      {/* Background */}
      <div className="background-scene">
        <div className="bg-image" />
        <div className="bg-vignette" />
      </div>

      {/* Navbar */}
      <header className="navbar">
        <a href="#home" className="brand">
          <img src={logo} alt="Mentorque" className="logo-icon" />
          <span className="brand-text">Mentorque</span>
        </a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#plans">Plans</a>
          <a href="#team">Our Team</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#faqs">FAQ's</a>
          <button className="btn-callback">Book a Call</button>
        </nav>
        <button className="mobile-cta">Get Started</button>
      </header>

      {/* Hero */}
      <main className="hero">
        <div className="hero-inner">
          {/* Headline */}
          <h1 className="headline anim-2">
            <span className="hl-line">Apply less.</span>
            <span className="hl-line hl-italic text-white
            ">Get hired faster.</span>
          </h1>

   

          {/* CTAs */}
          <div className="cta-group anim-4">
            <button className="btn-primary">
              <img src={chromeLogo} alt="" className="btn-icon" />
              Get Started
            </button>
            <button className="btn-secondary">
              <img src={calendarIcon} alt="" className="btn-icon" />
              Schedule a call
            </button>
          </div>
        </div>

        {/* Left: Capability Cartwheel */}
        <div className="capability-cartwheel anim-5">
          <div className="cartwheel-track">
            {[...capabilities, ...capabilities].map((cap, i) => (
              <div className="cap-pill" key={i}>
                {cap}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Floating Proof Card */}
        <div className="proof-card">
          {proofItems.map((item, i) => (
            <div
              className="proof-item"
              key={i}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="proof-avatar">{item.name.charAt(0)}</div>
              <div className="proof-info">
                <span className="proof-name">{item.name}</span>
                <span className="proof-detail">
                  just got hired at <strong>{item.company}</strong>
                </span>
              </div>
              <span className="proof-time">{item.time}</span>
            </div>
          ))}
        </div>

  

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-line" />
        </div>
      </main>

      {/* Live Mentor Connect Feature Section */}
      <section className="live-mentor-section" ref={mentorSectionRef}>
        <div className="lm-gradient-bg" />
        
        <div className="lm-content">
          <motion.div
            className="macos-screen"
            initial={{ opacity: 0, y: 84, scale: 0.86, rotateX: 14, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ type: "spring", stiffness: 110, damping: 18, mass: 0.9 }}
            style={{ transformOrigin: "center top" }}
          >
            {/* macOS Top Bar */}
            <div className="macos-top-bar">
              <div className="top-bar-left">
                <svg className="apple-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M17.057 12.002c.023 2.784 2.427 3.714 2.454 3.725-.019.062-.383 1.309-1.258 2.587-.756 1.103-1.541 2.201-2.778 2.224-1.216.023-1.607-.718-2.998-.718-1.391 0-1.825.701-2.98.742-1.213.04-2.096-1.192-2.857-2.302-1.557-2.271-2.743-6.417-1.137-9.206.799-1.386 2.224-2.264 3.771-2.288 1.176-.021 2.285.803 3.003.803.717 0 2.05-.992 3.444-.85.584.024 2.224.236 3.279 1.777-.085.052-1.959 1.141-1.939 3.513zm-2.433-7.55c.626-.759 1.049-1.814.933-2.869-1.077.044-2.383.718-3.155 1.61-.692.793-1.297 1.874-1.135 2.906 1.201.093 2.42-.601 3.357-1.647z"/>
                </svg>
                <span className="app-name">Mentorque</span>
                <span className="top-menu">File</span>
                <span className="top-menu">Edit</span>
                <span className="top-menu">View</span>
                <span className="top-menu">Window</span>
                <span className="top-menu">Help</span>
              </div>
              <div className="top-bar-right">
                <svg className="top-bar-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12 21 L1 8 C6.5 2 17.5 2 23 8 Z" />
                </svg>
                <svg className="top-bar-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zM7 10a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm10 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm-5 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2z"/>
                </svg>
                <span className="current-time">9:41 AM</span>
              </div>
            </div>

            <div className="lm-mockup-container">
              <div className="lm-mockup">
                <div className="lm-window-header">
                  <div className="lm-window-dots">
                    <span className="lm-dot lm-dot-red" />
                    <span className="lm-dot lm-dot-yellow" />
                    <span className="lm-dot lm-dot-green" />
                  </div>
                  <div className="lm-window-title">
                    <img src={logo} alt="Mentorque" className="meet-logo-small" />
                    <span>Mentorque Extension Preview</span>
                  </div>
                </div>
                <div className="lm-video-canvas extension-canvas" ref={macosCanvasRef}>
                  <div className="extension-hero-text">
                    <span className="extension-eyebrow">Mentorque AI Assistant</span>
                    <h2>Talks what you talk, Sees what you see.</h2>
                    <p>Live meeting support with instant role-aware responses.</p>
                  </div>

                  {!isExtensionOpen && (
                    <button
                      className="entry-launcher-btn"
                      onClick={() => setIsExtensionOpen(true)}
                      aria-label="Open Mentorque AI"
                    >
                      <span className="entry-launcher-icon" />
                      <span>Mentorque AI</span>
                    </button>
                  )}

                  {isExtensionOpen && (
                    <motion.div
                      className="extension-panel overlay-mimic"
                      initial={{
                        opacity: 0,
                        y: 140,
                        x: 26,
                        scale: 0.56,
                        scaleY: 0.12,
                        rotateX: 18,
                        filter: "blur(14px)",
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        x: 0,
                        scale: 1,
                        scaleY: 1,
                        rotateX: 0,
                        filter: "blur(0px)",
                      }}
                      transition={{
                        duration: 1.15,
                        ease: [0.15, 0.9, 0.2, 1],
                      }}
                      style={{ transformOrigin: "100% 100%" }}
                    >
                      <div className="overlay-mimic-main">
                        <div className="overlay-topbar">
                          <div className="overlay-topbar-title">Keywords</div>
                          <div className="overlay-topbar-actions">
                            <span>◔</span>
                            <span>⌗</span>
                            <span>◉</span>
                            <button className="overlay-logout-btn">Logout</button>
                          </div>
                          <button
                            className="panel-close-btn"
                            onClick={() => setIsExtensionOpen(false)}
                            aria-label="Close extension"
                          >
                            ×
                          </button>
                        </div>

                        <div className="overlay-keywords-content">
                          <div className="overlay-ai-badge">AI-Powered Analysis</div>
                          <h3 className="overlay-title">Keywords &amp; Skills Analyzer</h3>
                        

                          <div className="overlay-job-card">
                            <div className="overlay-job-top">
                              <span className="ms-logo" aria-hidden="true">
                                <span />
                                <span />
                                <span />
                                <span />
                              </span>
                              <span>Microsoft · India</span>
                            </div>
                            <div className="overlay-job-role">ROLE: SDE 2 (Microsoft)</div>
                            <div className="overlay-job-desc">
                              DESCRIPTION: Company analysis focused on system design, APIs,
                              cloud fundamentals, and ownership signals.
                            </div>
                            <div className="overlay-job-tag">Auto-scraped</div>
                          </div>

                          <button className="overlay-generate-btn">
                            Analyze Keywords ✨
                          </button>

                          <div className="overlay-result-card matching">
                            <div className="overlay-result-title">✅ Matching Skills</div>
                            <div className="overlay-result-sub">Skills found in your profile (9)</div>
                            <div className="extension-tags">
                              <span>Node.js</span>
                              <span>TypeScript</span>
                              <span>React.js</span>
                              <span>Next.js</span>
                              <span>PostgreSQL</span>
                              <span>RESTful APIs</span>
                              <span>Git</span>
                              <span>Docker</span>
                              <span>AWS</span>
                            </div>
                          </div>

                          <div className="overlay-result-card missing">
                            <div className="overlay-result-title">❌ Missing Skills</div>
                            <div className="overlay-result-sub">Skills to add to your profile (1)</div>
                            <div className="extension-tags">
                              <span>Supabase</span>
                            </div>
                          </div>
                        </div>
                        <div className="overlay-track-footer">Track Job</div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>

            {/* macOS Dock */}
            <div className="macos-dock-container">
              <div className="macos-dock">
                <div className="dock-item">
                  <div className="dock-icon finder-icon">
                    <img src="/findericon/finder-macos_256x256x32.png" alt="Finder" />
                  </div>
                </div>
                <div className="dock-item">
                  <div className="dock-icon safari-icon">
                    <img src="/safariicon/safari-macos_256x256x32.png" alt="Safari" />
                  </div>
                </div>
                <div className="dock-item">
                  <div className="dock-icon messages-icon">
                    <img src="/messageicon/messages-macos_256x256x32.png" alt="Messages" />
                  </div>
                </div>
                <div className="dock-item">
                  <div className="dock-icon mail-icon">
                    <img src="/mailicon/mail-macos_256x256x32.png" alt="Mail" />
                  </div>
                </div>
                <div className="dock-item active">
                  <div className="dock-icon mentorque-icon">
                    <img src={logo} alt="Mentorque" />
                  </div>
                  <div className="dock-dot"></div>
                </div>
                <div className="dock-divider"></div>
                <div className="dock-item">
                  <div className="dock-icon trash-icon">
                    <img src="/trashicon/trash-macos_256x256x32.png" alt="Trash" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default App;
