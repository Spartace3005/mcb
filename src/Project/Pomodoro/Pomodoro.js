import { useContext } from "react";
import { SettingProvider } from "./settingProvider";
import "./Pomodoro.scss";
import Time from "./Time";
import { BsFillPlayFill, BsPauseFill, BsStopFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Setting from "./setting";


const Pomodoro = () => {
  const settingValue = useContext(SettingProvider);

  return (
    <div className="pomodoro-clock">
      <div>
        <NavLink to="/settingClock">
          <AiFillSetting />

          <Setting/>
        </NavLink>
      </div>
      <div className="header">
        <h1>Pomodoro Clock</h1>
      </div>
      {/* <div>
        <Time secondleft={settingValue.secondleft} timelabel={settingValue.timelabel} />
      </div> */}
      {/* <div className="Control">
        {settingValue.running === false && (
          <button className="btn btn-accept btn-lg" onClick={settingValue.startpauseCount}>
            <BsFillPlayFill />
          </button>
        )}
        {settingValue.running === true && (
          <button className="btn btn-warning btn-lg" onClick={settingValue.startpauseCount}>
            <BsPauseFill />
          </button>
        )}
        {
          <button className="btn btn-danger btn-lg" onClick={settingValue.stopCount}>
            <BsStopFill />
          </button>
        }
      </div> */}
    </div>
  );
};

export default Pomodoro;
