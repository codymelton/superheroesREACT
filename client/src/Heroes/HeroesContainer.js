import React, { Component } from 'react';
import $ from 'jquery';
import HeroList from './HeroList';

//create a () that gets heroes from DB
//call this function when comp mounts
//use this new data to update our state
//render a component that displays our data

class HeroesContainer extends Component {
  state = {
    heroes: undefined,
    text: undefined,
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

  updateText = (event) => this.setState({ text: event.target.value })

  submitNote = this.submitNote.bind(this);

  submitNote(event, _id){
    event.preventDefault();
    let note = { content: this.state.text }
    $.ajax({
      url: `/api/superheroes/note/${_id}`,
      method: "POST",
      data: note
    }).done((response)=> this.loadHeroes())
  }

  render() {
    return (
      <div className="">
        <div className="">
          {this.state.heroes
            ? <HeroList heroes={this.state.heroes}
                        updateText={this.updateText}
                        submitNote={this.submitNote} />
            : undefined}
        </div>
      </div>
    );
  }
}

export default HeroesContainer;
