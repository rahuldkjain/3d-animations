import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DigitalClock from "./pages/DigitalClock";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/digital-clock" Component={DigitalClock} />
      </Routes>
    </Router>
  );
}

export default App;
