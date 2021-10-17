import Left from "./Left/Left";
import Right from "./Right/Right";

const Footer = () => {
  return (
    <div className="py-24 bg-gray-900">
      <div className="grid w-5/6 max-w-screen-lg grid-cols-1 gap-5 mx-auto sm:grid-cols-3 sm:w-5/6 md:w-5/6 md:grid-cols-3 lg:w-4/5 lg:grid-cols-6">
        <Left />
        <Right />
      </div>
    </div>
  );
};

export default Footer;
