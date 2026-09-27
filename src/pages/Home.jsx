import "./Home.css";
import imposterCharacter from "../assets/imposter-character.png";

function Home() {
  return (
    <main className="home-page">

      {/* Background effects */}
      <div className="home-glow home-glow-one"></div>
      <div className="home-glow home-glow-two"></div>

      {/* ================= HEADER ================= */}
      <header className="home-header">

        <div className="home-logo">
          <span className="logo-icon">?</span>
          <span className="logo-name">IMPOSTER</span>
        </div>

        <button
          className="menu-button"
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
        </button>

      </header>


      {/* ================= HERO ================= */}
      <section className="home-hero">

        {/* -------- TEXT -------- */}
        <div className="home-content">

          <div className="home-eyebrow">
            <span className="eyebrow-dot"></span>
            THE GAME OF DECEPTION
          </div>


          <h1 className="home-title">
            LET'S FIND
            <span>THE IMPOSTER.</span>
          </h1>


          <p className="home-description">
            Everyone has a secret.
            <br />
            One of them doesn't.
          </p>


          {/* Buttons */}
          <div className="home-actions">

            <button className="play-button">
              <span>PLAY GAME</span>
              <span className="play-arrow">→</span>
            </button>

            <button className="how-button">
              HOW TO PLAY
            </button>

          </div>


          {/* Stats */}
          <div className="home-stats">

            <div className="stat">
              <strong>3+</strong>
              <span>PLAYERS</span>
            </div>

            <div className="stat-divider"></div>

            <div className="stat">
              <strong>1</strong>
              <span>IMPOSTER</span>
            </div>

            <div className="stat-divider"></div>

            <div className="stat">
              <strong>∞</strong>
              <span>ROUNDS</span>
            </div>

          </div>

        </div>


        {/* -------- CHARACTER -------- */}
        <div className="home-character">

          <div className="character-glow"></div>

          <div className="character-ring character-ring-outer"></div>

          <div className="character-ring character-ring-inner"></div>

          <img
            src={imposterCharacter}
            alt="Imposter character"
            className="character-image"
          />

        </div>

      </section>

    </main>
  );
}

export default Home;