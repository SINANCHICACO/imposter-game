import "./App.css";
import imposterCharacter from "./assets/imposter-home-character.png";

function App() {
  return (
    <main className="home-page">

      {/* Background glow */}
      <div className="violet-glow glow-one"></div>
      <div className="violet-glow glow-two"></div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="brand">
          <span className="brand-mark">?</span>
          <span>IMPOSTER</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#how-to-play">How to Play</a>
          <a href="#about">About</a>
        </div>

        <button className="nav-play">
          Play Now
        </button>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">

        <div className="hero-content">

          <p className="eyebrow">
            THE GAME OF DECEPTION
          </p>

          <h1>
            LET'S FIND
            <span>THE IMPOSTER.</span>
          </h1>

          <p className="hero-description">
            Everyone has a secret. Everyone has a clue.
            But one of them doesn't know the word.
          </p>

          <div className="hero-buttons">
            <button className="primary-button">
              PLAY GAME
              <span>→</span>
            </button>

            <button className="secondary-button">
              HOW TO PLAY
            </button>
          </div>

          <div className="hero-meta">
            <div>
              <strong>3+</strong>
              <span>PLAYERS</span>
            </div>

            <div className="meta-line"></div>

            <div>
              <strong>1</strong>
              <span>IMPOSTER</span>
            </div>

            <div className="meta-line"></div>

            <div>
              <strong>∞</strong>
              <span>ROUNDS</span>
            </div>
          </div>

        </div>

        {/* Character */}
        <div className="character-area">

          <div className="character-ring"></div>

          <div className="character-glow"></div>

          <img
            src={imposterCharacter}
            alt="Imposter character"
            className="character-image"
          />

          <div className="floating-card card-one">
            <span>?</span>
            WHO IS LYING?
          </div>

          <div className="floating-card card-two">
            <span>01</span>
            FIND THE CLUE
          </div>

        </div>

      </section>

      {/* Bottom strip */}
      <section className="feature-strip">

        <div className="feature">
          <div className="feature-number">01</div>
          <div>
            <h3>SECRET WORD</h3>
            <p>Everyone gets the same word.</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-number">02</div>
          <div>
            <h3>ONE IMPOSTER</h3>
            <p>Except one player doesn't.</p>
          </div>
        </div>

        <div className="feature">
          <div className="feature-number">03</div>
          <div>
            <h3>FIND THEM</h3>
            <p>Listen carefully. Trust nobody.</p>
          </div>
        </div>

      </section>

    </main>
  );
}

export default App;