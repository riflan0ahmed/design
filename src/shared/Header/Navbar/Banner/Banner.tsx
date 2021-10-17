import Pagination from "../../../Pagination/Pagination";

const Banner = () => {
  return (
    <div className="flex flex-col w-5/6 h-full max-w-screen-lg mx-auto lg:4/5">
      <p className="flex items-center justify-center mt-24 text-white">
        Portfolio
      </p>
      <span className="flex items-center justify-center mt-5">
        <h1 className="pb-6 text-6xl font-medium text-center text-white border-b-2">
          About Us
        </h1>
      </span>
      <span className="flex justify-center my-10 mt-auto text-white">
        <Pagination />
      </span>
    </div>
  );
};

export default Banner;
