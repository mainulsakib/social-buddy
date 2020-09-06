import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Header from './Component/Header/Header';
import Home from './Component/Home/Home';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './Component/NoMatch/NoMatch';
import PostDetail from './Component/PostDetail/PostDetail';


function App() {
 return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path="/post/:postId">
          <PostDetail></PostDetail>
        </Route>
        <Route exact path="/">
        <Home />
      </Route>
      <Route path="*">
            <NoMatch />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
