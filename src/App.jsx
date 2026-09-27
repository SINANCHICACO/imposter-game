import { useEffect, useState } from "react";

import Home from "./pages/Home";
import HowToPlay from "./pages/HowToPlay";

function App() {
  const [page, setPage] = useState(
    window.location.hash === "#how-to-play"
      ? "how"
      : "home"
  );

  useEffect(() => {
    const handleHashChange = () => {
      setPage(
        window.location.hash === "#how-to-play"
          ? "how"
          : "home"
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

  if (page === "how") {
    return <HowToPlay />;
  }

  return <Home />;
}

export default App;