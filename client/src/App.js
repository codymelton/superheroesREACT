import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import $ from "jquery";

//create a () that gets heroes from DB
//call this function when comp mounts
//use this new data to update our state
//render a component that displays our data

const DisplayList = props => (
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

class App extends Component {
  state = {
    heroes: undefined
  };

  componentDidMount = () => this.loadHeroes();

  loadHeroes() {
    $.ajax({
      url: "/api/superheroes",
      method: "GET"
    }).done(response => {
      console.log(response);
      this.setState({ heroes: response.data });
    });
  }

  render() {
    return (
      <div className="">
        <div className="">
          {this.state.heroes
            ? <DisplayList heroes={this.state.heroes} />
            : undefined}
        </div>
        <p className="">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
