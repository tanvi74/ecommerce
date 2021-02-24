import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import LoginPage from "./components/LogInForm/LogInForm";
import SignupPage from "./components/SignUpForm/SignUpForm";
function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      {console.log(searchTerm)}
      <Router>
        <Header onSearchSubmit={(searchTerm) => setSearchTerm(searchTerm)} />
        <Switch>
          <Route path="/" exact>
            <Home searchTerm={searchTerm} />
          </Route>
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
