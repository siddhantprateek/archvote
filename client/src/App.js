import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import { Route, Switch } from 'react-router-dom';
import Join from './pages/join/join.pages';
import Contact from './pages/contact/contact.pages';
import Home from './pages/home/home.pages';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header/>
        {/* <BadgeList/> */}


        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/join" component={Join} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        {/* <h1>Hey</h1> */}
      </div>
    );
  }
}

export default App;