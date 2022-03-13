import { ITestimonial } from "../../../interface/testimonial.interface";
import Desktop from "./Desktop/Desktop";
import Mobile from "./Mobile/Mobile";
import classes from "./testimonial.module.scss";

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

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2 className={classes.heading01}>Words From Customer</h2>
        <h3 className={classes.heading02}>Testimonial</h3>
        <span className={classes.line}></span>
      </div>
      <div className={classes.body}>
        <div className="hidden sm:block">
          <Desktop data={data} />
        </div>
        <div className="sm:hidden">
          <Mobile data={data} />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
