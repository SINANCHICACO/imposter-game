import { useEffect, useState } from "react";

import Home from "./pages/Home";
import HowToPlay from "./pages/HowToPlay";
import AddPlayers from "./pages/AddPlayers";
import Categories from "./pages/Categories";
import Settings from "./pages/Settings";


/* =========================================
   GET PAGE FROM URL HASH
========================================= */

function getPageFromHash() {
  const hash = window.location.hash;

  switch (hash) {
    case "#how-to-play":
      return "how";

    case "#add-players":
      return "add-players";

    case "#categories":
      return "categories";

    case "#settings":
      return "settings";

    default:
      return "home";
  }
}


/* =========================================
   APP
========================================= */

function App() {

  /* =========================================
     CURRENT PAGE
  ========================================= */

  const [page, setPage] = useState(
    getPageFromHash()
  );


  /* =========================================
     GAME SETUP DATA
  ========================================= */

  const [players, setPlayers] = useState([
    ""
  ]);


  /*
    IMPORTANT:

    This is now an ARRAY because
    multiple categories can be selected.

    Example:

    [
      "Movies",
      "Food",
      "Animals"
    ]
  */

  const [
    selectedCategories,
    setSelectedCategories
  ] = useState([]);


  /*
    Hint setting
  */

  const [
    hintEnabled,
    setHintEnabled
  ] = useState(true);


  /* =========================================
     HANDLE URL CHANGES
  ========================================= */

  useEffect(() => {

    const handleHashChange = () => {

      setPage(
        getPageFromHash()
      );

    };


    window.addEventListener(
      "hashchange",
      handleHashChange
    );


    return () => {

      window.removeEventListener(
        "hashchange",
        handleHashChange
      );

    };

  }, []);


  /* =========================================
     NAVIGATION
  ========================================= */

  const goTo = (nextPage) => {

    switch (nextPage) {

      case "home":
        window.location.hash = "";
        break;


      case "how":
        window.location.hash = "how-to-play";
        break;


      case "add-players":
        window.location.hash = "add-players";
        break;


      case "categories":
        window.location.hash = "categories";
        break;


      case "settings":
        window.location.hash = "settings";
        break;


      default:
        window.location.hash = "";
        break;
    }

  };


  /* =========================================
     START GAME
  ========================================= */

  const startGame = () => {

    const cleanPlayers = players
      .map((player) => player.trim())
      .filter((player) => player !== "");


    /*
      Minimum 3 players
    */

    if (cleanPlayers.length < 3) {
      return;
    }


    /*
      At least one category
    */

    if (selectedCategories.length === 0) {
      return;
    }


    /*
      For now just check the data.
      Actual game logic comes next.
    */

    console.log(
      "GAME STARTING"
    );


    console.log({
      players: cleanPlayers,

      categories: selectedCategories,

      hintEnabled: hintEnabled,
    });


    /*
      NEXT STEP:

      1. Randomly choose one category
      2. Choose secret word
      3. Randomly choose imposter
      4. Go to player reveal screen
    */

  };


  /* =========================================
     HOW TO PLAY
  ========================================= */

  if (page === "how") {

    return (
      <HowToPlay
        goTo={goTo}
      />
    );

  }


  /* =========================================
     ADD PLAYERS
  ========================================= */

  if (page === "add-players") {

    return (
      <AddPlayers

        players={players}

        setPlayers={setPlayers}

        selectedCategories={
          selectedCategories
        }

        hintEnabled={
          hintEnabled
        }

        goTo={goTo}

        startGame={startGame}

      />
    );

  }


  /* =========================================
     CATEGORIES
  ========================================= */

  if (page === "categories") {

    return (
      <Categories

        selectedCategories={
          selectedCategories
        }

        setSelectedCategories={
          setSelectedCategories
        }

        goTo={goTo}

      />
    );

  }


  /* =========================================
     SETTINGS
  ========================================= */

  if (page === "settings") {

    return (
      <Settings

        hintEnabled={
          hintEnabled
        }

        setHintEnabled={
          setHintEnabled
        }

        goTo={goTo}

      />
    );

  }


  /* =========================================
     HOME
  ========================================= */

  return (
    <Home
      goTo={goTo}
    />
  );

}


export default App;