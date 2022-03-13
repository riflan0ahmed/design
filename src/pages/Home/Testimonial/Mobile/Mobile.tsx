import useEmblaCarousel from "embla-carousel-react";
import Card from "../Card/Card";
import { ITestimonial } from "interface/testimonial.interface";
import classes from "./transistionMobile.module.scss";

const Mobile = (props: { data: ITestimonial[] }) => {
  const { data } = props;

  const [emblaRef] = useEmblaCarousel({
    slidesToScroll: 1,
    skipSnaps: false,
  });

  return (
    <div className={classes.embla}>
      <div className={classes.embla__viewport} ref={emblaRef}>
        <div className={classes.embla__container}>
          {data.map((item, index) => (
            <div className={classes.embla__slide} key={index}>
              <Card data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mobile;
