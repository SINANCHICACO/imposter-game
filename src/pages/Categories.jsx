import "./Categories.css";
import backArrow from "../assets/back-arrow.png";


/* =========================================
   CATEGORY LIST
   These names are shown on the setup screen.
========================================= */

const categories = [
  "Daily Objects",
  "Animals",
  "Food",
  "Drinks",
  "Movies",
  "Games",
  "Sports",
  "Vehicles",
  "Places",
  "Professions",
  "Technology",
  "Nature",
  "Music",
  "Clothing",
  "Travel",
  "Toys",
  "Random",
];


/* =========================================
   SECRET WORD BANK
   These words are NOT shown on the
   category selection screen.

   Each category contains 25 words.
========================================= */

export const CATEGORY_WORDS = {

  /* =====================================
     DAILY OBJECTS
  ===================================== */

  "Daily Objects": [
    "Chair",
    "Hair Dryer",
    "Compass",
    "Thermos",
    "Umbrella",
    "Flashlight",
    "Backpack",
    "Binoculars",
    "Alarm Clock",
    "Calculator",
    "Headphones",
    "Suitcase",
    "Corkscrew",
    "Stapler",
    "Measuring Tape",
    "Magnifying Glass",
    "Keychain",
    "Wallet",
    "Sunglasses",
    "Remote Control",
    "Desk Lamp",
    "Toothbrush",
    "Padlock",
    "Water Bottle",
    "Electric Kettle",
  ],


  /* =====================================
     ANIMALS
  ===================================== */

  Animals: [
    "Chameleon",
    "Flamingo",
    "Penguin",
    "Octopus",
    "Hedgehog",
    "Crocodile",
    "Peacock",
    "Kangaroo",
    "Giraffe",
    "Platypus",
    "Pangolin",
    "Sloth",
    "Porcupine",
    "Meerkat",
    "Rhinoceros",
    "Hippopotamus",
    "Ostrich",
    "Jellyfish",
    "Seahorse",
    "Armadillo",
    "Komodo Dragon",
    "Mongoose",
    "Woodpecker",
    "Salamander",
    "Wolverine",
  ],


  /* =====================================
     FOOD
  ===================================== */

  Food: [
    "Lasagna",
    "Burrito",
    "Pancakes",
    "Dumplings",
    "Sushi",
    "Tacos",
    "Cheesecake",
    "Croissant",
    "Pasta",
    "Nachos",
    "Risotto",
    "Waffles",
    "Falafel",
    "Shawarma",
    "Ratatouille",
    "Macaroni",
    "Brownie",
    "Pani Puri",
    "Biryani",
    "Gnocchi",
    "Quesadilla",
    "Tiramisu",
    "Pretzel",
    "Spring Rolls",
    "Pav Bhaji",
  ],


  /* =====================================
     DRINKS
  ===================================== */

  Drinks: [
    "Lemonade",
    "Milkshake",
    "Espresso",
    "Cappuccino",
    "Smoothie",
    "Hot Chocolate",
    "Iced Tea",
    "Mojito",
    "Lassi",
    "Masala Chai",
    "Cold Coffee",
    "Orange Juice",
    "Coconut Water",
    "Ginger Tea",
    "Root Beer",
    "Mocktail",
    "Green Tea",
    "Strawberry Shake",
    "Mango Lassi",
    "Filter Coffee",
    "Pomegranate Juice",
    "Buttermilk",
    "Sparkling Water",
    "Apple Cider",
    "Fruit Punch",
  ],


  /* =====================================
     MOVIES
  ===================================== */

  Movies: [
    "Inception",
    "Interstellar",
    "Titanic",
    "Avatar",
    "Gladiator",
    "Joker",
    "Parasite",
    "The Matrix",
    "Frozen",
    "Coco",
    "Toy Story",
    "Jurassic Park",
    "The Lion King",
    "Dangal",
    "3 Idiots",
    "Drishyam",
    "KGF",
    "RRR",
    "Bahubali",
    "Pushpa",
    "Zindagi Na Milegi Dobara",
    "Andhadhun",
    "The Dark Knight",
    "Finding Nemo",
    "Home Alone",
  ],


  /* =====================================
     GAMES
  ===================================== */

  Games: [
    "Minecraft",
    "Chess",
    "Monopoly",
    "Uno",
    "Jenga",
    "Fortnite",
    "Tetris",
    "Among Us",
    "Cluedo",
    "Scrabble",
    "Ludo",
    "Carrom",
    "Sudoku",
    "Hide and Seek",
    "Pac-Man",
    "Valorant",
    "GTA",
    "FIFA",
    "Tekken",
    "Mortal Kombat",
    "Pokémon",
    "Call of Duty",
    "Subway Surfers",
    "Temple Run",
    "Need for Speed",
  ],


  /* =====================================
     SPORTS
  ===================================== */

  Sports: [
    "Cricket",
    "Football",
    "Basketball",
    "Tennis",
    "Badminton",
    "Volleyball",
    "Swimming",
    "Boxing",
    "Archery",
    "Golf",
    "Hockey",
    "Table Tennis",
    "Wrestling",
    "Skateboarding",
    "Cycling",
    "Gymnastics",
    "Fencing",
    "Karate",
    "Surfing",
    "Baseball",
    "Rugby",
    "Athletics",
    "Rowing",
    "Skiing",
    "Formula Racing",
  ],


  /* =====================================
     VEHICLES
  ===================================== */

  Vehicles: [
    "Helicopter",
    "Submarine",
    "Motorcycle",
    "Ambulance",
    "Bulldozer",
    "Convertible",
    "Limousine",
    "Tractor",
    "Yacht",
    "Scooter",
    "Hovercraft",
    "Fire Truck",
    "Excavator",
    "Canoe",
    "Hot Air Balloon",
    "Jet Ski",
    "Cable Car",
    "Monster Truck",
    "Race Car",
    "Rickshaw",
    "Glider",
    "Cruise Ship",
    "Trolleybus",
    "Camper Van",
    "Snowmobile",
  ],


  /* =====================================
     PLACES
  ===================================== */

  Places: [
    "Airport",
    "Museum",
    "Library",
    "Aquarium",
    "Lighthouse",
    "Stadium",
    "Castle",
    "Temple",
    "Hospital",
    "Train Station",
    "Waterfall",
    "Amusement Park",
    "Zoo",
    "Beach",
    "Desert",
    "Volcano",
    "Cemetery",
    "University",
    "Shopping Mall",
    "Subway Station",
    "Art Gallery",
    "Observatory",
    "Mountain Cabin",
    "Harbor",
    "Rainforest",
  ],


  /* =====================================
     PROFESSIONS
  ===================================== */

  Professions: [
    "Architect",
    "Detective",
    "Surgeon",
    "Astronaut",
    "Photographer",
    "Journalist",
    "Firefighter",
    "Veterinarian",
    "Archaeologist",
    "Pilot",
    "Sculptor",
    "Electrician",
    "Carpenter",
    "Chef",
    "Librarian",
    "Animator",
    "Marine Biologist",
    "Geologist",
    "Forensic Scientist",
    "Sound Engineer",
    "Film Director",
    "Paramedic",
    "Meteorologist",
    "Game Developer",
    "Cartographer",
  ],


  /* =====================================
     TECHNOLOGY
  ===================================== */

  Technology: [
    "Smartphone",
    "Drone",
    "Robot",
    "Virtual Reality",
    "Artificial Intelligence",
    "Satellite",
    "3D Printer",
    "Smartwatch",
    "Keyboard",
    "Microphone",
    "Projector",
    "Hologram",
    "Game Console",
    "Fingerprint Scanner",
    "Power Bank",
    "Webcam",
    "Graphics Card",
    "USB Drive",
    "Router",
    "Touchscreen",
    "Smart Speaker",
    "VR Headset",
    "Solar Panel",
    "Cryptocurrency",
    "Facial Recognition",
  ],


  /* =====================================
     NATURE
  ===================================== */

  Nature: [
    "Thunderstorm",
    "Rainbow",
    "Avalanche",
    "Glacier",
    "Volcano",
    "Tornado",
    "Waterfall",
    "Earthquake",
    "Northern Lights",
    "Coral Reef",
    "Mangrove",
    "Sunflower",
    "Bamboo",
    "Cactus",
    "Mushroom",
    "Lightning",
    "Eclipse",
    "Desert",
    "Rainforest",
    "Ocean",
    "Canyon",
    "Water Lily",
    "Pine Forest",
    "Meteor",
    "Sand Dune",
  ],


  /* =====================================
     MUSIC
  ===================================== */

  Music: [
    "Guitar",
    "Piano",
    "Violin",
    "Drums",
    "Saxophone",
    "Trumpet",
    "Flute",
    "Harmonica",
    "Microphone",
    "Headphones",
    "Concert",
    "Orchestra",
    "DJ",
    "Karaoke",
    "Bass Guitar",
    "Tambourine",
    "Maracas",
    "Accordion",
    "Cello",
    "Banjo",
    "Turntable",
    "Music Box",
    "Symphony",
    "Record Player",
    "Electric Guitar",
  ],


  /* =====================================
     CLOTHING
  ===================================== */

  Clothing: [
    "Leather Jacket",
    "Hoodie",
    "Trench Coat",
    "Denim Jacket",
    "Sneakers",
    "Sunglasses",
    "Bow Tie",
    "Necktie",
    "Raincoat",
    "Tracksuit",
    "Overalls",
    "Cardigan",
    "Blazer",
    "Jumpsuit",
    "Scarf",
    "Beanie",
    "Gloves",
    "Loafers",
    "Sandals",
    "Boots",
    "Suspenders",
    "Poncho",
    "Kimono",
    "Tuxedo",
    "Windbreaker",
  ],


  /* =====================================
     TRAVEL
  ===================================== */

  Travel: [
    "Passport",
    "Suitcase",
    "Boarding Pass",
    "Compass",
    "Tourist Map",
    "Travel Pillow",
    "Hotel Room",
    "Airport Lounge",
    "Road Trip",
    "Cruise Ship",
    "Backpacking",
    "Souvenir",
    "Travel Adapter",
    "Camping Tent",
    "Train Journey",
    "Tour Guide",
    "Car Rental",
    "Beach Resort",
    "Mountain Trek",
    "Safari",
    "Hostel",
    "Passport Stamp",
    "Travel Journal",
    "Flight Delay",
    "Luggage Carousel",
  ],


  /* =====================================
     TOYS
  ===================================== */

  Toys: [
    "Rubik's Cube",
    "Teddy Bear",
    "Yo-Yo",
    "Remote Control Car",
    "Toy Train",
    "Building Blocks",
    "Action Figure",
    "Dollhouse",
    "Kaleidoscope",
    "Toy Robot",
    "Water Gun",
    "Frisbee",
    "Marbles",
    "Spinning Top",
    "Toy Telescope",
    "Magic Set",
    "Board Game",
    "Stuffed Dinosaur",
    "Toy Helicopter",
    "Jump Rope",
    "Model Airplane",
    "Puzzle Cube",
    "Bubble Wand",
    "Toy Kitchen",
    "Wooden Puzzle",
  ],


  /* =====================================
     RANDOM
     Mixed from all categories.
  ===================================== */

  Random: [
    "Compass",
    "Chameleon",
    "Tiramisu",
    "Espresso",
    "Inception",
    "Minecraft",
    "Archery",
    "Submarine",
    "Lighthouse",
    "Astronaut",
    "Hologram",
    "Thunderstorm",
    "Saxophone",
    "Trench Coat",
    "Passport",
    "Rubik's Cube",
    "Binoculars",
    "Pangolin",
    "Risotto",
    "Northern Lights",
    "Detective",
    "Drone",
    "Glacier",
    "Concert",
    "Hovercraft",
  ],
};


