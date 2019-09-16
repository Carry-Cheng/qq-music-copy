import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// 子模块
import Home from './pages/home/Home'
import Lucky from './pages/lucky/Lucky'
const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/lucky" component={Lucky} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
