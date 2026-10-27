
import { useEffect, useRef, useState } from "react";
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
  const inputRefs = useRef([]);
  const shouldFocusNewPlayer = useRef(false);
  const dragState = useRef({
    from: null,
    to: null,
    pointerId: null,
  });

  const [draggingIndex, setDraggingIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);

  useEffect(() => {
    if (!shouldFocusNewPlayer.current) return;

    const index = players.length - 1;
    const input = inputRefs.current[index];

    if (input) {
      input.focus();

      requestAnimationFrame(() => {
        input.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      });
    }

    shouldFocusNewPlayer.current = false;
  }, [players.length]);

  // Start dragging from the six-dot handle.
  const handleDragStart = (event, index) => {
    if (event.button !== undefined && event.button !== 0) return;

    event.preventDefault();

    dragState.current = {
      from: index,
      to: index,
      pointerId: event.pointerId,
    };

    setDraggingIndex(index);
    setDragOverIndex(index);

    const handlePointerMove = (moveEvent) => {
      if (dragState.current.from === null) return;

      const element = document.elementFromPoint(
        moveEvent.clientX,
        moveEvent.clientY
      );

      const row = element?.closest("[data-player-index]");
      if (!row) return;

      const targetIndex = Number(row.dataset.playerIndex);

      if (!Number.isNaN(targetIndex)) {
        dragState.current.to = targetIndex;
        setDragOverIndex(targetIndex);
      }
    };

    const finishDrag = () => {
      const { from, to } = dragState.current;

      if (from !== null && to !== null && from !== to) {
        setPlayers((currentPlayers) => {
          const reordered = [...currentPlayers];
          const [movedPlayer] = reordered.splice(from, 1);

          reordered.splice(to, 0, movedPlayer);

          return reordered;
        });
      }

      dragState.current = {
        from: null,
        to: null,
        pointerId: null,
      };

      setDraggingIndex(null);
      setDragOverIndex(null);

      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerup", finishDrag);
      document.removeEventListener("pointercancel", finishDrag);
    };

    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerup", finishDrag);
    document.addEventListener("pointercancel", finishDrag);
  };

  const addPlayer = () => {
    shouldFocusNewPlayer.current = true;
    setPlayers([...players, ""]);
  };

  const updatePlayer = (index, value) => {
    setPlayers((currentPlayers) =>
      currentPlayers.map((player, playerIndex) =>
        playerIndex === index ? value : player
      )
    );
  };

  const removePlayer = (index) => {
    if (players.length <= 1) return;

    setPlayers((currentPlayers) =>
      currentPlayers.filter((_, playerIndex) => playerIndex !== index)
    );
  };

  const playerCount = players.filter(
    (player) => player.trim() !== ""
  ).length;

  const canStart =
    playerCount >= 3 && selectedCategories.length > 0;

  return (
    <main className="players-page">
      <div className="players-glow players-glow-one" />
      <div className="players-glow players-glow-two" />

      <header className="players-header">
        <button
          className="players-logo"
          onClick={() => goTo("home")}
          aria-label="Go to home"
          type="button"
        >
          <span className="players-logo-icon">?</span>
          <span>IMPOSTER</span>
        </button>
      </header>

      <section className="players-content">
        <div className="players-intro">
          <div className="players-eyebrow">GAME SETUP</div>

          <h1>
            ADD
            <span>PLAYERS.</span>
          </h1>

          <p>Add everyone who is playing.</p>
        </div>

        <section className="players-section">
          <div className="section-heading">
            <div>
              <span className="section-number">01</span>
              <h2>PLAYERS</h2>
            </div>

            <span className="player-count">{playerCount}</span>
          </div>

          <p className="drag-instruction">
            Hold the six dots and drag to reorder players.
          </p>

          <div className="player-list">
            {players.map((player, index) => (
              <div
                key={index}
                data-player-index={index}
                className={`player-input-row${
                  draggingIndex === index ? " is-dragging" : ""
                }${
                  dragOverIndex === index &&
                  draggingIndex !== index
                    ? " is-drag-over"
                    : ""
                }`}
              >
                <button
                  className="player-drag-handle"
                  type="button"
                  aria-label={`Hold and drag to move player ${index + 1}`}
                  title="Hold and drag to reorder"
                  onPointerDown={(event) =>
                    handleDragStart(event, index)
                  }
                >
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </button>

                <span className="player-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <input
                  ref={(element) => {
                    inputRefs.current[index] = element;
                  }}
                  type="text"
                  value={player}
                  onChange={(event) =>
                    updatePlayer(index, event.target.value)
                  }
                  placeholder="Enter player name..."
                  maxLength={20}
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="words"
                  spellCheck={false}
                  inputMode="text"
                  autoFocus={index === 0 && players.length === 1}
                />

                {players.length > 1 && (
                  <button
                    className="remove-player"
                    type="button"
                    onClick={() => removePlayer(index)}
                    aria-label={`Remove player ${index + 1}`}
                  >
                    <img src={removeX} alt="" />
                  </button>
                )}
              </div>
            ))}
          </div>

          <button
            className="add-player-button"
            type="button"
            onClick={addPlayer}
          >
            <span className="add-player-plus">+</span>
            <span>ADD PLAYER</span>
          </button>
        </section>

        <section className="setup-section">
          <div className="section-heading">
            <div>
              <span className="section-number">02</span>
              <h2>CATEGORY</h2>
            </div>
          </div>

          <button
            className={`setup-navigation ${
              selectedCategories.length > 0 ? "selected" : ""
            }`}
            type="button"
            onClick={() => goTo("categories")}
          >
            <span className="setup-icon">◈</span>

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

        <section className="setup-section">
          <div className="section-heading">
            <div>
              <span className="section-number">03</span>
              <h2>SETTINGS</h2>
            </div>
          </div>

          <button
            className="setup-navigation"
            type="button"
            onClick={() => goTo("settings")}
          >
            <span className="setup-icon">⚙</span>

            <span className="setup-info">
              <strong>HINT FOR IMPOSTER</strong>
              <small>{hintEnabled ? "Enabled" : "Disabled"}</small>
            </span>
          </button>
        </section>

        <button
          className={`start-game-button ${canStart ? "ready" : ""}`}
          type="button"
          disabled={!canStart}
          onClick={startGame}
        >
          <span>START GAME</span>
        </button>

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
