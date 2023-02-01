import React from "react";

export default function Card(props,key) {
  console.log(props)
  let badgeText;
  if (props.openSpots === 0) badgeText = "SOLD OUT";
  else if (props.location === "Online") badgeText = "ONLINE";
  console.log(badgeText);
  return (
    <div className="Card">
      {badgeText && <div className="CardBadge">{badgeText}</div>}
      <img src={`./images/${props.coverImg}`} className="CardImage" />
      <div className="CardStats">
        <img src="./images/Star.png" className="CardStar" />
        <span>{props.stats.rating} </span>
        <span className="Gray"> ({props.stats.reviewCount}) . </span>
        <span className="Gray">{props.location}</span>
      </div>
      <p className="CardTitle">{props.title}</p>
      <p className="CardPrice">
        <span className="Bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}