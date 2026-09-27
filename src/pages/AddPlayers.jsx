import { useEffect, useRef } from "react";

import "./AddPlayers.css";
import removeX from "../assets/remove-x.png";

function AddPlayers({
  players,
  setPlayers,
  selectedCategories = [],
  hintEnabled,
  goTo,
  startGame,
}) {
  /* =========================================
     INPUT REFERENCES
  ========================================= */

  const inputRefs = useRef([]);
  const shouldFocusNewPlayer = useRef(false);


  /* =========================================
     AUTO FOCUS NEW PLAYER
  ========================================= */

  useEffect(() => {
    if (!shouldFocusNewPlayer.current) {
      return;
    }

    const newIndex = players.length - 1;
    const newInput = inputRefs.current[newIndex];

    if (newInput) {
      newInput.focus();

      // Keep the page position stable on mobile
      requestAnimationFrame(() => {
        newInput.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      });
    }

    shouldFocusNewPlayer.current = false;
  }, [players.length]);


  /* =========================================
     ADD PLAYER
  ========================================= */

  const addPlayer = () => {
    shouldFocusNewPlayer.current = true;

    setPlayers([
      ...players,
      "",
    ]);
  };


  /* =========================================
     UPDATE PLAYER
  ========================================= */

  const updatePlayer = (index, value) => {
    const updatedPlayers = [
      ...players,
    ];

    updatedPlayers[index] = value;

    setPlayers(updatedPlayers);
  };


  /* =========================================
     REMOVE PLAYER
  ========================================= */

  const removePlayer = (index) => {
    if (players.length <= 1) {
      return;
    }

    const updatedPlayers = players.filter(
      (_, playerIndex) =>
        playerIndex !== index
    );

    setPlayers(updatedPlayers);
  };


  /* =========================================
     PLAYER COUNT
  ========================================= */

  const playerCount =
    players.filter(
      (player) =>
        player.trim() !== ""
    ).length;


  /* =========================================
     CAN START GAME
  ========================================= */

  const canStart =
    playerCount >= 3 &&
    selectedCategories.length > 0;


  return (
    <main className="players-page">

      {/* =====================================
          BACKGROUND
      ===================================== */}

      <div className="players-glow players-glow-one"></div>
      <div className="players-glow players-glow-two"></div>


      {/* =====================================
          HEADER
      ===================================== */}

      <header className="players-header">

        <button
          className="players-logo"
          onClick={() => goTo("home")}
          aria-label="Go to home"
          type="button"
        >

          <span className="players-logo-icon">
            ?
          </span>

          <span>
            IMPOSTER
          </span>

        </button>

      </header>


      {/* =====================================
          MAIN CONTENT
      ===================================== */}

      <section className="players-content">


        {/* =====================================
            INTRO
        ===================================== */}

        <div className="players-intro">

          <div className="players-eyebrow">
            GAME SETUP
          </div>

          <h1>
            ADD
            <span>PLAYERS.</span>
          </h1>

          <p>
            Add everyone who is playing.
          </p>

        </div>


        {/* =====================================
            PLAYERS
        ===================================== */}

        <section className="players-section">

          {/* SECTION HEADING */}

          <div className="section-heading">

            <div>

              <span className="section-number">
                01
              </span>

              <h2>
                PLAYERS
              </h2>

            </div>

            <span className="player-count">
              {playerCount}
            </span>

          </div>


          {/* PLAYER INPUTS */}

          <div className="player-list">

            {players.map(
              (player, index) => (

                <div
                  className="player-input-row"
                  key={index}
                >

                  {/* PLAYER NUMBER */}

                  <span className="player-number">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>


                  {/* PLAYER NAME */}

                  <input
                    ref={(element) => {
                      inputRefs.current[index] =
                        element;
                    }}
                    type="text"
                    value={player}
                    onChange={(event) =>
                      updatePlayer(
                        index,
                        event.target.value
                      )
                    }
                    placeholder="Enter player name..."
                    maxLength={20}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="words"
                    spellCheck="false"
                    inputMode="text"
                    autoFocus={
                      index === 0 &&
                      players.length === 1
                    }
                  />


                  {/* REMOVE PLAYER */}

                  {players.length > 1 && (

                    <button
                      className="remove-player"
                      type="button"
                      onClick={() =>
                        removePlayer(index)
                      }
                      aria-label={`Remove player ${index + 1}`}
                    >

                      <img
                        src={removeX}
                        alt=""
                      />

                    </button>

                  )}

                </div>

              )
            )}

          </div>


          {/* ADD PLAYER */}

          <button
            className="add-player-button"
            type="button"
            onClick={addPlayer}
          >

            <span className="add-player-plus">
              +
            </span>

            <span>
              ADD PLAYER
            </span>

          </button>

        </section>


        {/* =====================================
            CATEGORY
        ===================================== */}

        <section className="setup-section">

          <div className="section-heading">

            <div>

              <span className="section-number">
                02
              </span>

              <h2>
                CATEGORY
              </h2>

            </div>

          </div>


          {/* CATEGORY NAVIGATION */}

          <button
            className={`setup-navigation ${
              selectedCategories.length > 0
                ? "selected"
                : ""
            }`}
            type="button"
            onClick={() =>
              goTo("categories")
            }
          >

            <span className="setup-icon">
              ◈
            </span>


            <span className="setup-info">

              <strong>

                {selectedCategories.length > 0
                  ? `${selectedCategories.length} ${
                      selectedCategories.length === 1
                        ? "CATEGORY"
                        : "CATEGORIES"
                    } SELECTED`
                  : "CHOOSE CATEGORIES"}

              </strong>


              <small>

                {selectedCategories.length > 0
                  ? selectedCategories.join(", ")
                  : "Select one or more categories"}

              </small>

            </span>

          </button>

        </section>


        {/* =====================================
            SETTINGS
        ===================================== */}

        <section className="setup-section">

          <div className="section-heading">

            <div>

              <span className="section-number">
                03
              </span>

              <h2>
                SETTINGS
              </h2>

            </div>

          </div>


          {/* SETTINGS NAVIGATION */}

          <button
            className="setup-navigation"
            type="button"
            onClick={() =>
              goTo("settings")
            }
          >

            <span className="setup-icon">
              ⚙
            </span>


            <span className="setup-info">

              <strong>
                HINT FOR IMPOSTER
              </strong>

              <small>
                {hintEnabled
                  ? "Enabled"
                  : "Disabled"}
              </small>

            </span>

          </button>

        </section>


        {/* =====================================
            START GAME
        ===================================== */}

        <button
          className={`start-game-button ${
            canStart ? "ready" : ""
          }`}
          type="button"
          disabled={!canStart}
          onClick={startGame}
        >

          <span className="start-game-icon">
            ▶
          </span>

          <span>
            START GAME
          </span>

        </button>


        {/* =====================================
            START GAME MESSAGE
        ===================================== */}

        {!canStart && (

          <p className="start-game-note">

            {playerCount < 3
              ? "Add at least 3 players."
              : selectedCategories.length === 0
                ? "Choose at least one category."
                : ""}

          </p>

        )}

      </section>

    </main>
  );
}

export default AddPlayers;