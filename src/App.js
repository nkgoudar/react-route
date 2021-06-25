// import logo from './logo.svg';
import "./App.css";

import Dashboard from "./components/Home/Home";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
          <Link to="/">Home</Link>
        <Switch>
          <Route  path="/">
            <Dashboard />
          </Route>
          <Route path="signup">
            <Signup />
          </Route>
          <Route path="login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
