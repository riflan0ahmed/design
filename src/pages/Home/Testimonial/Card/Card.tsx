import { ITestimonial } from "../../../../interface/testimonial.interface";
import style from "./card.module.scss";

const Card = (props: { data: ITestimonial }) => {
  return (
    <div className={style.container}>
      <span className={style.header}>
        <h3 className={style.name}>{props.data.name}</h3>
        <p className={style.role}>({props.data.role})</p>
      </span>

      <div className={`${props.data.color} ${style.body}`}>
        <span className={style.heading}>{props.data.heading}</span>
        <p className={style.description}>{props.data.description}</p>
        <div className={style.circle}></div>
      </div>
    </div>
  );
};

export default Card;