/* =========================================
   CATEGORIES COMPONENT
========================================= */

function Categories({
  selectedCategories = [],
  setSelectedCategories,
  goTo,
}) {


  /* =========================================
     SELECT / UNSELECT CATEGORY
  ========================================= */

  const toggleCategory = (category) => {

    if (selectedCategories.includes(category)) {

      setSelectedCategories(
        selectedCategories.filter(
          (item) => item !== category
        )
      );

    } else {

      setSelectedCategories([
        ...selectedCategories,
        category,
      ]);

    }
  };


  return (
    <main className="categories-page">


      {/* =====================================
          BACKGROUND
      ===================================== */}

      <div className="categories-glow"></div>


      {/* =====================================
          HEADER
      ===================================== */}

      <header className="categories-header">


        {/* BACK BUTTON */}

        <button
          className="categories-back"
          onClick={() => goTo("add-players")}
          aria-label="Go back"
          type="button"
        >

          <img
            src={backArrow}
            alt=""
          />

        </button>


        {/* LOGO */}

        <button
          className="categories-logo"
          onClick={() => goTo("home")}
          aria-label="Go to home"
          type="button"
        >

          <span className="categories-logo-icon">
            ?
          </span>

          <span>
            IMPOSTER
          </span>

        </button>

      </header>


      {/* =====================================
          CONTENT
      ===================================== */}

      <section className="categories-content">


        {/* =====================================
            INTRO
        ===================================== */}

        <div className="categories-intro">

          <div className="categories-eyebrow">
            GAME SETUP
          </div>

          <h1>
            CHOOSE
            <span>CATEGORIES.</span>
          </h1>

          <p>
            Select one or more categories for the
            secret word.
          </p>

        </div>


        {/* =====================================
            SELECTION COUNT
        ===================================== */}

        <div className="categories-selection-info">

          <span>
            SELECTED
          </span>

          <strong>
            {selectedCategories.length}
          </strong>

        </div>


        {/* =====================================
            CATEGORY GRID
        ===================================== */}

        <div className="category-grid">

          {categories.map(
            (category, index) => {

              const isSelected =
                selectedCategories.includes(
                  category
                );


              return (

                <button
                  key={category}
                  type="button"
                  className={`category-card ${
                    isSelected
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    toggleCategory(category)
                  }
                >

                  <span className="category-index">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>


                  <span className="category-name">
                    {category}
                  </span>


                  {isSelected && (

                    <span className="category-check">
                      ✓
                    </span>

                  )}

                </button>

              );

            }
          )}

        </div>


        {/* =====================================
            SELECTED CATEGORIES
        ===================================== */}

        {selectedCategories.length > 0 && (

          <div className="selected-categories">

            <div className="selected-title">
              SELECTED CATEGORIES
            </div>


            <div className="selected-list">

              {selectedCategories.map(
                (category) => (

                  <span
                    className="selected-chip"
                    key={category}
                  >
                    {category}
                  </span>

                )
              )}

            </div>

          </div>

        )}


        {/* =====================================
            BACK TO SETUP
        ===================================== */}

        <button
          className="category-back-button"
          onClick={() =>
            goTo("add-players")
          }
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


export default Categories;