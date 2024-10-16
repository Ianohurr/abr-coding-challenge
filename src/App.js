import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./NavBar";
import { FishPage } from "./FishPage";
import { HomePage } from "./Home";
import { createFishMap } from "./helpers";
function App() {
  const [fishes, setFishes] = useState(null);
  const [navOptions, setNavOptions] = useState(null);
  const [currentRegion, setCurrentRegion] = useState(null);
  const [fishMap, setFishMap] = useState(null);
  useEffect(() => {
    async function fetchFishes() {
      const response = await fetch(
        "http://localhost:5001/gofish?apikey=abrradiology"
      );
      const fishes = await response.json();
      setFishes(fishes);
      let navOptions = ["All"];
      let fishMap = createFishMap(fishes);
      setFishMap(fishMap);
      for (let region of Object.keys(fishMap)) {
        if (!navOptions.includes(region)) {
          navOptions.push(region);
        }
      }
      setNavOptions(navOptions);
    }
    fetchFishes();
  }, []);

  if (!fishes) {
    return <h1>Sending our fishermen out.....</h1>;
  }
  return (
    <Router>
      <div className="App">
        <NavBar navLinks={navOptions} />
        <Routes>
          <Route path="/" element={<HomePage fishMap={fishMap} />} />
          <Route path="/All" element={<HomePage fishMap={fishMap} />} />
          <Route path="/:fish" element={<FishPage fishMap={fishMap} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
