
const Time = (props) => {
    const {secondleft,timelabel} = props
    let minutes = Math.floor(secondleft / 60);
    if(minutes < 10) minutes = "0" + minutes;

    let seconds = secondleft - 60 * minutes;
    if(seconds < 10) seconds = "0" + seconds
    return(
        <div className="Time">
            <label>{timelabel}</label>
            <div className="number">
                <p>{minutes}</p>
                <small>Minutes</small>
            </div>
            <div className="number">
                :
            </div>
            <div className="number">
                <p>{seconds}</p>
                <small>Seconds</small>
            </div>
        </div>
    )
}


export default Time;