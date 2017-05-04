import React, { Component } from 'react';
// Use this ID to get info from the server
class EditHeroContainer extends Component{
  render(){
    return(
      <div>
        <h3>{ this.props.params.heroId }</h3>
      </div>
    )
  }
}

export default EditHeroContainer;
