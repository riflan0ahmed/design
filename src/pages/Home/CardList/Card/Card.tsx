import { ICard } from "../../../../interface/card.interface";
import card from "../../../../images/card.jpg";
import style from "./card.module.scss";

const Card = (props: { data: ICard }) => {
  return (
    <div className={style.container}>
      <img src={card} alt="cardPicture" />
      <div className={style.content}>
        <h2 className={style.name}>{props.data.name}</h2>
        <p className={style.description}>{props.data.description}</p>
      </div>
    </div>
  );
};

export default Card;
