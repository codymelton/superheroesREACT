import React, { Component } from 'react';
import EditHeroForm from './EditHeroForm';
import $ from 'jquery';
// Use this ID to get info from the server

class EditHeroContainer extends Component{

  state = {
    isFetching: true,
    name: undefined,
    universe: undefined,
    superPowers: undefined,
    evil: undefined,
    rank: undefined,
    img: undefined,
    newPower: undefined
  }

  updateField = this.updateField.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

  componentDidMount = () => this.loadHeroes();

  updateField(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }

  loadHeroes() {
    $.ajax({
      url: `/api/superheroes/${this.props.params.heroId}`,
      method: "GET"
    }).done(response => {
      this.setState({ name: response.name,
                      universe: response.universe,
                      superPowers: response.superPowers,
                      evil: response.evil,
                      rank: response.rank,
                      img: response.img,
                      isFetching: false
                    });
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: this.state.name,
      universe: this.state.universe,
      evil: this.state.evil,
      rank: this.state.rank,
      img: this.state.img,
      superPowers: this.state.superPowers
    }
    $.ajax({
      url: `/api/superheroes/${this.props.params.heroId}`,
      method: 'PUT',
      data: data
    }).done(response => {
      console.log(response);
    })
  }

  updatePowers (event){
    event.preventDefault();
    const tempArray = this.state.superPowers;
    tempArray.push(this.state.newPower);
    this.setState({ superPowers : tempArray});
    this.setState({ newPower : ''});
    console.log(this.state.superPowers);
  }

  removePower (event){
    event.preventDefault();
    let tempArray = this.state.superPowers;
    tempArray = tempArray.length > 0 ? tempArray.splice(-1): tempArray;
    console.log('tempArray', tempArray);
    this.setState({ superPowers: tempArray})
    console.log(this.state.superPowers);
  }

  render(){
    return(
      <div>
        <h3>{ this.props.params.heroId }</h3>
        {!this.state.isFetching ?
          <EditHeroForm handleSubmit={this.handleSubmit}
                        updateField={this.updateField}
                        name={this.state.name}
                        universe={this.state.universe}
                        superPowers={this.state.superPowers}
                        updatePowers={(event) => this.updatePowers(event)}
                        removePower={(event) => this.removePower(event)}
                        evil={this.state.evil}
                        rank={this.state.rank}
                        img={this.state.img}
                        /> :
          <h3> Still Working... </h3>
        }
      </div>
    )
  }
}

export default EditHeroContainer;
