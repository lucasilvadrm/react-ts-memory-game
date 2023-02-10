import "./styles.css";

export interface CardProps {
  id: string;
  flipped?: boolean;
  back: string;
  handleClick?: (id: string) => void;
}

const Card = ({ flipped = false, back, handleClick, id }: CardProps) => {
  const cardContentClassNames = ["card__content"];
  flipped && cardContentClassNames.push("card__content--flipped");

  const handleClickFn = () => {
    if (handleClick) {
      handleClick(id);
    }
  };

  return (
    <div className="card" onClick={handleClickFn}>
      <div className={cardContentClassNames.join(" ")}>
        <div className="card__face card__face--front">?</div>
        <div className="card__face card__face--back">{back}</div>
      </div>
    </div>
  );
};

export default Card;
