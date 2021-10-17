import Footer from "../../shared/Footer/Footer";
import Header from "../../shared/Header/Header";
import CardList from "./CardList/CardList";
import NewsLetter from "./NewsLetter/NewsLetter";
import BusinessLoan from "./BusinessLoan/BusinessLoan";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <CardList />
      <Testimonial />
      <BusinessLoan />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
