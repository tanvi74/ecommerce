import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import LoginPage from "./components/LogInForm/LogInForm";
import SignupPage from "./components/SignUpForm/SignUpForm";
import CategorySelect from './components/CategorySelect'
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route path="/" exact>
            <h1>Home</h1>
          </Route>
          <Route path="/login" component={LoginPage } />
          <Route path="/signup" component={SignupPage} />
          <Route path="/CategorySelect" component={CategorySelect} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
