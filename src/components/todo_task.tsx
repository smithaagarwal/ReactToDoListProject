import { useState } from "react";
import { Task } from "../types/task.types";

export interface ToDoTaskProps {
  task: Task;
  onDelete: (toDeleteTask: Task) => void;
}
const ToDoTask: React.FC<ToDoTaskProps> = ({ task, onDelete }) => {
  const [isChecked, setChecked] = useState<boolean>(task.isComplete);

  const handleCheckbox = async () => {
    task.isComplete = !isChecked;
    setChecked(!isChecked);

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    };
    try {
      const url = "http://localhost:8888/tasks/" + task.id;
      const response = await fetch(url, requestOptions);

      if (response.status === 200) {
        await response.json();
      } else {
        alert("error");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (e: any) => {
    const data = task;
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    try {
      const url = "http://localhost:8888/tasks/" + task.id;
      const response = await fetch(url, requestOptions);

      if (response.status === 204) {
        onDelete(task);
      } else {
        alert("error");
      }
    } catch (e) {
      console.error(e);
    }
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
          <button onClick={handleDelete}>Delete</button>
        </td>
      </tr>
    </>
  );
};

export default ToDoTask;
