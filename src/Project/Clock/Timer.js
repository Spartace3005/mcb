import React from "react";
import {BsStopwatch} from "react-icons/bs";
// import styled from "styled-components";

// const TimmerWapper = styled.div`
// margin-top:70px;
// `;
const Timer = (props) => {
    const {seconds,minutes,hours,onchangeSeconds,onchangeMinutes,onchangeHours} = props
    return(
        <div className="Timer">
            <BsStopwatch className="stop-wtach"/>
            <br/>
            <div className="d-flex flex-column">
                <label>hh</label>
                <input value={hours} onChange={onchangeHours}></input>
            </div>
            <div className="d-flex flex-column">
                <label>mm</label>
                <input value={minutes} onChange={onchangeMinutes}></input>
            </div>
            <div className="d-flex flex-column">
                <label>ss</label>
                <input value={seconds} onChange={onchangeSeconds}></input>
            </div>
        </div>
    )
}

export default Timer;