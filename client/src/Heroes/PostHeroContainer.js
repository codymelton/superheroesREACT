import React, { Component } from 'react';
import PostHeroForm from './PostHeroForm';
import $ from 'jquery';

class PostHeroContainer extends Component {
  state = {
    name: undefined,
    universe: undefined
  }

  handleSubmit = this.handleSubmit.bind(this) //binds the handleSubmit

  handleSubmit(event){
    event.preventDefault()
    console.log(
      this.state.name,
      this.state.universe,
      "Name and Universe in the state object"
    )

    //makes
    const hero={
      name: this.state.name,
      universe: this.state.universe
    }

    $.ajax({
      url: "/api/superheroes",
      mothod: "POST",
      data: hero
    }).done(response => console.log(response))

  }

  updateName=(event) => this.setState({
    name: event.target.value
  })

  updateUniverse=(event) => this.setState({
    universe: event.target.value
  })

  render() {
    return(
      <div>
        <PostHeroForm handleSubmit={this.handleSubmit}
                      updateName={this.updateName}
                      updateUniverse={this.updateUniverse}/>
      </div>
    )
  }
}

export default PostHeroContainer;
