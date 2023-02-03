import React from "react";

import classes from "./Task.module.css";

const Task = (props) => {
  return (
    <li className={classes["list-item"]}>
      <div className={classes.options}>
        <div className={classes["section-one"]}>
          <input
            type="checkbox"
            className={classes.complete}
            onClick={() => props.onCompleted(props.task.id)}
          />
          <div className={classes.task}>{props.task.name}</div>
        </div>
        <div className={classes["section-two"]}>
          <div className={classes.date}>{props.date}</div>
          <button
            className={classes.delete}
            onClick={() => props.onDelete(props.task.id)}
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </li>
  );
};

export default Task;
