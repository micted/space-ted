import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Planets from './components/pages/Planets';
import Articles from './components/pages/Articles';
//import SignUp from './components/pages/SignUp';
function App() {
  return (
   <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/planets' component={Planets} />
        <Route path='/articles' component={Articles} />
      </Switch>
      </Router>
    </>
  );
}

export default App;
