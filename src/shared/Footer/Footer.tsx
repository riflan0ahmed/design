import Left from "./Left/Left";
import Right from "./Right/Right";

const Footer = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="mx-auto max-w-screen-lg gap-5 w-5/6 grid grid-cols-1 sm:grid-cols-3 sm:w-5/6 md:w-5/6 md:grid-cols-3 lg:w-4/5 lg:grid-cols-6">
        <Left />
        <Right />
      </div>
    </div>
  );
};

export default Footer;
