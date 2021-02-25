import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {useSelector} from 'react-redux';
import "./App.css";
import MainFrame from './components/MainFrame/MainFrame';
import LoginPage from "./components/LogInForm/LogInForm";
import SignupPage from "./components/SignUpForm/SignUpForm";
function App() {
  const auth = useSelector(state => state.auth);
  return (
    <div className="App">
      {console.log(auth)}
      <Router>
        {auth.status === "success" ? 
              <Switch>
                <MainFrame />
              </Switch> : <><Route exact path="/" component={SignupPage}/>
            <Route exact path="/login" component={LoginPage}/>
            </>}
      </Router>
    </div>
  );
}

export default App;
