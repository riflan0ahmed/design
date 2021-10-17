import { ICard } from "../../../interface/card.interface";
import Card from "./Card/Card";

const CardList = () => {
  const data = [
    {
      id: 1,
      name: "Business Loan",
      description:
        "Achieve all your goals and aspirations; with the right kind of help",
    },
    {
      id: 2,
      name: "Alons Loans Card",
      description:
        "Business loans are offered to all practising professionals, subject ro proof",
    },
    {
      id: 3,
      name: "Business Purpose",
      description:
        "Will I be required to share my personal information with the EMI",
    },
  ] as ICard[];

  return (
    <div className="mt-20 mb-9 gap-5 max-w-screen-lg mx-auto grid grid-cols-1 w-5/6 sm:grid-cols-2 sm:w-4/5 md:grid-cols-2 md:w-5/6 lg:grid-cols-3 lg:w-4/5">
      {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
};

export default CardList;
