import { createContext } from "react";
import React, { useState } from "react";

const settingContext = createContext();
const SettingClock = () => {
  const [breaktime, setBreaktime] = useState(0);
  const [studytime, setStudytime] = useState(0);
  const [secondleft, setSecondleft] = useState(studytime * 60);

  const increaseBreak = () => {
    if (breaktime < 15) {
      setBreaktime(breaktime + 1);
    }
  };
  const decreaseBreak = () => {
    if (breaktime > 0) {
      setBreaktime(breaktime - 1);
    }
  };
  const increaseStudy = () => {
    if (studytime < 45) {
      setStudytime(studytime + 1);
      setSecondleft((studytime + 1) * 60);
    }
  };
  const decreaseStudy = () => {
    if (studytime > 0) {
      setStudytime(studytime - 1);
      setSecondleft((studytime - 1) * 60);
    }
  };

  return (
    <div>
      <div className="Settings">
        <div className="Section">
          <label>Break Time</label>
          <div>
            <button onClick={decreaseBreak}>-</button>
            <span>{breaktime}</span>
            <button onClick={increaseBreak}>+</button>
          </div>
        </div>
        <div className="Section">
          <label>Study Time</label>
          <div>
            <button onClick={decreaseStudy}>-</button>
            <span>{studytime}</span>
            <button onClick={increaseStudy}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SettingClock, settingContext };
