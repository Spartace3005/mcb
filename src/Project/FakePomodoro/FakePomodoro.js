import { React, useState } from "react";
import { useEffect } from "react";
import "./FakePomodoro.scss";
import Setting from "./Setting";
import Time from "./Time";
import { BsFillPlayFill, BsPauseFill, BsStopFill } from "react-icons/bs";

const FakePomodoro = () => {
  const [breaktime, setBreaktime] = useState(0);
  const [studytime, setStudytime] = useState(0);
  const [running, setRunning] = useState(false);
  const [secondleft, setSecondleft] = useState(studytime * 60);
  const [timelabel, setTimelable] = useState("Study");

  const increaseBreak = () => {
    if (breaktime < 15 && !running) {
      setBreaktime(breaktime + 1);
    }
  };
  const decreaseBreak = () => {
    if (breaktime > 0 && !running) {
      setBreaktime(breaktime - 1);
    }
  };
  const increaseStudy = () => {
    if (studytime < 45 && !running) {
      setStudytime(studytime + 1);
      setSecondleft((studytime + 1) * 60);
    }
  };
  const decreaseStudy = () => {
    if (studytime > 0 && !running) {
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
            setSecondleft(breaktime * 60);
          } else if (timelabel === "Break") {
            setTimelable("Study");
            setSecondleft(studytime * 60);
          }
        } else {
          setSecondleft(secondleft - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running, secondleft, timelabel, studytime, breaktime]);

  return (
    <div className="pomodoro-clock">
      <div className="header">
        <h1>Pomodoro Clock</h1>
      </div>
      <div>
        <Setting
          increaseBreak={increaseBreak}
          decreaseBreak={decreaseBreak}
          increaseStudy={increaseStudy}
          decreaseStudy={decreaseStudy}
          running={running}
          breaktime={breaktime}
          studytime={studytime}
        />
      </div>
      <div>
        <Time secondleft={secondleft} timelabel={timelabel} />
      </div>
      <div className="Control">
        {running === false && (
          <button className="btn btn-accept btn-lg" onClick={startpauseCount}>
            <BsFillPlayFill />
          </button>
        )}
        {running === true && (
          <button className="btn btn-warning btn-lg" onClick={startpauseCount}>
            <BsPauseFill />
          </button>
        )}
        {
          <button className="btn btn-danger btn-lg" onClick={stopCount}>
            <BsStopFill />
          </button>
        }
      </div>
    </div>
  );
};

export default FakePomodoro;
