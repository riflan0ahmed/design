import { BrowserRouter as Router, Link } from "react-router-dom";
import style from "./right.module.scss";

const Right = () => {
  return (
    <Router>
      <div className={style.container}>
        <h3 className={style.heading}>About</h3>
        <ul>
          <li>
            <Link to="/">How it Works</Link>
          </li>
          <li>
            <Link to="/">Guarantee</Link>
          </li>
          <li>
            <Link to="/">Security</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">Our story</Link>
          </li>
        </ul>
      </div>

      <div className={style.container}>
        <h3 className={style.heading}>Solution</h3>
        <ul>
          <li>
            <Link to="/">Car Loan</Link>
          </li>
          <li>
            <Link to="/"> Personal Loan</Link>
          </li>
          <li>
            <Link to="/"> Education Loan</Link>
          </li>
          <li>
            <Link to="/">Business Loan</Link>
          </li>
        </ul>
      </div>

      <div className={style.container}>
        <h3 className={style.heading}>Need Help?</h3>
        <ul>
          <li>
            <Link to="/"> Find a branch</Link>
          </li>
          <li>
            <Link to="/"> Contact us</Link>
          </li>
          <li>
            <Link to="/">FAQ</Link>
          </li>
          <li>
            <Link to="/"> APR</Link>
          </li>
        </ul>
      </div>

      <div className={style.container}>
        <h3 className={style.heading}>save & invest</h3>
        <ul>
          <li>
            <Link to="/"> Credit Cards</Link>
          </li>
          <li>
            <Link to="/"> Mortgages</Link>
          </li>
          <li>
            <Link to="/">Home Equity</Link>
          </li>
          <li>
            <Link to="/"> Lines of Code</Link>
          </li>
        </ul>
      </div>
    </Router>
  );
};

export default Right;
