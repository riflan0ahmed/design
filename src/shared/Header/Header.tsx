import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
import background from "../../images/background.jpg";
import Social from "./Social/Social";

const Header = () => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${background})`,
        height: "610px",
      }}
    >
      <div className="flex flex-col w-full h-full">
        <Social />
        <Navbar />
        <Banner />
      </div>
    </div>
  );
};

export default Header;
