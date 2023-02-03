import React, { Fragment, useEffect, useState } from "react";
import List from "./components/List/List";
import NewTaskForm from "./components/Modal/NewTaskForm";

const App = () => {
  const [formIsShown, setFormIsShown] = useState(false);
  const [tasks, setTasks] = useState(() => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(tasks));
  }, [tasks]);

  const showFormHandler = () => {
    setFormIsShown(true);
  };

  const closeFormHandler = () => {
    setFormIsShown(false);
  };

  const addTaskHandler = (task) => {
    setTasks((prevTask) => [...prevTask, task]);
  };

  const deleteTaskHandler = (id) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  };

  const completedHandler = (id) => {
    setTimeout(() => {
      setTasks((prevState) => prevState.filter((task) => task.id !== id));
    }, 1000);
  };

  return (
    <Fragment>
      {formIsShown && (
        <NewTaskForm onCloseForm={closeFormHandler} addTask={addTaskHandler} />
      )}
      <List
        onShowForm={showFormHandler}
        tasks={tasks}
        onDelete={deleteTaskHandler}
        onCompleted={completedHandler}
      />
    </Fragment>
  );
};

export default App;
