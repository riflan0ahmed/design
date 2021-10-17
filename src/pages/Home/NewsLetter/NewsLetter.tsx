import { BsArrowRight } from "react-icons/bs";

const NewsLetter = () => {
  return (
    <div className="grid w-5/6 max-w-screen-lg grid-cols-1 gap-5 mx-auto my-24 sm:5/6 sm:grid-cols-1 md:5/6 md:grid-cols-1 lg:4/5 lg:grid-cols-2">
      <div className="col-span-1 my-auto">
        <h2 className="text-4xl font-normal text-center text-gray-700">
          Subscribe Our NewsLetter!!
        </h2>
      </div>
      <div
        className="grid w-full grid-cols-12 col-span-1"
        style={{
          boxShadow:
            "rgb(0 0 0 / 2%) 0px 4px 20px 0px, rgb(0 0 0 / 20%) 0px 3px 30px 0px",
          borderBottomRightRadius: "35px",
        }}
      >
        <div className="col-span-9 my-auto sm:col-span-10">
          <input
            className="w-full p-3 placeholder-gray-500 border border-transparent lg:p-5 focus:outline-none"
            placeholder="Your Email address"
          />
        </div>
        <button className="col-span-3 pr-4 my-auto sm:col-span-2 lg:pr-5">
          <BsArrowRight className="mx-auto text-blue-600" size="35" />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
