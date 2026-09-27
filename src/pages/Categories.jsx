import "./Categories.css";
import backArrow from "../assets/back-arrow.png";


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


function Categories({
  selectedCategories,
  setSelectedCategories,
  goTo,
}) {


  /* =========================================
     SELECT / UNSELECT CATEGORY
  ========================================= */

  const toggleCategory = (category) => {

    if (selectedCategories.includes(category)) {

      // Remove category if already selected

      setSelectedCategories(
        selectedCategories.filter(
          (item) => item !== category
        )
      );

    } else {

      // Add category

      setSelectedCategories([
        ...selectedCategories,
        category,
      ]);

    }
  };


  return (
    <main className="categories-page">


      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="categories-glow"></div>


      {/* =========================================
          HEADER
      ========================================= */}

      <header className="categories-header">


        {/* Back Button */}

        <button
          className="categories-back"
          onClick={() => goTo("add-players")}
          aria-label="Go back"
        >

          <img
            src={backArrow}
            alt=""
          />

        </button>


        {/* Logo */}

        <button
          className="categories-logo"
          onClick={() => goTo("home")}
          aria-label="Go to home"
        >

          <span className="categories-logo-icon">
            ?
          </span>

          <span>
            IMPOSTER
          </span>

        </button>

      </header>


      {/* =========================================
          CONTENT
      ========================================= */}

      <section className="categories-content">


        {/* =========================================
            INTRO
        ========================================= */}

        <div className="categories-intro">

          <div className="categories-eyebrow">
            GAME SETUP
          </div>

          <h1>
            CHOOSE
            <span>CATEGORIES.</span>
          </h1>

          <p>
            Select one or more categories for the secret word.
          </p>

        </div>


        {/* =========================================
            SELECTION COUNT
        ========================================= */}

        <div className="categories-selection-info">

          <span>
            SELECTED
          </span>

          <strong>
            {selectedCategories.length}
          </strong>

        </div>


        {/* =========================================
            CATEGORY GRID
        ========================================= */}

        <div className="category-grid">

          {categories.map((category, index) => {

            const isSelected =
              selectedCategories.includes(category);


            return (

              <button
                key={category}
                type="button"
                className={`category-card ${
                  isSelected ? "selected" : ""
                }`}
                onClick={() => toggleCategory(category)}
              >

                <span className="category-index">
                  {String(index + 1).padStart(2, "0")}
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

          })}

        </div>


        {/* =========================================
            SELECTED CATEGORIES
        ========================================= */}

        {selectedCategories.length > 0 && (

          <div className="selected-categories">

            <div className="selected-title">
              SELECTED CATEGORIES
            </div>


            <div className="selected-list">

              {selectedCategories.map((category) => (

                <span
                  className="selected-chip"
                  key={category}
                >
                  {category}
                </span>

              ))}

            </div>

          </div>

        )}


        {/* =========================================
            BACK TO SETUP
        ========================================= */}

        <button
          className="category-back-button"
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


export default Categories;