import React from "react";
import "../../static/css/Todo.css";
import { connect } from "react-redux";
import {
  deleteItem,
  markItem,
} from "../redux/Todo/action-creator/todo-actionCreators";



const Todoitem = (props) => {
  const deleteHandler = (id) => {
    props.deleteitemfromstore(id);
  };
  const togglehandler = (id) => {
    props.markIteminstore(id);
  };


  return (
    <ul className="todo-list-item">
      <li
        className="list-item-li "
        onClick={() => togglehandler(props.item.id)}
        onDoubleClick={() => deleteHandler(props.item.id)}
        key={props.item.id}

      >
        {props.item.done ? (
          <div className="done">
            <i class="far fa-check-circle "></i>{" "}
            <span className="done-span"> {props.item.task}</span>
          </div>
        ) : (
          <div className="undone">
            <i class="far fa-times-circle "></i>{" "}
            <span className="undone-span"> {props.item.task}</span>
          </div>
        )}
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteitemfromstore: (payload) => dispatch(deleteItem(payload)),
  markIteminstore: (payload) => dispatch(markItem(payload)),
});

export default connect(null, mapDispatchToProps)(Todoitem);
