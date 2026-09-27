import { useEffect, useState } from "react";

import Home from "./pages/Home";
import HowToPlay from "./pages/HowToPlay";
import AddPlayers from "./pages/AddPlayers";
import Categories, {
  CATEGORY_WORDS,
} from "./pages/Categories";
import Settings from "./pages/Settings";
import RevealWord from "./pages/RevealWord";
import StartingPlayer from "./pages/StartingPlayer";


/* =========================================
   GET PAGE FROM HASH
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

    case "#reveal":
      return "reveal";

    case "#starting-player":
      return "starting-player";

    default:
      return "home";
  }
}


/* =========================================
   RANDOM ITEM
========================================= */

function getRandomItem(array) {
  return array[
    Math.floor(
      Math.random() * array.length
    )
  ];
}


/* =========================================
   HINT
========================================= */

function getHint(word) {

  const hints = {

    Chair: "Furniture",
    "Hair Dryer": "Air",
    Compass: "Direction",
    Thermos: "Temperature",
    Umbrella: "Rain",
    Flashlight: "Light",
    Backpack: "Travel",
    Binoculars: "Vision",
    "Alarm Clock": "Morning",
    Calculator: "Numbers",
    Headphones: "Sound",
    Suitcase: "Travel",
    Corkscrew: "Bottle",
    Stapler: "Paper",
    "Measuring Tape": "Length",
    "Magnifying Glass": "Zoom",
    Keychain: "Keys",
    Wallet: "Money",
    Sunglasses: "Summer",
    "Remote Control": "Buttons",
    "Desk Lamp": "Light",
    Toothbrush: "Bathroom",
    Padlock: "Security",
    "Water Bottle": "Drink",
    "Electric Kettle": "Hot",

    Chameleon: "Color",
    Flamingo: "Pink",
    Penguin: "Cold",
    Octopus: "Tentacles",
    Hedgehog: "Spikes",
    Crocodile: "Reptile",
    Peacock: "Feathers",
    Kangaroo: "Jump",
    Giraffe: "Tall",
    Platypus: "Strange",
    Pangolin: "Scales",
    Sloth: "Slow",
    Porcupine: "Spikes",
    Meerkat: "Desert",
    Rhinoceros: "Horn",
    Hippopotamus: "River",
    Ostrich: "Fast",
    Jellyfish: "Ocean",
    Seahorse: "Tiny",
    Armadillo: "Shell",
    "Komodo Dragon": "Island",
    Mongoose: "Snake",
    Woodpecker: "Tree",
    Salamander: "Amphibian",
    Wolverine: "Wild",

    Lasagna: "Layers",
    Burrito: "Wrap",
    Pancakes: "Stack",
    Dumplings: "Filling",
    Sushi: "Rice",
    Tacos: "Shell",
    Cheesecake: "Cream",
    Croissant: "Pastry",
    Pasta: "Italian",
    Nachos: "Crunch",
    Risotto: "Creamy",
    Waffles: "Grid",
    Falafel: "Chickpea",
    Shawarma: "Meat",
    Ratatouille: "Vegetables",
    Macaroni: "Pasta",
    Brownie: "Chocolate",
    "Pani Puri": "Crispy",
    Biryani: "Spices",
    Gnocchi: "Potato",
    Quesadilla: "Cheese",
    Tiramisu: "Dessert",
    Pretzel: "Twist",
    "Spring Rolls": "Crispy",
    "Pav Bhaji": "Street",

    Lemonade: "Citrus",
    Milkshake: "Creamy",
    Espresso: "Coffee",
    Cappuccino: "Foam",
    Smoothie: "Fruit",
    "Hot Chocolate": "Winter",
    "Iced Tea": "Cold",
    Mojito: "Mint",
    Lassi: "Yogurt",
    "Masala Chai": "Spices",
    "Cold Coffee": "Chilled",
    "Orange Juice": "Citrus",
    "Coconut Water": "Tropical",
    "Ginger Tea": "Spicy",
    "Root Beer": "Fizzy",
    Mocktail: "Party",
    "Green Tea": "Healthy",
    "Strawberry Shake": "Berry",
    "Mango Lassi": "Mango",
    "Filter Coffee": "South",
    "Pomegranate Juice": "Red",
    Buttermilk: "Yogurt",
    "Sparkling Water": "Bubbles",
    "Apple Cider": "Apple",
    "Fruit Punch": "Mixed",

    Inception: "Dream",
    Interstellar: "Space",
    Titanic: "Ship",
    Avatar: "Blue",
    Gladiator: "Arena",
    Joker: "Clown",
    Parasite: "House",
    "The Matrix": "Reality",
    Frozen: "Ice",
    Coco: "Music",
    "Toy Story": "Toys",
    "Jurassic Park": "Dinosaurs",
    "The Lion King": "Africa",
    Dangal: "Wrestling",
    "3 Idiots": "College",
    Drishyam: "Mystery",
    KGF: "Gold",
    RRR: "Freedom",
    Bahubali: "Kingdom",
    Pushpa: "Forest",
    "Zindagi Na Milegi Dobara": "Friends",
    Andhadhun: "Piano",
    "The Dark Knight": "Batman",
    "Finding Nemo": "Ocean",
    "Home Alone": "Christmas",

    Minecraft: "Blocks",
    Chess: "Strategy",
    Monopoly: "Money",
    Uno: "Cards",
    Jenga: "Balance",
    Fortnite: "Battle",
    Tetris: "Blocks",
    "Among Us": "Crew",
    Cluedo: "Mystery",
    Scrabble: "Words",
    Ludo: "Dice",
    Carrom: "Coins",
    Sudoku: "Numbers",
    "Hide and Seek": "Searching",
    "Pac-Man": "Maze",
    Valorant: "Agents",
    GTA: "Crime",
    FIFA: "Football",
    Tekken: "Fighting",
    "Mortal Kombat": "Combat",
    Pokémon: "Creatures",
    "Call of Duty": "Soldiers",
    "Subway Surfers": "Running",
    "Temple Run": "Jungle",
    "Need for Speed": "Racing",
  };

  return hints[word] || "Related";
}


