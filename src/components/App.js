import React from "react";
import Todolist from "./todolist/todolist";
// import NewTask from "./task/newTask";
import tasks from "./database/tasks";

const App = () => {
  return (
    <>
      <div className="main_container">
        <Todolist tasks={tasks} />
      </div>
      <button className="add_task">+</button>
    </>
  );
};

export default App;
