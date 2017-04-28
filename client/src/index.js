import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './index.css';
import App from "./Apps"
import Home from './HomeContainer'
import HeroesContainer from './Heroes/HeroesContainer';
import PostHeroContainer from './Heroes/PostHeroContainer';

ReactDOM.render(
<Router history={browserHistory}>
  <Route path="/" compontent={App}>
    <IndexRoute component={Home} />
    <Route path="/heroes" component={HeroesContainer} />
    <Route path="/heroes/post" component={PostHeroContainer} />
  </Route>
</Router>,
  document.getElementById('root')
);