/* =========================================
   APP
========================================= */

function App() {

  const [page, setPage] = useState(
    getPageFromHash()
  );


  /* =========================================
     SETUP
  ========================================= */

  const [players, setPlayers] = useState([
    "",
  ]);

  const [selectedCategories, setSelectedCategories] =
    useState([]);

  const [hintEnabled, setHintEnabled] =
    useState(true);


  /* =========================================
     GAME
  ========================================= */

  const [gamePlayers, setGamePlayers] =
    useState([]);

  const [currentPlayerIndex, setCurrentPlayerIndex] =
    useState(0);

  const [gameCategory, setGameCategory] =
    useState("");

  const [secretWord, setSecretWord] =
    useState("");

  const [imposterIndex, setImposterIndex] =
    useState(null);

  const [hintWord, setHintWord] =
    useState("");

  const [lastWord, setLastWord] =
    useState("");

  const [startingPlayerIndex, setStartingPlayerIndex] =
    useState(null);


  /* =========================================
     HASH CHANGE
  ========================================= */

  useEffect(() => {

    const handleHashChange = () => {
      setPage(getPageFromHash());
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
        window.location.hash =
          "how-to-play";
        break;

      case "add-players":
        window.location.hash =
          "add-players";
        break;

      case "categories":
        window.location.hash =
          "categories";
        break;

      case "settings":
        window.location.hash =
          "settings";
        break;

      case "reveal":
        window.location.hash =
          "reveal";
        break;

      case "starting-player":
        window.location.hash =
          "starting-player";
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

    const cleanPlayers =
      players
        .map((player) =>
          player.trim()
        )
        .filter(
          (player) =>
            player !== ""
        );


    if (
      cleanPlayers.length < 3
    ) {
      return;
    }


    if (
      selectedCategories.length === 0
    ) {
      return;
    }


    /* RANDOM CATEGORY */

    const randomCategory =
      getRandomItem(
        selectedCategories
      );


    /* WORD LIST */

    let availableWords =
      CATEGORY_WORDS[
        randomCategory
      ] || [];


    if (
      availableWords.length === 0
    ) {
      return;
    }


    /* PREVENT REPEATING LAST WORD */

    if (
      availableWords.length > 1 &&
      lastWord
    ) {

      availableWords =
        availableWords.filter(
          (word) =>
            word !== lastWord
        );

    }


    /* RANDOM WORD */

    const randomWord =
      getRandomItem(
        availableWords
      );


    /* RANDOM IMPOSTER */

    const randomImposter =
      Math.floor(
        Math.random() *
        cleanPlayers.length
      );


    /* SAVE */

    setGamePlayers(
      cleanPlayers
    );

    setGameCategory(
      randomCategory
    );

    setSecretWord(
      randomWord
    );

    setImposterIndex(
      randomImposter
    );

    setHintWord(
      getHint(randomWord)
    );

    setCurrentPlayerIndex(
      0
    );

    setStartingPlayerIndex(
      null
    );

    setLastWord(
      randomWord
    );


    goTo("reveal");

  };


  /* =========================================
     NEXT PLAYER
  ========================================= */

  const nextPlayer = () => {

    if (
      currentPlayerIndex <
      gamePlayers.length - 1
    ) {

      setCurrentPlayerIndex(
        currentPlayerIndex + 1
      );

      return;
    }


    /*
      Everyone has seen their role.
      Now select the starting player.
    */

    const randomStartingPlayer =
      Math.floor(
        Math.random() *
        gamePlayers.length
      );


    setStartingPlayerIndex(
      randomStartingPlayer
    );


    goTo(
      "starting-player"
    );

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
        startGame={
          startGame
        }
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
     REVEAL WORD
  ========================================= */

  if (page === "reveal") {

    return (
      <RevealWord

        playerName={
          gamePlayers[
            currentPlayerIndex
          ]
        }

        isImposter={
          currentPlayerIndex ===
          imposterIndex
        }

        secretWord={
          secretWord
        }

        hintWord={
          hintWord
        }

        hintEnabled={
          hintEnabled
        }

        playerNumber={
          currentPlayerIndex + 1
        }

        totalPlayers={
          gamePlayers.length
        }

        category={
          gameCategory
        }

        onNext={
          nextPlayer
        }

        goTo={
          goTo
        }

      />
    );

  }


  /* =========================================
     STARTING PLAYER
  ========================================= */

  if (
    page === "starting-player"
  ) {

    return (
      <StartingPlayer

        players={
          gamePlayers
        }

        startingPlayerIndex={
          startingPlayerIndex
        }

        imposterIndex={
          imposterIndex
        }

        goTo={
          goTo
        }

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