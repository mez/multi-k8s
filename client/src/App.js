import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">

        <div>
          <Route exact path="/" component={Fib} />
        </div>
      </div>
    </Router>
  );
}

export default App;
