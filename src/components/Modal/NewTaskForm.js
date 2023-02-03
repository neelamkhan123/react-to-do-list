import React, { useState } from "react";
import Modal from "./Modal";

import classes from "./NewTaskForm.module.css";

const NewTaskForm = (props) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask({
      name: task,
      dueDate: date,
      id: Date.now(),
    });
    setTask("");
    setDate("");
    props.onCloseForm();
  };

  return (
    <Modal onClick={props.onCloseForm}>
      <h1 className={classes.header}>New Task Form</h1>
      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes["new-task"]}>
          <label htmlFor="task">Task</label>
          <input
            value={task}
            onInput={(e) => setTask(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Enter task here..."
            type="text"
            id="task"
          />
        </div>
        <div className={classes.date}>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            value={date}
            onInput={(e) => setDate(e.target.value)}
            id="date"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className={`${classes["add-new-task"]} ${classes.btn}`}
          >
            Add new task
          </button>
          <button
            className={`${classes.exit} ${classes.btn}`}
            onClick={props.onCloseForm}
          >
            Exit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default NewTaskForm;
