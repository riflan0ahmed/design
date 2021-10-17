import { ITestimonial } from "../../../interface/testimonial.interface";
import Card from "./Card/Card";
import useEmblaCarousel from "embla-carousel-react";
import "../../../style/transistion.scss";
import style from "./testimonial.module.scss";

const Testimonial = () => {
  const data = [
    {
      id: 1,
      name: "Mahfiz Riad",
      role: "CEO",
      heading: "Financial health",
      description:
        "The representative helping me was absolutely fantastic. Not only did I get my loan but she also advised me that she could help me get my credit back No other financial institute",
      color: "bg-blue-600",
    },
    {
      id: 1,
      name: "Tamim anj",
      role: "CTO",
      heading: "Business Logic",
      description:
        "The representative helping me was absolutely fantastic. Not only did I get my loan but she also advised me that she could help me get my credit back No other financial institute",
      color: "bg-yellow-500",
    },
    {
      id: 2,
      name: "Mahfiz Riad",
      role: "CEO",
      heading: "Financial health",
      description:
        "The representative helping me was absolutely fantastic. Not only did I get my loan but she also advised me that she could help me get my credit back No other financial institute",
      color: "bg-blue-600",
    },
    {
      id: 3,
      name: "Mahfiz Riad",
      role: "CEO",
      heading: "Financial health",
      description:
        "The representative helping me was absolutely fantastic. Not only did I get my loan but she also advised me that she could help me get my credit back No other financial institute",
      color: "bg-yellow-500",
    },
  ] as ITestimonial[];

  const [emblaRef] = useEmblaCarousel({
    slidesToScroll: 2,
    skipSnaps: false,
  });

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h2 className={style.heading01}>Words From Customer</h2>
        <h3 className={style.heading02}>Testimonial</h3>
        <span className={style.line}></span>
      </div>
      <div className={style.body}>
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {data.map((item, index) => (
                <div className="embla__slide" key={index}>
                  <Card data={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
