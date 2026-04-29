"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import logo from "@/assets/mentorque-logo.png";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className=" flex items-center justify-center relative p-2"
      ref={containerRef}
    >
      <div
        className=" w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children: _children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full"
    >
      <div className="macos-screen">
        {/* macOS Top Bar */}
        <div className="macos-top-bar">
          <div className="top-bar-left">
            <svg
              className="apple-icon"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="currentColor"
            >
              <path d="M17.057 12.002c.023 2.784 2.427 3.714 2.454 3.725-.019.062-.383 1.309-1.258 2.587-.756 1.103-1.541 2.201-2.778 2.224-1.216.023-1.607-.718-2.998-.718-1.391 0-1.825.701-2.98.742-1.213.04-2.096-1.192-2.857-2.302-1.557-2.271-2.743-6.417-1.137-9.206.799-1.386 2.224-2.264 3.771-2.288 1.176-.021 2.285.803 3.003.803.717 0 2.05-.992 3.444-.85.584.024 2.224.236 3.279 1.777-.085.052-1.959 1.141-1.939 3.513zm-2.433-7.55c.626-.759 1.049-1.814.933-2.869-1.077.044-2.383.718-3.155 1.61-.692.793-1.297 1.874-1.135 2.906 1.201.093 2.42-.601 3.357-1.647z" />
            </svg>
            <span className="app-name">Mentorque</span>
            <span className="top-menu">File</span>
            <span className="top-menu">Edit</span>
            <span className="top-menu">View</span>
            <span className="top-menu">Window</span>
            <span className="top-menu">Help</span>
          </div>
          <div className="top-bar-right">
            <svg
              className="top-bar-icon"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
            >
              <path d="M12 21 L1 8 C6.5 2 17.5 2 23 8 Z" />
            </svg>
            <svg
              className="top-bar-icon"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="currentColor"
            >
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zM7 10a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm10 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm-5 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2z" />
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
                <span>Career Strategy Session</span>
              </div>
            </div>

            <div className="lm-video-canvas">
              <div
                className={`lm-video-main-stage ${!isSidebarOpen ? "expanded" : ""}`}
              >
                <div className="lm-video-participant lm-mentor">
                  <div className="lm-avatar-placeholder">
                    <div className="lm-avatar lm-mentor-avatar">
                      <svg viewBox="0 0 80 80" fill="none">
                        <circle cx="40" cy="28" r="16" fill="#d4a574" />
                        <ellipse cx="40" cy="70" rx="28" ry="24" fill="#7c6e5a" />
                      </svg>
                    </div>
                  </div>
                  <div className="lm-participant-name">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="#fff">
                      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                    </svg>
                    Sarah K. (Mentor)
                  </div>
                  <div className="lm-mic-status">
                    <div className="mic-wave">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>

                {/* Floating Self-View (Classic Meet Style) */}
                <div className="lm-self-view">
                  <div className="lm-avatar lm-mentee-avatar">
                    <svg viewBox="0 0 80 80" fill="none">
                      <circle cx="40" cy="28" r="16" fill="#e8c4b8" />
                      <ellipse cx="40" cy="70" rx="28" ry="24" fill="#8b7355" />
                    </svg>
                  </div>
                  <div className="lm-participant-name">You</div>
                </div>

                <button
                  className={`ai-floating-bubble ${isSidebarOpen ? "hidden" : ""}`}
                  onClick={() => setIsSidebarOpen(true)}
                  title="Open Mentorque AI"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m12 3 1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3Z" />
                    <path d="M5 3v4" />
                    <path d="M19 17v4" />
                    <path d="M3 5h4" />
                    <path d="M17 19h4" />
                  </svg>
                </button>
              </div>

              <div className={`lm-meet-sidebar ${!isSidebarOpen ? "collapsed" : ""}`}>
                <div className="lm-sidebar-header">
                  <div className="sidebar-title-group">
                    <div className="ai-sparkle-icon">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m12 3 1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3Z" />
                        <path d="M5 3v4" />
                        <path d="M19 17v4" />
                        <path d="M3 5h4" />
                        <path d="M17 19h4" />
                      </svg>
                    </div>
                    <h3>Mentorque AI</h3>
                  </div>
                  <button
                    className="close-sidebar"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>

                <div className="lm-notetaker-content">
                  <div className="notetaker-status-bar">
                    <div className="bot-status-pill">
                      <span className="status-dot-active"></span>
                      Agent Active
                    </div>
                    <span className="live-indicator">LIVE TRANSCRIPTION</span>
                  </div>

                  <div className="transcript-feed">
                    <div className="transcript-entry">
                      <div className="entry-header">
                        <span className="entry-author mentor-label">Sarah K.</span>
                        <span className="entry-time">10:00 AM</span>
                      </div>
                      <p className="entry-text">
                        "Hi there! Let's dive into your portfolio. I see some interesting
                        React projects here."
                      </p>
                    </div>

                    <div className="transcript-entry">
                      <div className="entry-header">
                        <span className="entry-author">You</span>
                        <span className="entry-time">10:01 AM</span>
                      </div>
                      <p className="entry-text">
                        "Thanks, Sarah! I've been focusing on building scalable frontend
                        architectures recently."
                      </p>
                    </div>

                    <div className="transcript-entry">
                      <div className="entry-header">
                        <span className="entry-author mentor-label">Sarah K.</span>
                        <span className="entry-time">10:02 AM</span>
                      </div>
                      <p className="entry-text">
                        "That's a great point about your React experience. How did you handle
                        state management in that project?"
                      </p>
                    </div>

                    <div className="transcript-entry">
                      <div className="entry-header">
                        <span className="entry-author">You</span>
                        <span className="entry-time">10:04 AM</span>
                      </div>
                      <p className="entry-text active-typing">
                        "I primarily used Redux Toolkit for global state, but for this
                        specific feature, I implemented a custom hook with Context API to
                        keep it lightweight..."
                      </p>
                    </div>

                    <div className="transcript-entry">
                      <div className="entry-header">
                        <span className="entry-author mentor-label">Sarah K.</span>
                        <span className="entry-time">10:05 AM</span>
                      </div>
                      <p className="entry-text">
                        "Excellent choice. Balancing global state and local context is key
                        for performance."
                      </p>
                    </div>
                  </div>

                  <div className="ai-realtime-summary">
                    <div className="summary-section">
                      <div className="section-header">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Key Insights
                      </div>
                      <div className="insight-tags">
                        <span className="insight-tag">Redux Toolkit</span>
                        <span className="insight-tag">Architecture</span>
                      </div>
                    </div>

                    <div className="summary-section">
                      <div className="section-header">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        Action Items
                      </div>
                      <ul className="action-list">
                        <li>Follow up on Clean Code principles</li>
                        <li>Send portfolio link</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="sidebar-footer">
                  <button className="btn-generate-report">
                    Generate Full Report
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="lm-meet-controls">
              <div className="lm-meet-left">
                <span className="meet-time">10:04 AM</span>
                <span className="meet-divider">|</span>
                <span className="meet-code">career-prep-xyz</span>
              </div>

              <div className="lm-meet-center">
                <button className="meet-btn" title="Turn off microphone">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" />
                  </svg>
                </button>
                <button className="meet-btn" title="Turn off camera">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M18 10.48V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.48l4 3.98v-11l-4 3.98zM16 18H4V6h12v12z" />
                  </svg>
                </button>
                <button className="meet-btn" title="Raise hand">
                  <img
                    src="https://cdn.creazilla.com/emojis/46398/raised-hand-emoji-clipart-lg.png"
                    alt="Raise hand"
                    className="meet-emoji-icon"
                  />
                </button>
                <button className="meet-btn" title="Present now">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M20 18H4V6h16v12zm0-14H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM12 8l-4 4h3v4h2v-4h3l-4-4z" />
                  </svg>
                </button>
                <button className="meet-btn" title="More options">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </button>
                <button className="meet-btn meet-btn-danger" title="Leave call">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="#fff">
                    <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7 0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.69-1.36-2.67-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z" />
                  </svg>
                </button>
              </div>

              <div className="lm-meet-right">
                <button className="meet-action-btn" title="Meeting details">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                    <path d="M11 17h2v-6h-2v6zm1-8c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                </button>
                <button className="meet-action-btn active-panel" title="Chat with everyone">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                  </svg>
                </button>
                <button className="meet-action-btn" title="Activities">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                    <path d="M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.86L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z" />
                  </svg>
                </button>
                <button className="meet-action-btn" title="Host controls">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                  </svg>
                </button>
              </div>
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
      </div>
    </motion.div>
  );
};
