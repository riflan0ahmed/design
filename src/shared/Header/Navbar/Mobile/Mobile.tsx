import { useState } from "react";
import {
  FaBars,
  FaSearch,
  FaLinkedinIn,
  FaFacebookF,
  FaGooglePlusG,
  FaTwitter,
  FaInstagram,
  FaTimes,
} from "react-icons/fa";
import { BrowserRouter as Router, Link } from "react-router-dom";
import style from "./mobile.module.scss";

const Mobile = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className="col-span-6 my-auto text-white sm:col-span-8 md:col-span-10">
          Logo
        </div>
        <div className="col-span-1 ml-auto">
          <FaSearch size="30" className="text-yellow-500 cursor-pointer" />
        </div>
        <div className="col-span-1 ml-auto" onClick={handleClick}>
          {open ? (
            <FaTimes size="30" className="text-white cursor-auto" />
          ) : (
            <FaBars size="30" className="text-white cursor-auto" />
          )}
        </div>
      </div>
      {open ? (
        <>
          <Router>
            <div className={style.body}>
              <div className={style.link}>
                <div>
                  <div className="flex flex-row gap-4 my-2">
                    <span className="pt-1 font-medium text-white uppercase">
                      Call us
                    </span>
                    <span className="ml-auto text-2xl text-yellow-500">
                      029292162
                    </span>
                  </div>
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
                    <li>
                      <Link to="/">Career</Link>
                    </li>
                    <li>
                      <Link to="/">Support</Link>
                    </li>
                  </ul>
                </div>
                <div className={style.button}>
                  <button className="w-full px-3 py-1 font-medium text-white bg-yellow-500 rounded-md cursor-pointer hover:bg-yellow-600">
                    Apply Now
                  </button>
                </div>
              </div>
              <div>
                <ul>
                  <li>
                    <FaLinkedinIn size="18" className={style.icon} />
                  </li>
                  <li>
                    <FaFacebookF size="18" className={style.icon} />
                  </li>
                  <li>
                    <FaGooglePlusG size="18" className={style.icon} />
                  </li>
                  <li>
                    <FaTwitter size="18" className={style.icon} />
                  </li>
                  <li>
                    <FaInstagram size="18" className={style.icon} />
                  </li>
                </ul>
              </div>
            </div>
          </Router>
        </>
      ) : null}
    </div>
  );
};

export default Mobile;
