import "./App.css";
import logo from "./assets/mentorque-logo.png";
import chromeLogo from "./assets/chrome-logo.svg";
import calendarIcon from "./assets/calendar-icon.svg";

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
  return (
    <div className="container">
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
            <span className="hl-line hl-italic">Get hired faster.</span>
          </h1>

          {/* Subtitle */}
          <p className="subtext anim-3">
            AI resume tools, real mentor connections, and agentic outreach — all
            in one system built to get you the role.
          </p>

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

        {/* Bottom Right: Social Proof Badge */}
        <div className="proof-badge anim-6">
          <span className="proof-dot" />
          <span>70+ hired at Amazon · EY · Microsoft · Vodafone</span>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-line" />
        </div>
      </main>
    </div>
  );
}

export default App;
