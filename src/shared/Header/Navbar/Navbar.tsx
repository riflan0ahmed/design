import Social from "../Social/Social";
import Desktop from "./Destop/Desktop";
import Mobile from "./Mobile/Mobile";

const Navbar = () => {
  return (
    <>
      <div className="w-4/5 mx-auto">
        <Social />
        <Desktop />
      </div>
      <Mobile />
    </>
  );
};

export default Navbar;
