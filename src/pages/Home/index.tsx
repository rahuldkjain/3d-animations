import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <div className="container">
      <div>
        3D animations by
        <a href="https://rahuldkjain.github.io" target="_blank">
          &nbsp;rahuldkjain
        </a>
      </div>
      <ul>
        <li>
          <Link to="/digital-clock">digital clock using three.js</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
