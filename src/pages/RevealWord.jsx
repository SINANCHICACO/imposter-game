import { useEffect, useState } from "react";

import "./RevealWord.css";
import backArrow from "../assets/back-arrow.png";

function RevealWord({
  playerName,
  isImposter,
  secretWord,
  hintWord,
  hintEnabled,
  playerNumber,
  totalPlayers,
  category,
  onNext,
  goTo,
}) {
  const [isHolding, setIsHolding] = useState(false);
  const [hasRevealed, setHasRevealed] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  /*
    Each player gets their own color.

    Player 1 → Purple
    Player 2 → Blue
    Player 3 → Green
    Player 4 → Yellow
    Player 5 → Orange
    Player 6 → Pink
    Player 7 → Teal
    Player 8 → Red

    After Player 8, colors repeat.
  */
  const playerColor =
    ((playerNumber - 1) % 8) + 1;

  /*
    Reset reveal state whenever
    the player changes.
  */
  useEffect(() => {
    setIsHolding(false);
    setHasRevealed(false);
    setIsTransitioning(false);
  }, [playerNumber]);

  /* =========================================
     START HOLD
  ========================================= */

  const handlePressStart = (event) => {
    if (isTransitioning) return;

    event.preventDefault();

    try {
      event.currentTarget.setPointerCapture(
        event.pointerId
      );
    } catch (error) {
      // Ignore pointer capture errors.
    }

    setIsHolding(true);
    setHasRevealed(true);
  };

  /* =========================================
     END HOLD
  ========================================= */

  const handlePressEnd = (event) => {
    event.preventDefault();

    setIsHolding(false);

    try {
      if (
        event.currentTarget.hasPointerCapture(
          event.pointerId
        )
      ) {
        event.currentTarget.releasePointerCapture(
          event.pointerId
        );
      }
    } catch (error) {
      // Ignore pointer capture errors.
    }
  };

  /* =========================================
     CANCEL HOLD
  ========================================= */

  const handlePressCancel = () => {
    setIsHolding(false);
  };

  /* =========================================
     CAN GO NEXT
  ========================================= */

  const canGoNext =
    hasRevealed &&
    !isHolding &&
    !isTransitioning;

  /* =========================================
     NEXT PLAYER
  ========================================= */

  const handleNextPlayer = () => {
    if (!canGoNext) return;

    setIsTransitioning(true);

    /*
      Allow the transition animation
      to play before moving to the next player.
    */
    setTimeout(() => {
      onNext();
    }, 700);
  };

  return (
    <main
      className={`reveal-page ${
        isTransitioning
          ? "page-transitioning"
          : ""
      }`}
    >

      {/* =====================================
          BACKGROUND
      ===================================== */}

      <div className="reveal-glow"></div>


      {/* =====================================
          HEADER
      ===================================== */}

      <header className="reveal-header">

        {/* BACK BUTTON */}

        <button
          className="reveal-back"
          type="button"
          onClick={() => goTo("add-players")}
          aria-label="Go back"
          disabled={isTransitioning}
        >
          <img
            src={backArrow}
            alt=""
          />
        </button>


        {/* LOGO */}

        <button
          className="reveal-logo"
          type="button"
          onClick={() => goTo("home")}
          aria-label="Go to home"
          disabled={isTransitioning}
        >
          <span className="reveal-logo-icon">
            ?
          </span>

          <span>
            IMPOSTER
          </span>
        </button>


        {/* PROGRESS */}

        <div className="reveal-progress">
          {playerNumber} / {totalPlayers}
        </div>

      </header>


      {/* =====================================
          CONTENT
      ===================================== */}

      <section className="reveal-content">


        {/* =====================================
            PLAYER INFO
        ===================================== */}

        <div className="reveal-player-info">

          <span className="reveal-eyebrow">
            PLAYER {playerNumber}
          </span>

          <h1>
            {playerName}
          </h1>

          <p>
            Keep this screen private.
          </p>

        </div>


        {/* =====================================
            REVEAL CARD
        ===================================== */}

        <div
          className={`reveal-card player-color-${playerColor} ${
            isHolding
              ? "holding"
              : ""
          } ${
            isImposter
              ? "imposter-card"
              : ""
          }`}

          onPointerDown={
            handlePressStart
          }

          onPointerUp={
            handlePressEnd
          }

          onPointerCancel={
            handlePressCancel
          }

          onLostPointerCapture={
            handlePressCancel
          }

          onContextMenu={(event) =>
            event.preventDefault()
          }
        >

          {/* ===================================
              CARD NUMBER
          =================================== */}

          <div className="reveal-card-number">
            {String(playerNumber).padStart(
              2,
              "0"
            )}
          </div>


          {/* ===================================
              BEFORE REVEAL
          =================================== */}

          {!isHolding && (

            <div className="hold-content">

              <div className="hold-icon">
                <span></span>
              </div>

              <h2>
                HOLD TO REVEAL
              </h2>

              <p>
                Keep holding to see your role.
              </p>

            </div>

          )}


          {/* ===================================
              AFTER REVEAL
          =================================== */}

          {isHolding && (

            <>

              {/* =================================
                  IMPOSTER
              ================================= */}

              {isImposter && (

                <div className="imposter-content">

                  <div className="imposter-symbol">
                    !
                  </div>

                  <span className="imposter-label">
                    YOUR ROLE
                  </span>

                  <h2>
                    YOU ARE
                    <span>
                      THE IMPOSTER
                    </span>
                  </h2>


                  {hintEnabled && (

                    <div className="hint-reveal">

                      <span>
                        YOUR HINT
                      </span>

                      <strong>
                        {hintWord}
                      </strong>

                    </div>

                  )}


                  {!hintEnabled && (

                    <p className="no-hint">
                      No hint this round.
                    </p>

                  )}

                </div>

              )}


              {/* =================================
                  NORMAL PLAYER
              ================================= */}

              {!isImposter && (

                <div className="word-content">

                  <span className="word-label">
                    SECRET WORD
                  </span>

                  <strong className="secret-word">
                    {secretWord}
                  </strong>

                  <span className="word-category">
                    {category}
                  </span>

                </div>

              )}

            </>

          )}

        </div>


        {/* =====================================
            INSTRUCTION
        ===================================== */}

        <div className="reveal-instruction">

          {isTransitioning
            ? "PASS THE PHONE"
            : isHolding
              ? "KEEP HOLDING"
              : hasRevealed
                ? "RELEASED — WORD HIDDEN"
                : "PRESS AND HOLD THE CARD"}

        </div>


        {/* =====================================
            NEXT PLAYER
        ===================================== */}

        <button
          className={`next-player-button ${
            canGoNext
              ? "ready"
              : ""
          } ${
            isTransitioning
              ? "transitioning"
              : ""
          }`}

          type="button"

          disabled={!canGoNext}

          onClick={handleNextPlayer}
        >

          {isTransitioning ? (

            <>
              <span className="next-loading">

                <i></i>
                <i></i>
                <i></i>

              </span>

              <span>
                PASS THE PHONE
              </span>
            </>

          ) : (

            <span>
              {playerNumber === totalPlayers
                ? "EVERYONE READY"
                : "NEXT PLAYER"}
            </span>

          )}

        </button>


        {/* =====================================
            PRIVACY MESSAGE
        ===================================== */}

        <p className="privacy-message">

          {isTransitioning
            ? playerNumber === totalPlayers
              ? "Preparing the starting player..."
              : "Get ready for the next player."
            : "Pass the phone to the next player without showing the card."}

        </p>

      </section>


      {/* =====================================
          PASS PHONE TRANSITION
      ===================================== */}

      {isTransitioning && (

        <div className="pass-phone-overlay">

          <div className="pass-phone-glow"></div>

          <div className="pass-phone-content">

            <div className="pass-phone-icon">
              <span>→</span>
            </div>

            <span className="pass-phone-small">
              PLAYER {playerNumber}
            </span>

            <h2>
              PASS
              <span>THE PHONE</span>
            </h2>

            <div className="pass-phone-line">
              <span></span>
            </div>

            <p>
              {playerNumber === totalPlayers
                ? "Everyone is ready"
                : "Next player is up"}
            </p>

          </div>

        </div>

      )}

    </main>
  );
}

export default RevealWord;