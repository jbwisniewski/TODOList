import React, { useState } from "react";
import Task from "../task/task";

// console.log('ongoing:', onGoingTasks)
// console.log('failed:', failedTasks)
// console.log('done:', doneTasks)
export default function Todolist({ tasks }) {
  const [items, setItems] = useState(tasks);

  let onGoingTasks = items.filter((el) => {
    return el.state === "ongoing";
  });

  let doneTasks = items.filter((el) => {
    return el.state === "done";
  });

  let failedTasks = items.filter((el) => {
    return el.state === "fail";
  });

  const handleDone = (id) => {
    let newItems = [...items];
    newItems.forEach((item) => {
      if (item.id === id) {
        item.state = "done";
      }
    });
    setItems(newItems);
  };
  const handleReset = (id) => {
    let newItems = [...items];
    newItems.forEach((item) => {
      if (item.id === id) {
        item.state = "ongoing";
      }
    });
    setItems(newItems);
  };
  const handleFail = (id) => {
    let newItems = [...items];
    newItems.forEach((item) => {
      if (item.id === id) {
        item.state = "fail";
      }
    });
    setItems(newItems);
  };
  const handleDelete = (id) => {
    let newItems = [...items];
    newItems.forEach((item) => {
      if (item.id === id) {
        item.state = "removed";
      }
    });
    setItems(newItems);
  };

  return (
    <>
      <div className="todolist failed">
        <h2 className="todolist_title">Failed tasks</h2>
        <ul>
          {failedTasks.map((data, id) => {
            return (
              <li key={id}>
                <Task
                  task={data}
                  onDone={handleDone}
                  onFail={handleFail}
                  onReset={handleReset}
                  onDelete={handleDelete}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="todolist ongoing">
        <h2 className="todolist_title">Ongoing tasks</h2>
        <ul>
          {onGoingTasks.map((data, id) => {
            return (
              <li key={id}>
                <Task
                  task={data}
                  onDone={handleDone}
                  onFail={handleFail}
                  onReset={handleReset}
                  onDelete={handleDelete}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="todolist done">
        <h2 className="todolist_title">Done tasks</h2>
        <ul>
          {doneTasks.map((data, id) => {
            return (
              <li key={id}>
                <Task
                  task={data}
                  onDone={handleDone}
                  onFail={handleFail}
                  onReset={handleReset}
                  onDelete={handleDelete}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
