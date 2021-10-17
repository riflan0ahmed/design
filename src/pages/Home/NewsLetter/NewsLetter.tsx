import { BsArrowRight } from "react-icons/bs";

const NewsLetter = () => {
  return (
    <div className="my-24  max-w-screen-lg mx-auto gap-5 grid grid-cols-1 w-5/6 sm:4/5 sm:grid-cols-1 md:5/6 md:grid-cols-1 lg:4/5 lg:grid-cols-2">
      <div className="col-span-1 my-auto">
        <h2 className="text-gray-700 font-normal text-4xl text-center">
          Subscribe Our NewsLetter!!
        </h2>
      </div>
      <div
        className="col-span-1 grid grid-cols-12 w-full"
        style={{
          boxShadow:
            "rgb(0 0 0 / 2%) 0px 4px 20px 0px, rgb(0 0 0 / 20%) 0px 3px 30px 0px",
          borderBottomRightRadius: "35px",
        }}
      >
        <div className="col-span-10">
          <input
            className=" w-full p-5 border border-transparent focus:outline-none placeholder-gray-500"
            placeholder="Your Email address"
          />
        </div>
        <button className="col-span-2 pr-5 my-auto">
          <BsArrowRight className="text-blue-600 mx-auto" size="35" />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
