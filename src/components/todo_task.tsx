import { useState } from "react";
import { Task } from "../types/task.types";
import ErrorMessage from "./error_message";
import validateDescription from "./validate/validate_description";

export interface ToDoTaskProps {
  task: Task;
  onDelete: (toDeleteTask: Task) => void;
}
const ToDoTask: React.FC<ToDoTaskProps> = ({ task, onDelete }) => {
  const [description, setDescription] = useState<string>(task.description);
  const [isChecked, setChecked] = useState<boolean>(task.isComplete);
  const [editable, setEditable] = useState<boolean>(false);

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
  const onDescriptionChange = (description: string) => {
    setDescription(description);
  };

  const toggleEditable = () => {
    setEditable(!editable);
  };

  const editDone = async () => {
    toggleEditable();
    task.description = description;

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
        alert("error fetching tasks");
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
        <td>
          <input
            type="text"
            id="description"
            name="description"
            placeholder={description}
            disabled={!editable}
            onChange={(event) => onDescriptionChange(event.target.value)}
          ></input>
          <ErrorMessage messages={validateDescription(description)} />
          {editable && (
            <button
              disabled={!(validateDescription(description).length === 0)}
              onClick={editDone}
            >
              Done
            </button>
          )}
        </td>
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
        <td>
          <button disabled={editable} onClick={toggleEditable}>
            Edit
          </button>
        </td>
      </tr>
    </>
  );
};

export default ToDoTask;
