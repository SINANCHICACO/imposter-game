import "./HowToPlay.css";

function HowToPlay() {
  const goBack = () => {
    window.location.hash = "";
  };

  const startGame = () => {
    // Add Players page will be connected here later
    console.log("Start game");
  };

  return (
    <main className="how-page">

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="how-glow"></div>


      {/* =========================================
          HEADER
      ========================================= */}

      <header className="how-header">

        <div className="how-logo">
          <span className="how-logo-icon">?</span>
          <span>IMPOSTER</span>
        </div>

      </header>


      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <section className="how-content">


        {/* =========================================
            INTRO
        ========================================= */}

        <div className="how-intro">

          <div className="how-eyebrow">
            HOW TO PLAY
          </div>

          <h1>
            FIND THE
            <span>IMPOSTER.</span>
          </h1>

          <p>
            One secret. One imposter.
            <br />
            Can you find them?
          </p>

        </div>


        {/* =========================================
            GAME STEPS
        ========================================= */}

        <div className="how-steps">


          {/* =====================================
              STEP 01
          ===================================== */}

          <div className="how-step">

            <div className="step-number">
              01
            </div>

            <div className="step-text">

              <h2>
                ADD PLAYERS
              </h2>

              <p>
                Add everyone who is playing.
              </p>

            </div>

          </div>


          {/* =====================================
              STEP 02
          ===================================== */}

          <div className="how-step">

            <div className="step-number">
              02
            </div>

            <div className="step-text">

              <h2>
                CHOOSE A CATEGORY
              </h2>

              <p>
                Pick a category for the secret word.
              </p>

            </div>

          </div>


          {/* =====================================
              STEP 03
          ===================================== */}

          <div className="how-step highlight-step">

            <div className="step-number">
              03
            </div>

            <div className="step-text">

              <h2>
                HOLD TO REVEAL
              </h2>

              <p>
                Hold your card to see your role.
                Players get the word. The imposter gets a hint.
              </p>

            </div>

            <div className="hold-indicator">
              HOLD
            </div>

          </div>


          {/* =====================================
              STEP 04
          ===================================== */}

          <div className="how-step">

            <div className="step-number">
              04
            </div>

            <div className="step-text">

              <h2>
                GIVE CLUES
              </h2>

              <p>
                Share examples about the word without saying it.
              </p>

            </div>

          </div>


          {/* =====================================
              STEP 05
          ===================================== */}

          <div className="how-step">

            <div className="step-number">
              05
            </div>

            <div className="step-text">

              <h2>
                FIND THE IMPOSTER
              </h2>

              <p>
                The imposter uses your clues to guess the word.
              </p>

            </div>

          </div>


          {/* =====================================
              STEP 06
          ===================================== */}

          <div className="how-step">

            <div className="step-number">
              06
            </div>

            <div className="step-text">

              <h2>
                REVEAL
              </h2>

              <p>
                Reveal the imposter and see if they guessed the word.
              </p>

            </div>

          </div>


        </div>


        {/* =========================================
            BOTTOM BUTTONS
        ========================================= */}

        <div className="how-bottom">


          {/* GO BACK */}

          <button
            className="how-play-button back-play-button"
            onClick={goBack}
          >
            <span>
              GO BACK
            </span>
          </button>


          {/* PLAY GAME */}

          <button
            className="how-play-button"
            onClick={startGame}
          >
            <span>
              PLAY GAME
            </span>
          </button>


        </div>


      </section>

    </main>
  );
}

export default HowToPlay;