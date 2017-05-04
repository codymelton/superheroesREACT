import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './index.css';
import App from "./App"
import Home from './HomeContainer'
import HeroesContainer from './Heroes/HeroesContainer';
import PostHeroContainer from './Heroes/PostHeroContainer';
import EditHeroContainer from './Heroes/EditHeroContainer';
require('bootstrap/dist/css/bootstrap.css')

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/heroes" component={HeroesContainer}/>
      <Route path="/heroes/post" component={PostHeroContainer}/>
      <Route path="/heroes/edit/:heroId" component={EditHeroContainer}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
