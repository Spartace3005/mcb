import { React, useContext } from "react";
import { SettingProvider } from "./settingProvider";
import "./setting.scss";

const Setting = ({ children }) => {
  const settingValue = useContext(SettingProvider);
  return (
    <div className="Settings">
      {/* <div className="Section">
        <label>Break Time</label>
        <div>
          // <button onClick={settingValue.decreaseBreak}>-</button>
          <span>{settingValue.breaktime}</span>
          <button onClick={settingValue.increaseBreak}>+</button>
        </div>
      </div>
      <div className="Section">
        <label>Study Time</label>
        <div>
          <button onClick={settingValue.decreaseStudy}>-</button>
          <span>{settingValue.studytime}</span>
          <button onClick={settingValue.increaseStudy}>+</button>
        </div>
      </div> */}
    </div>
  );
};
export default Setting; 