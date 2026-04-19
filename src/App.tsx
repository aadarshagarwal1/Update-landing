import "./App.css";
import logo from "./assets/mentorque-logo.png";
import chromeLogo from "./assets/chrome-logo.svg";
import calendarIcon from "./assets/calendar-icon.svg";

function App() {
  return (
    <div className="container">
      <div className="background-glow">
        <div className="glow-1"></div>
        <div className="glow-2"></div>
        <div className="glow-3"></div>
      </div>

      <header className="navbar">
        <div className="brand">
          <img src={logo} alt="Mentorque Logo" className="logo-icon" />
          <span className="brand-text">Mentorque</span>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#plans">Plans</a>
          <a href="#team">Our Team</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#faqs">FAQ's</a>
          <button className="btn-callback">Request a Call Back</button>
        </nav>
      </header>

      <main className="hero">
        <div className="hero-content">
          <h1 className="headline">Your career, <br />structured and accelerated.</h1>
          <p className="subtext">
            Everything you need to navigate your job hunt — from preparation to interviews — in one intelligent system.
          </p>
          <div className="cta-group">
            <button className="btn-primary">
              <img src={chromeLogo} alt="" className="btn-icon" />
              Start Free
            </button>
            <button className="btn-secondary">
              <img src={calendarIcon} alt="" className="btn-icon" />
              Book a Free Call
            </button>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
