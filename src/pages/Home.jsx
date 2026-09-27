import "./Home.css";
import imposterCharacter from "../assets/imposter-character.png";

function Home() {
    return (
        <main className="home-page">

            {/* ================= BACKGROUND EFFECTS ================= */}

            <div className="home-glow home-glow-one"></div>
            <div className="home-glow home-glow-two"></div>


            {/* ================= HEADER ================= */}

            <header className="home-header">

                <div className="home-logo">
                    <span className="logo-icon">?</span>
                    <span className="logo-name">IMPOSTER</span>
                </div>

            </header>


            {/* ================= HERO ================= */}

            <section className="home-hero">


                {/* ================= TEXT CONTENT ================= */}

                <div className="home-content">

                    {/* Eyebrow */}

                    <div className="home-eyebrow">
                        <span className="eyebrow-dot"></span>
                        THE GAME OF DECEPTION
                    </div>


                    {/* Main Heading */}

                    <h1 className="home-title">
                        LET'S FIND
                        <span>THE IMPOSTER.</span>
                    </h1>


                    {/* Buttons */}

                    <div className="home-actions">

                        <button className="play-button">
                            <span>PLAY GAME</span>
                            <span className="play-arrow">→</span>
                        </button>

                        <button
                            className="how-button"
                            onClick={() => {
                                window.location.hash = "how-to-play";
                            }}
                        >
                            HOW TO PLAY
                        </button>

                    </div>

                </div>


                {/* ================= CHARACTER ================= */}

                <div className="home-character">

                    {/* Character Glow */}

                    <div className="character-glow"></div>


                    {/* Outer Ring */}

                    <div className="character-ring character-ring-outer"></div>


                    {/* Inner Ring */}

                    <div className="character-ring character-ring-inner"></div>


                    {/* Character Image */}

                    <img
                        src={imposterCharacter}
                        alt="Imposter character"
                        className="character-image"
                    />

                </div>

            </section>

        </main>
    );
}

export default Home;