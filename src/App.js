import React from 'react';
import './App.css';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetail from './component/PostDetail/PostDetail';
import NoMatch from './component/NoMatch/NoMatch';
import Header from './component/Header/Header';




function App() {
  return (
    <div>
      <Header></Header>
    <Router> 
       <Switch>
            <Route path="/home"> <Home /> </Route>
            <Route path="/post/:id"> <PostDetail /> </Route>
             <Route exact path="/"> <Home /> </Route>
             <Route path="*"> <NoMatch /> </Route>
       </Switch>

    </Router>


    </div>
  );
}

export default App;
