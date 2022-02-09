import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import { Route, Switch } from 'react-router-dom';
import Join from './pages/join/join.pages';
import Contact from './pages/contact/contact.pages';
import Home from './pages/home/home.pages';
import Dashboard from './pages/dashboard/dashboard.pages';
import Nomatch from './pages/404_error/nomatch.pages';
import Loading from "./components/Loading/Loading.component";


import { useAuth0 } from "@auth0/auth0-react";


const App = () => {
  const { isLoading, error, isAuthenticated } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }
  
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        { isAuthenticated && <Route exact path="/dashboard" component={Dashboard} /> }
        
        <Route exact path="/join" component={Join} />
        <Route exact path="/contact" component={Contact} />
        <Route path="*" component={Nomatch} />
      </Switch>
    </div>
  );

};
export default App;