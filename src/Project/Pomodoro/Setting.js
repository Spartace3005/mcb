
const Setting = (props) => {
    const {increaseBreak, decreaseBreak, increaseStudy, decreaseStudy,breaktime,studytime} = props
    return(
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
    )
}

export default Setting