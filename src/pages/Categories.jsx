import "./Categories.css";
import backArrow from "../assets/back-arrow.png";


/* =========================================
   CATEGORY LIST
   These names are shown on the setup screen.
========================================= */

const categories = [
  "DailyObjects",
  "Animals",
  "Food",
  "Drinks",
  "Sports",
  "Vehicles",
  "Places",
  "Professions",
  "Nature",
  "Clothing",
  "Toys",
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

  DailyObjects: [
    "sim card",
    "mat",
    "Television",
    "Computer Mouse",
    "Keyboard",
    "Camera",
    "Power Bank",
    "Charging Cable",
    "Earphones",
    "Bluetooth Speaker",
    "Mirror",
    "Comb",
    "lift",
    "Hair Dryer",
    "Perfume Bottle",
    "phone cover",
    "Soap",
    "Shampoo Bottle",
    "Towel",
    "Tissue Box",
    "Lunch Box",
    "oven",
    "Pressure Cooker",
    "knife",
    "fan",
    "Water Filter",
    "Coffee Mug",
    "Plate",
    "Chopsticks",
    "Cutting Board",
    "Scissors",
    "Sewing Kit",
    "hot Glue",
    "Crayons",
    "Colour Pencils",
    "School Bag",
    "Notebook",
    "Pencil Sharpener",
    "Board Game",
    "Playing Cards",
    "Football",
    "Badminton Racket",
    "Skateboard",
    "Bicycle Helmet",
    "Raincoat",
    "Cap",
    "pocket watch",
    "Shoelaces",
    "Pillow",
    "Shopping Bag"
  ],


  /* =====================================
     ANIMALS
  ===================================== */

  Animals: [
    "Dog",
    "Cat",
    "Cow",
    "Buffalo",
    "Goat",
    "Sheep",
    "Horse",
    "Donkey",
    "Rabbit",
    "Hamster",
    "Guinea Pig",
    "Parrot",
    "Pigeon",
    "Hen",
    "Duck",
    "Goose",
    "Turkey",
    "Pig",
    "Camel",
    "Elephant",
    "Lion",
    "Tiger",
    "Leopard",
    "Cheetah",
    "Wolf",
    "Fox",
    "Bear",
    "Deer",
    "Zebra",
    "Monkey",
    "Gorilla",
    "Chimpanzee",
    "Squirrel",
    "Rat",
    "Mouse",
    "Bat",
    "Snake",
    "Turtle",
    "Frog",
    "Eagle",
    "Owl",
    "Crow",
    "Swan",
    "Whale",
    "Dolphin",
    "Shark",
    "Seal",
    "Polar Bear",
    "Panda",
    "Peacock"
  ],


  /* =====================================
     FOOD
  ===================================== */

  Food: [
    "Pizza",
    "Burger",
    "French Fries",
    "Sandwich",
    "Hot Dog",
    "Fried Rice",
    "Noodles",
    "Dosa",
    "Idli",
    "Samosa",
    "Vada Pav",
    "Butter Chicken",
    "Masala Dosa",
    "Chicken Curry",
    "Fish Curry",
    "Parotta",
    "Puttu",
    "Chapati",
    "Fried Chicken",
    "Omelette",
    "Popcorn",
    "Biscuits",
    "Ice Cream",
    "Gulab Jamun",
    "Ladoo",
    "Fruit Salad",
    "Pudding"
  ],


  /* =====================================
     DRINKS
  ===================================== */

  Drinks: [
    "Tea",
    "Coffee",
    "Lemon Tea",
    "Milkshake",
    "Orange Juice",
    "Apple Juice",
    "Mango Juice",
    "Coconut Water",
    "Hot Chocolate",
    "Iced Tea",
    "Cold Coffee",
    "Masala Chai",
    "Lassi",
    "Red Bull",
    "Sugarcane Juice",
    "Watermelon Juice",
    "Green Tea",
    "Filter Coffee",
    "Strawberry Shake",
    "Mango Lassi",
    "Soft Drink",
    "Energy Drink",
    "Milk",
    "Pepsi",
    "Butter Milk"
  ],



  /* =====================================
     SPORTS
  ===================================== */

  Sports: [
    "Football",
    "Volleyball",
    "Swimming",
    "Cycling",
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
    "J C B",
    "Tractor",
    "Scooter",
    "Fire Truck",
    "Rickshaw",
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
    "Zoo",
    "Cemetery",
    "Shopping Mall",
    "Subway Station",
    "Art Gallery",
    "Mountain Cabin",
    "Harbor",
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
    "Pilot",
    "Electrician",
    "Forensic Scientist",
    "Film Director",
    "Game Developer",
  ],


  /* =====================================
     NATURE
  ===================================== */

  Nature: [
    "Thunderstorm",
    "Rainbow",
    "Waterfall",
    "Earthquake",
    "Sunflower",
    "Bamboo",
    "Desert",
    "Ocean",
  ],


  /* =====================================
     CLOTHING
  ===================================== */

  Clothing: [
    "Leather Jacket",
    "Hoodie",
    "Sunglasses",
    "Raincoat",
    "Blazer",
    "Gloves",
    "Sandals",
    "Boots",
    "Baggy Jeans",
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
    "Lego",
    "Water Gun",
    "Barbie",
    "Kitchen Set",
    "Toy Robot",
    "Toy Helicopter",
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
                  className={`category-card ${isSelected
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