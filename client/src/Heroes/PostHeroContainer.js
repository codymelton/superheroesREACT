import React, { Component } from 'react';
import PostHeroForm from './PostHeroForm';
import $ from 'jquery';
import { browserHistory } from "react-router";

class PostHeroContainer extends Component {
  state = {
    name: undefined,
    universe: undefined,
    superpower: undefined,
    evil: undefined,
    rank: undefined,
    img: undefined,
  }


  handleSubmit = this.handleSubmit.bind(this) //binds the handleSubmit

  handleSubmit(event){
    event.preventDefault()

    //makes
    const hero={
      name: this.state.name,
      universe: this.state.universe,
      superpower: this.state.superpower,
      evil: this.state.evil,
      rank: this.state.rank,
      img: this.state.img,
    }
    console.log("Pre ajax", hero);
    $.ajax({
      url: "/api/superheroes",
      method: "POST",
      data: hero
    }).done((response) => {
      browserHistory.push("/heroes")
    })

  }

  updateName=(event) => this.setState({
    name: event.target.value
  })

  updateUniverse=(event) => this.setState({
    universe: event.target.value
  })

  updateSuperPower=(event) => this.setState({
    superpower: event.target.value
  })

  updateEvil=(event) => this.setState({
    evil: event.target.value
  })

  updateRank=(event) => this.setState({
    rank: event.target.value
  })

  updateImg=(event) => this.setState({
    img: event.target.value
  })

  render() {
    return(
      <div>
        <PostHeroForm handleSubmit={this.handleSubmit}
                      updateName={this.updateName}
                      updateUniverse={this.updateUniverse}
                      updateSuperPower={this.updateSuperPower}
                      updateEvil={this.updateEvil}
                      updateRank={this.updateRank}
                      updateImg={this.updateImg}/>
      </div>
    )
  }
}

export default PostHeroContainer;
