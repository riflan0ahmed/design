import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlusG,
} from "react-icons/fa";
import style from "./left.module.scss";

const Left = () => {
  return (
    <Router>
      <div className={style.container}>
        <div className={style.logo}>Logo</div>
        <span className={style.content}>
          © 2018 Template_mr. All rights reserved
        </span>
        <ul>
          <li>
            <Link to="/">
              <FaFacebookF size="14" className={style.icon} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaTwitter size="14" className={style.icon} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaLinkedinIn size="14" className={style.icon} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaGooglePlusG size="14" className={style.icon} />
            </Link>
          </li>
        </ul>
      </div>
    </Router>
  );
};

export default Left;
