import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/styles.scss";
import Invest from "./pages/Invest";
import Landing from "./pages/Landing";
import Presale from "./pages/Presale";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/presale" element={<Invest />} />
        <Route exact path="/presale-item" element={<Presale />} />
      </Routes>
    </Router>
  );
}

export default App;
