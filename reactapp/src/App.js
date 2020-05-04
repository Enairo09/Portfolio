import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Components/Page/HomePage';
import Header from './Components/Navigation/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/Page/About';
import Contact from './Components/Page/Contact';
import Footer from './Components/Navigation/Footer';

function App() {
  return (

    <Router>

      <Switch>
        <div className="App">
          <Header />
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          {/* <Footer /> */}
        </div>
      </Switch>
    </Router>

  );
}

export default App;
