import React, {Component} from 'react';

class GetUser extends Component{
//Wrap things that you want to have the functionality of this component.
//This would norm. have an Ajax call to get the user and then pass that
//data down using context.
  getChildContext () {
    return {
      greeting:"Hello from context!",
      loadUserFromServer: this.loadUserFromServer
    }
  }

  loadUserFromServer = () => {user:"a@a.com"}

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

GetUser.childContextTypes={
  greeting: React.PropTypes.string,
  loadUserFromServer: React.PropTypes.func
}

export default GetUser;
