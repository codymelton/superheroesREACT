import React from "react";

const HeroList = props => (
  <div>
    <h1>The Hero is...</h1>
    {props.heroes.map((item, index) => (
      <ul key={index}>
        <li> <h3>{item.name}</h3> </li>
        <li> <img src={item.img} /> </li>
        <li> Universe: {item.universe} </li>
        <li> Super Powers: {item.superPower} </li>
      </ul>
    ))}
  </div>
);

export default HeroList;
