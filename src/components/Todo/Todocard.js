import React, { useState, useEffect } from "react";
import Todoitem from "./Todoitem";
import "../../static/css/Todo.css";
import { connect } from "react-redux";
import { addItem } from "../redux/Todo/action-creator/todo-actionCreators";
import T from "materialize-css/dist/js/materialize.min.js";

const Todocard = (props) => {
  const [todoinputfield, setTodoinputfield] = useState("");

  const inputHandler = (e) => {
    setTodoinputfield(e.target.value);
  };

  const addItem = () => {
    console.log("todoinput", todoinputfield);
    props.additemtostore(todoinputfield);
  };

  useEffect(() => {
    var elems = document.querySelectorAll(".tooltipped");
    T.Tooltip.init(elems, { outDuration: 0 });
  }, []);

  return (
    <div className="todo-container hoverable ">
      <input
        placeholder="Enter task"
        onChange={inputHandler}
        value={todoinputfield}
        className="todo-input"
        name="todo-input"
      ></input>
      <button
        onClick={addItem}
        className="tooltipped"
        data-position="top"
        data-tooltip="click item to toggle/doubleclick to cancel"
      >
        add
      </button>

      {props.todolist.map((t, index) => (
        <Todoitem item={t} key={index} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todolist: state.todoReducer.todolist,
});

const mapDispatchToProps = (dispatch) => ({
  additemtostore: (payload) => dispatch(addItem(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todocard);
