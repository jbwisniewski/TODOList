import React from "react";
import ButtonPanel from "./buttonPanel";

export default function Task({ task, onDone, onFail, onReset, onDelete }) {
  return (
    <div className="task">
      <div className="task_txt">
        <h2 className="task_title">{task.name}</h2>
        <p className="task_description">{task.description}</p>
      </div>
      <div className="task_btns">
        <ButtonPanel
          id={task.id}
          onDone={onDone}
          onFail={onFail}
          onReset={onReset}
          onDelete={onDelete}
        />
      </div>
    </div>
  );
}
