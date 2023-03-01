import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import { BsFillPlayFill, BsPauseFill, BsStopFill } from "react-icons/bs";

const CounterTimer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  const onchangeSeconds = (event) => {
    setSeconds(event.target.value);
  };
  const onchangeMinutes = (event) => {
    setMinutes(event.target.value);
  };
  const onchangeHours = (event) => {
    setHours(event.target.value);
  };

  const startCount = () => {
    if (hours !== 0 || minutes !== 0 || seconds !== 0) {
      setRunning(true);
    } else {
      alert("ADD TIME");
    }
  };
  const pauseCount = () => {
    setRunning(false);
  };
  const stopCount = () => {
    setRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
        } else if (minutes > 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(59);
        } else if (hours > 0) {
          setHours((hours) => hours - 1);
          setMinutes(59);
          setSeconds(59);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [seconds, minutes, hours, running]);

  return (
    <div>
      <Timer
        seconds={seconds}
        minutes={minutes}
        hours={hours}
        onchangeSeconds={onchangeSeconds}
        onchangeMinutes={onchangeMinutes}
        onchangeHours={onchangeHours}
      />
      <br />
      {running === false && (
        <button className="btn btn-accept btn-lg" onClick={startCount}>
          <BsFillPlayFill />
        </button>
      )}
      {running === true && (
        <button className="btn btn-warning btn-lg" onClick={pauseCount}>
          <BsPauseFill />
        </button>
      )}
      {
        <button className="btn btn-danger btn-lg" onClick={stopCount}>
          <BsStopFill />
        </button>
      }
    </div>
  );
};

export default CounterTimer;
