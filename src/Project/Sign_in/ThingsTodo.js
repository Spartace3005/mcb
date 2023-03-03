import React, { useState } from "react";
import _ from "lodash";
// import Delete from "./Delete";
const ThingsTodo = () => {
  const [toDo, setToDo] = useState("");
  const [listTodo, setListToDo] = useState([]);
  // const [idTodo,setIdTodo] = useState(0)

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const handleClickBtn = () => {
    if (!toDo) {
      alert("This is empty");
      return;
    }
    let toDoId = random(4, 100);
    let toDoItem = {
      id: `${toDoId} `,
      // id:`${setIdTodo(idTodo+1)}`,
      name: toDo,
    };
    let currentTodoList = _.clone(listTodo);
    currentTodoList.push(toDoItem);
    setListToDo(currentTodoList);
    setToDo("");
  };
  const handleDelete = (id) => {
    alert(id);
    let currentTodoList = _.clone(listTodo);
    currentTodoList = currentTodoList.filter((item) => item.id !== id);
    setListToDo(currentTodoList);
  };

  return (
    <div className="home-header content-right">
      <div className="content-right">
        <div>
          <label> Name </label>
          <input
            value={toDo}
            type="text"
            onChange={(event) => setToDo(event.target.value)}
          />
          <button type="submit" onClick={() => handleClickBtn()}>
            SUBMIT
          </button>
        </div>
        <br />
        <div className="title">List thing to do:</div>
        {listTodo.map((item, index) => {
          // console.log("check item:", item,index)
          return (
            <ul key={item.id}>
              <li className="thing">
                {item.id}.{item.name}
                &nbsp; &nbsp;{" "}
                <span onClick={() => handleDelete(item.id)}>x</span>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default ThingsTodo;
