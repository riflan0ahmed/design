import style from "./social.module.scss";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaGooglePlusG,
  FaTwitter,
  FaInstagram,
  FaSearch,
} from "react-icons/fa";

const Social = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <ul>
          <li className="pt-1 text-white uppercase">call us</li>
          <li className="text-2xl text-yellow-500">029292162</li>
          <li className="text-white cursor-pointer">Career</li>
          <li className="text-white cursor-pointer">Support</li>
        </ul>
      </div>
      <div className={style.center}>
        <h1 className="my-auto text-xl text-white">Logo</h1>
      </div>
      <div className={style.right}>
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
        <span className="ml-10">
          <FaSearch size="18" className="text-yellow-500 cursor-pointer" />
        </span>
      </div>
    </div>
  );
};

export default Social;
