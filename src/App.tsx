import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DigitalClock from "./pages/DigitalClock";
import Home from "./pages/Home";

function App() {
  const setDeviceSize = () => {
    if (window?.innerHeight) {
      let vh = window.innerHeight;
      document.documentElement.style.setProperty("--100vh", `${vh}px`);
    }
  };
  useEffect(() => {
    setDeviceSize();
    window.addEventListener("resize", () => {
      setDeviceSize();
    });
    return () => {
      window?.removeEventListener("resize", () => {});
    };
  }, []);
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
