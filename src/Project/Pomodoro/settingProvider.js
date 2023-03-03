import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";

const SettingContext = createContext();

const SettingProvider = ({ children }) => {
  const [breaktime, setBreaktime] = useState(0);
  const [studytime, setStudytime] = useState(0);
  const [secondleft, setSecondleft] = useState(studytime * 60);
  const [running, setRunning] = useState(false);
  const [timelabel, setTimelable] = useState("Study");

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
  const startpauseCount = () => {
    if (!running) {
      setRunning(true);
    } else {
      setRunning(false);
    }
  };
  const stopCount = () => {
    setRunning(false);
    setSecondleft(studytime * 60);
    setTimelable("Study");
  };
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        if (secondleft === 0) {
          if (timelabel === "Study") {
            setTimelable("Break");
            secondleft(breaktime * 60);
          } else if (timelabel === "Break") {
            setTimelable("Study");
            secondleft(studytime * 60);
          }
        } else {
          secondleft(secondleft - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running, secondleft, timelabel, studytime, breaktime]);
  const settingValue = {
    secondleft,
    studytime,
    breaktime,
    increaseBreak,
    decreaseBreak,
    increaseStudy,
    decreaseStudy,
    startpauseCount,
    stopCount,
  };

  return (
    <SettingContext.Provider value={settingValue}>
      {children}
    </SettingContext.Provider>
  );
};
export { SettingProvider, SettingContext };
