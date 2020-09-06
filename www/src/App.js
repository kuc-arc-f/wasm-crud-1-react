import React , { Component } from "react";
import { HashRouter as Router, Route } from 'react-router-dom';
import Top from './component/Top';
import Test from './component/Test';

//
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={Top}/> 
            <Route path='/test' component={Test}/> 
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
