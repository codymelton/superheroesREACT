import React from "react";
import { Link } from 'react-router';

const HeroList = props => (
  <div>
    <h1>The Hero is...</h1>
    {props.heroes.map((item, index) => (
      <div>
        <ul key={index}>
          <li> <h3>{item.name}</h3> </li>
          <li> <img src={item.img} /> </li>
          <li> Universe: {item.universe} </li>
          <li> Super Powers: {item.superPower} </li>
        </ul>
        <Link className="btn btn-warning" to={`/heroes/edit/${item._id}`}>Edit</Link>
      </div>
    ))}
  </div>
);

export default HeroList;
