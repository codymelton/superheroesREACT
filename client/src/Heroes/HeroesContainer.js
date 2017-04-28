import React, { Component } from 'react';
import $ from 'jquery';
import HeroList from './HeroList';

//create a () that gets heroes from DB
//call this function when comp mounts
//use this new data to update our state
//render a component that displays our data

class HeroesContainer extends Component {
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
            ? <HeroList heroes={this.state.heroes} />
            : undefined}
        </div>
        <p className="">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default HeroesContainer;
