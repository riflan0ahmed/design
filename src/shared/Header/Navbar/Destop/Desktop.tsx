import { BrowserRouter as Router, Link } from "react-router-dom";
import style from "./desktop.module.scss";

const Desktop = () => {
  return (
    <div>
      <div className={style.container}>
        <Router>
          <div className={style.left}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Services</Link>
              </li>
              <li>
                <Link to="/">Portfolio</Link>
              </li>
              <li>
                <Link to="/">News</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className={style.right}>
            <button className="w-40 px-3 py-2 font-medium text-white bg-yellow-500 rounded-md cursor-pointer hover:bg-yellow-600">
              Apply Now
            </button>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default Desktop;
