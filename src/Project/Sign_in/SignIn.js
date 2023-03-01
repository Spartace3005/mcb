import {useState } from "react";
import ThingsTodo from "./ThingsTodo";

const Signin = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("0");
  const [show, setShow] = useState(true);

  const clickBtn = () => {
    let object = {
      name: name,
      age: age,
    };
    let list = localStorage.getItem("list");
    if (list) {
      let arr = JSON.parse(list);
      arr.push(object);
      localStorage.setItem("list", JSON.stringify(arr));
    } else {
      localStorage.setItem("list", JSON.stringify([object]));
    }

    setName("");
    setAge(0);
  };
  const hideShow = () => {
    setShow(!show);
  };

  return (
    <div>
      {show === true && (
        <fieldset>
          <div>Sign In</div>
          <div className="input-signin">
            <label>Name:</label>
            <input
              value={name}
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="input-signin">
            <label>Age:</label>
            <input
              value={age}
              type="number"
              min={14}
              onChange={(event) => setAge(event.target.value)}
            />
          </div>
          <div>
            <button className="btn" onClick={() => clickBtn()}>
              Access
            </button>
          </div>
        </fieldset>
      )}
      {show === true ? (
        <button
          className="btn"
          onClick={() => hideShow()}
          style={{ textAlign: "center" }}
        >
          Next Step
        </button>
      ) : (
        <button
          className="btn"
          onClick={() => hideShow()}
          style={{ textAlign: "center" }}
        >
          Go Back
        </button>
      )}
      <div>
        {show === false && (
          <div>
            <ThingsTodo />
          </div>
        )}
      </div>
      <div>
        {/* <API apilist={apilist} /> */}
      </div>
    </div>
  );
};
export default Signin;
