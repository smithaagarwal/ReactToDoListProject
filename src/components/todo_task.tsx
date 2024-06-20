import { useState } from "react";
import { Task } from "../types/task.types";

export interface ToDoTaskProps {
  task: Task;
}
const ToDoTask: React.FC<ToDoTaskProps> = ({ task }) => {
  const [isChecked, setChecked] = useState<boolean>(task.isComplete);

  const handleCheckbox = (): void => {
    setChecked(!isChecked);
  };

  return (
    <>
      <tr>
        <td>{task.description}</td>
        <td>
          <input
            type="checkbox"
            id="isComplete"
            name="isComplete"
            checked={isChecked}
            onChange={handleCheckbox}
          ></input>
        </td>
        <td>
          <button>Delete</button>
        </td>
      </tr>
    </>
  );
};

export default ToDoTask;
