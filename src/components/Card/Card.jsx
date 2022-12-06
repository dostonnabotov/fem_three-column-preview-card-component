import Button from "../Button/Button";
import "./Card.scss";

export default function Card({ icon, title, info, color }) {
  return (
    <div className="card flow" style={{ backgroundColor: color }}>
      <img className="card__icon" src={icon} alt="" ariaHidden="true" />
      <h3 className="card__title">{title}</h3>
      <p className="card__info">{info}</p>
      <Button text="Learn more" style={{ color: color }} />
    </div>
  );
}
