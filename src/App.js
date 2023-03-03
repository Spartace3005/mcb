import "./App.scss";
import Nav from "./Project/Navigation/Nav";
import Home from "./Project/Sign_in/Home";
import Clock from "./Project/Clock/Clock";
import FakePomodoro from "./Project/FakePomodoro/FakePomodoro";
import Pomodoro from "./Project/Pomodoro/Pomodoro";
import "./Project/Navigation/Nav.scss";
import { SettingProvider } from "./Project/Pomodoro/settingProvider";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//JSX
// function App() {
const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/countdown">
          <Clock />
        </Route>
        <Route path="/fakePomodoro">
          <FakePomodoro />
        </Route>
        <Route path="/Pomodoro">
          <Pomodoro />
        </Route>
        <Route path="/settingClock">
          <SettingProvider />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
