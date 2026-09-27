import { useState } from "react";

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

  const [isHolding, setIsHolding] =
    useState(false);

  const [hasRevealed, setHasRevealed] =
    useState(false);


  /* =========================================
     START HOLD
  ========================================= */

  const handlePressStart = (event) => {

    event.preventDefault();

    /*
      Capture the pointer.

      This is important on mobile because
      a finger can move slightly while holding.
      Without pointer capture, onPointerLeave
      can fire and reveal would disappear.
    */

    try {
      event.currentTarget.setPointerCapture(
        event.pointerId
      );
    } catch (error) {
      // Pointer capture may not be available
      // in some browsers.
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
    !isHolding;


  return (
    <main className="reveal-page">


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
          className={`reveal-card ${
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
                •
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

          {isHolding
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
          }`}
          type="button"
          disabled={!canGoNext}
          onClick={onNext}
        >

          <span>
            {playerNumber === totalPlayers
              ? "EVERYONE READY"
              : "NEXT PLAYER"}
          </span>

        </button>


        {/* =====================================
            PRIVACY MESSAGE
        ===================================== */}

        <p className="privacy-message">
          Pass the phone to the next player
          without showing the card.
        </p>

      </section>

    </main>
  );
}


export default RevealWord;