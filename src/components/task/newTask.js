import React from "react";

export default function NewTask() {
  return (
    <div className="new_task">
      <form>
        <label for="taskName">Task name:</label>
        <input type="text" name="taskName" />
        <label for="taskDescription">Task description:</label>
        <textarea name="taskName" />
        <label for="taskPriority">Task priority:</label>
        <input list="taskPriority" />
        <datalist id="taskPriority">
          <option value="1" />
          <option value="2" />
          <option value="3" />
          <option value="4" />
          <option value="5" />
          <option value="6" />
          <option value="7" />
          <option value="8" />
          <option value="9" />
        </datalist>
        <label for="dateStart">Starting date:</label>
        <input type="date" name="dateStart" />
        <label for="dateEnd">Ending date:</label>
        <input type="date" name="dateEnd" />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
}
