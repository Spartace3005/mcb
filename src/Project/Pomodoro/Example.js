// import Setting from "./Setting";
// import { BsFillPlayFill, BsPauseFill, BsStopFill } from "react-icons/bs";
// import Time from "./Time";

// const FakePomodoro = () => {
//   const [minutes, setMinutes] = useState(0);
//   const [seconds, setSeconds] = useState(0);
//   const [running, setRunning] = useState(false);
//   const [breaktime, setBreaktime] = useState(0);
//   const [studytime, setStudytime] = useState(0);
//   const [timelabel,setTimelable] = useState("Study")

//   const increaseBreak = () => {
//     if (breaktime < 45 && !running) {
//       setBreaktime(breaktime + 1);
//       setMinutes(breaktime + 1);
//     }
//   };
//   const decreaseBreak = () => {
//     if (breaktime > 0 && !running) {
//       setBreaktime(breaktime - 1);
//       setMinutes(breaktime - 1);
//     }
//   };
//   const increaseStudy = () => {
//     if (studytime < 45 && !running) {
//       setStudytime(studytime + 1);
//       setSeconds((studytime + 1) * 60);
//     }
//   };
//   const decreaseStudy = () => {
//     if (studytime > 0 && !running) {
//       setStudytime(studytime - 1);
//       setSeconds((studytime - 1) * 60);
//     }
//   };

//   const labelControl = () => {
//     if(seconds === 0 && minutes === 0){

//     }
//   }

//   const startCount = () => {
//     if (minutes !== 0 || seconds !== 0) {
//       setRunning(true);
//     } else {
//       alert("ADD TIME");
//     }
//   };
//   const pauseCount = () => {
//     setRunning(false);
//   };
//   const stopCount = () => {
//     setRunning(false);
//     setMinutes(0);
//     setSeconds(0);
//     setBreaktime(0);
//     setStudytime(0);
//     setTimelable("Study");
//   };

//   useEffect(() => {
//     let interval;
//     if (running) {
//       interval = setInterval(() => {
//         console.log(minutes,seconds)
//         if (seconds > 0) {
//           setSeconds((seconds) => seconds - 1);
//         } else if (minutes > 0) {
//           setMinutes((minutes) => minutes - 1);
//           setSeconds(59);
//         }
//       }, 1000);
//     }
//     return () => clearInterval(interval);
//   }, [seconds, minutes, running]);

//   return (
//     <div className="pomodoro-clock">
//       <div className="header">
//         <h1>Pomodoro Clock</h1>
//       </div>
//       <div>
//         <Setting
//           increaseBreak={increaseBreak}
//           decreaseBreak={decreaseBreak}
//           increaseStudy={increaseStudy}
//           decreaseStudy={decreaseStudy}
//           running={running}
//           breaktime={breaktime}
//           studytime={studytime}
//         />
//       </div>
//       <div>
//         <Time minutes={minutes} seconds={seconds} />
//       </div>
    //   <div className="Control">
    //     {running === false && (
    //       <button className="btn btn-accept btn-lg" onClick={startCount}>
    //         <BsFillPlayFill />
    //       </button>
    //     )}
    //     {running === true && (
    //       <button className="btn btn-warning btn-lg" onClick={pauseCount}>
    //         <BsPauseFill />
    //       </button>
    //     )}
    //     {
    //       <button className="btn btn-danger btn-lg" onClick={stopCount}>
    //         <BsStopFill />
    //       </button>
    //     }
    //   </div>
    // </div>
//   );
// };
// export default FakePomodoro;