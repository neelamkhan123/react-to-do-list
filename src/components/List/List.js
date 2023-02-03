import React from "react";
import Card from "../UI/Card";
import Task from "./Task";

import classes from "./List.module.css";

const List = (props) => {
  return (
    <Card>
      <section className={classes.section}>
        <h1>Todo List</h1>
        <ul className={classes.list}>
          {props.tasks
            .sort((a, b) => b.id - a.id)
            .map((task) => (
              <Task
                key={task.id}
                task={task}
                date={task.dueDate}
                onDelete={props.onDelete}
                onCompleted={props.onCompleted}
              />
            ))}
        </ul>
        <button className={classes.add} onClick={props.onShowForm}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </section>
    </Card>
  );
};

export default List;
