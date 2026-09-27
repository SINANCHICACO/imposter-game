import "./Settings.css";
import backArrow from "../assets/back-arrow.png";

function Settings({
  hintEnabled,
  setHintEnabled,
  goTo,
}) {
  return (
    <main className="settings-page">

      <div className="settings-glow"></div>

      {/* HEADER */}
      <header className="settings-header">

        <button
          className="settings-back"
          onClick={() => goTo("add-players")}
          aria-label="Go back"
          type="button"
        >
          <img src={backArrow} alt="" />
        </button>

        <button
          className="settings-logo"
          onClick={() => goTo("home")}
          aria-label="Go to home"
          type="button"
        >
          <span className="settings-logo-icon">
            ?
          </span>

          <span>
            IMPOSTER
          </span>
        </button>

      </header>


      {/* CONTENT */}
      <section className="settings-content">

        <div className="settings-intro">

          <div className="settings-eyebrow">
            GAME SETUP
          </div>

          <h1>
            GAME
            <span>SETTINGS.</span>
          </h1>

          <p>
            Adjust how the game works.
          </p>

        </div>


        {/* GAME SETTINGS */}
        <section className="settings-section">

          <div className="settings-section-heading">

            <span>
              01
            </span>

            <h2>
              GAME SETTINGS
            </h2>

          </div>


          {/* HINT TOGGLE */}
          <button
            className={`hint-setting ${
              hintEnabled ? "enabled" : ""
            }`}
            onClick={() => setHintEnabled(!hintEnabled)}
            type="button"
          >

            <div className="hint-info">

              <div className="hint-icon">
                ?
              </div>

              <div>

                <strong>
                  ENABLE HINT
                </strong>

                <p>
                  Give the imposter one vague word
                  to help guess the secret word.
                </p>

              </div>

            </div>


            <div
              className={`toggle ${
                hintEnabled ? "on" : ""
              }`}
            >
              <span></span>
            </div>

          </button>

        </section>


        {/* HOW HINT WORKS */}
        <section className="hint-explanation">

          <div className="explanation-label">
            HOW IT WORKS
          </div>

          <p>
            The imposter never sees the secret word.
            When hints are enabled, they receive one
            vague word to help them figure it out
            from the clues.
          </p>


          <div className="hint-example">

            <span>
              SECRET WORD
            </span>

            <strong>
              PIZZA
            </strong>

            <span className="example-arrow">
              →
            </span>

            <span>
              HINT
            </span>

            <strong className="example-hint">
              CHEESE
            </strong>

          </div>

        </section>


        {/* BACK TO SETUP */}
        <button
          className="settings-done"
          onClick={() => goTo("add-players")}
          type="button"
        >

          <span>
            BACK TO SETUP
          </span>

        </button>

      </section>

    </main>
  );
}

export default Settings;