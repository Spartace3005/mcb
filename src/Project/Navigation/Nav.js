import './Nav.scss';
import {
    NavLink
  } from "react-router-dom";
const Nav = () => {

    return(
        <div className="topnav">
          <NavLink  exact to="/" >Home</NavLink>
          <NavLink to="/countdown">Clock</NavLink>
          <NavLink to="/fakePomodoro">Fake Pomodoro</NavLink>
          <NavLink to="/Pomodoro">Pomodoro</NavLink>
          
        </div>
    )
};

export default Nav;

