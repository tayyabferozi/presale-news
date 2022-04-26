import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/styles.scss";
import Invest from "./pages/Invest";
import Landing from "./pages/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/presale" element={<Invest />} />
      </Routes>
    </Router>
  );
}

export default App;
