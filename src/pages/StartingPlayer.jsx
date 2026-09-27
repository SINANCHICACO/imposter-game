import { useEffect, useState } from "react";
import "./StartingPlayer.css";
import backArrow from "../assets/back-arrow.png";

function StartingPlayer({
  players,
  startingPlayerIndex,
  imposterIndex,
  goTo,
}) {
  const [displayIndex, setDisplayIndex] = useState(0);

  const [selectionComplete, setSelectionComplete] =
    useState(false);

  const [revealPhase, setRevealPhase] =
    useState("idle");

  /*
    revealPhase:

    idle
      ↓
    exiting
      ↓
    revealing
      ↓
    revealed
  */

  /*
    ==========================================
    RANDOM PLAYER SELECTION
    ==========================================
  */

  useEffect(() => {
    if (!players || players.length === 0) {
      return;
    }

    if (
      startingPlayerIndex === null ||
      startingPlayerIndex === undefined ||
      startingPlayerIndex < 0 ||
      startingPlayerIndex >= players.length
    ) {
      return;
    }

    let timer = null;

    /*
      Always begin at player 0.
    */
    let currentIndex = 0;

    setDisplayIndex(0);
    setSelectionComplete(false);

    /*
      ========================================
      IMPORTANT
      ========================================

      We calculate enough steps to ensure
      EVERY player is shown several times.

      Example with 5 players:

      01 → 02 → 03 → 04 → 05
      01 → 02 → 03 → 04 → 05
      01 → 02 → 03 → 04 → 05
      ...
    */

    const minimumRounds = 4;

    const minimumSteps =
      players.length * minimumRounds;

    /*
      Add a few extra steps so the final
      stopping point feels less predictable.
    */

    const extraSteps =
      Math.floor(
        Math.random() * players.length
      );

    /*
      Find a final step that lands exactly
      on startingPlayerIndex.

      currentIndex starts at 0.

      After N steps:

      N % players.length
        === startingPlayerIndex
    */

    const remainder =
      (minimumSteps + extraSteps) %
      players.length;

    const correction =
      (startingPlayerIndex - remainder +
        players.length) %
      players.length;

    const totalSteps =
      minimumSteps +
      extraSteps +
      correction;

    let step = 0;

    const animate = () => {
      step += 1;

      /*
        ======================================
        FINAL PLAYER
        ======================================
      */

      if (step >= totalSteps) {
        setDisplayIndex(
          startingPlayerIndex
        );

        /*
          Small delay before enabling
          the reveal button.

          This makes sure the selected
          player's card visually settles.
        */

        setTimeout(() => {
          setSelectionComplete(true);
        }, 350);

        return;
      }

      /*
        Move to next player.

        Because of modulo, every player
        gets displayed.
      */

      currentIndex =
        (currentIndex + 1) %
        players.length;

      setDisplayIndex(currentIndex);

      /*
        ======================================
        SPEED CONTROL
        ======================================

        Fast at first.

        Then gradually slows down.
      */

      const progress =
        step / totalSteps;

      let delay = 65;

      if (progress > 0.45) {
        delay = 85;
      }

      if (progress > 0.60) {
        delay = 110;
      }

      if (progress > 0.72) {
        delay = 145;
      }

      if (progress > 0.82) {
        delay = 190;
      }

      if (progress > 0.90) {
        delay = 250;
      }

      if (progress > 0.95) {
        delay = 330;
      }

      timer = setTimeout(
        animate,
        delay
      );
    };

    timer = setTimeout(
      animate,
      100
    );

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [
    players,
    startingPlayerIndex,
  ]);

  /*
    ==========================================
    SAFETY
    ==========================================
  */

  if (!players || players.length === 0) {
    return null;
  }

  /*
    ==========================================
    DATA
    ==========================================
  */

  const startingPlayer =
    players[startingPlayerIndex];

  const imposterName =
    players[imposterIndex];

  /*
    ==========================================
    REVEAL BUTTON
    ==========================================
  */

  const canRevealImposter =
    selectionComplete &&
    revealPhase === "idle";

  /*
    ==========================================
    REVEAL IMPOSTER
    ==========================================
  */

  const revealImposter = () => {
    /*
      Absolutely prevent revealing before
      random selection is complete.
    */

    if (!canRevealImposter) {
      return;
    }

    /*
      STEP 1:
      Remove starting player card.
    */

    setRevealPhase("exiting");

    /*
      STEP 2:
      Start reveal animation only after
      the starting card has disappeared.
    */

    setTimeout(() => {
      setRevealPhase("revealing");
    }, 550);

    /*
      STEP 3:
      Reveal actual imposter.
    */

    setTimeout(() => {
      setRevealPhase("revealed");
    }, 2200);
  };

  /*
    ==========================================
    PLAY AGAIN
    ==========================================
  */

  const playAgain = () => {
    goTo("add-players");
  };

  return (
    <main
      className={`starting-page phase-${revealPhase}`}
    >

      <div className="starting-glow"></div>


      {/* ====================================
          HEADER
      ==================================== */}

      <header className="starting-header">

        <button
          className="starting-back"
          type="button"
          onClick={() =>
            goTo("add-players")
          }
          aria-label="Go back"
        >
          <img
            src={backArrow}
            alt=""
          />
        </button>


        <button
          className="starting-logo"
          type="button"
          onClick={() =>
            goTo("home")
          }
          aria-label="Go to home"
        >

          <span className="starting-logo-icon">
            ?
          </span>

          <span>
            IMPOSTER
          </span>

        </button>

      </header>


      {/* ====================================
          CONTENT
      ==================================== */}

      <section className="starting-content">


        {/* ==================================
            INTRO
        ================================== */}

        <div className="starting-intro">

          <div className="starting-eyebrow">

            {revealPhase === "revealed"
              ? "ROUND COMPLETE"
              : revealPhase === "revealing" ||
                revealPhase === "exiting"
                ? "FINAL REVEAL"
                : "ROUND READY"}

          </div>


          <h1>

            {revealPhase === "revealed" ? (
              <>
                IMPOSTER
                <span>
                  REVEALED.
                </span>
              </>
            ) : revealPhase ===
                "revealing" ||
              revealPhase === "exiting" ? (
              <>
                WHO IS
                <span>
                  THE IMPOSTER?
                </span>
              </>
            ) : (
              <>
                RANDOM
                <span>
                  STARTER.
                </span>
              </>
            )}

          </h1>


          <p>

            {revealPhase === "exiting"
              ? "Preparing final reveal..."
              : revealPhase === "revealing"
                ? "Revealing the imposter..."
                : revealPhase === "revealed"
                  ? "The round is over."
                  : selectionComplete
                    ? `${startingPlayer} goes first.`
                    : "Choosing who goes first..."}

          </p>

        </div>


        {/* ==================================
            STARTING PLAYER
        ================================== */}

        {revealPhase === "idle" && (

          <div className="starting-player-section">


            {/* PLAYER CARD */}

            <div
              className={`starting-card ${
                selectionComplete
                  ? "selected"
                  : "selecting"
              }`}
            >

              <div className="starting-card-label">

                {selectionComplete
                  ? "STARTING PLAYER"
                  : "SELECTING PLAYER"}

              </div>


              <div className="starting-card-number">

                {String(
                  displayIndex + 1
                ).padStart(2, "0")}

              </div>


              <div className="starting-player-name">

                {players[displayIndex]}

              </div>


              <div className="starting-card-status">

                {selectionComplete
                  ? "GOES FIRST"
                  : "..."}

              </div>

            </div>


            {/* PLAYER DOTS */}

            <div className="starting-dots">

              {players.map(
                (player, index) => (

                  <span
                    key={`${player}-${index}`}
                    className={
                      index === displayIndex
                        ? "active"
                        : ""
                    }
                  />

                )
              )}

            </div>


            {/* REVEAL BUTTON */}

            <button
              className={`reveal-imposter-button ${
                canRevealImposter
                  ? "ready"
                  : ""
              }`}
              type="button"
              disabled={!canRevealImposter}
              onClick={
                revealImposter
              }
            >

              <span>
                REVEAL THE IMPOSTER
              </span>

            </button>


            {/* STATUS */}

            {!selectionComplete ? (
              <div className="button-status">
                SELECTING STARTING PLAYER...
              </div>
            ) : (
              <div className="button-status ready-status">
                {startingPlayer}
                {" "}
                IS GOING FIRST
              </div>
            )}

          </div>

        )}


        {/* ==================================
            CARD EXIT
        ================================== */}

        {revealPhase === "exiting" && (

          <div className="reveal-transition-space">

            <div className="transition-glow"></div>

          </div>

        )}


        {/* ==================================
            REVEAL ANIMATION
        ================================== */}

        {revealPhase ===
          "revealing" && (

          <div className="imposter-reveal-stage">

            <div className="reveal-ring ring-one"></div>

            <div className="reveal-ring ring-two"></div>

            <div className="reveal-ring ring-three"></div>


            <div className="reveal-blur"></div>


            <div className="reveal-warning">

              <span className="reveal-warning-icon">
                !
              </span>

              <span>
                REVEALING
              </span>

            </div>


            <div className="reveal-shuffle">
              ?
            </div>


            <div className="reveal-loading">

              <span></span>
              <span></span>
              <span></span>

            </div>

          </div>

        )}


        {/* ==================================
            IMPOSTER RESULT
        ================================== */}

        {revealPhase ===
          "revealed" && (

          <div className="imposter-result">

            <div className="imposter-result-label">
              THE IMPOSTER
            </div>


            <div className="imposter-result-card">

              <div className="imposter-result-glow"></div>


              <div className="imposter-result-icon">
                !
              </div>


              <div className="imposter-result-name">
                {imposterName}
              </div>


              <div className="imposter-result-status">
                WAS THE IMPOSTER
              </div>

            </div>


            <div className="game-over-text">
              ROUND COMPLETE
            </div>


            <button
              className="play-again-button"
              type="button"
              onClick={playAgain}
            >

              <span>
                PLAY AGAIN
              </span>

            </button>

          </div>

        )}


        {/* ==================================
            INFO
        ================================== */}

        {revealPhase !==
          "revealed" && (

          <p className="starting-info">

            {revealPhase === "exiting"
              ? "Get ready..."
              : revealPhase ===
                  "revealing"
                ? "The truth is about to be revealed..."
                : !selectionComplete
                  ? "Wait while every player is checked."
                  : "The selected player goes first."}

          </p>

        )}

      </section>

    </main>
  );
}

export default StartingPlayer;