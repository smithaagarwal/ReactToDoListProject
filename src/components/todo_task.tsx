import { useState } from "react";
import { Task } from "../types/task.types";
import IsCompleteCheckbox from "./is_complete_checkbox";
import DeleteButton from "./delete_button";
import EditButton from "./edit_button";
import Description from "./description";
import updateTask from "./update_task";

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
    updateTask(task);
  };
  const onDescriptionChange = (description: string) => {
    setDescription(description);
  };

  const toggleEditable = () => {
    setEditable(!editable);
  };

  const handleEdit = async () => {
    toggleEditable();
    task.description = description;
    updateTask(task);
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
      <tr className="border-t">
        <td className="px-4 py-2 border flex items-center space-x-2">
          <Description
            description={description}
            editable={editable}
            onDescriptionChange={onDescriptionChange}
            editDone={handleEdit}
            isComplete={isChecked}
          />
        </td>
        <td className="px-4 py-2 border text-center">
          <IsCompleteCheckbox
            isChecked={isChecked}
            handleCheckBox={handleCheckbox}
          />
        </td>
        <td className="px-4 py-2 border text-center">
          <DeleteButton handleDelete={handleDelete} />
        </td>
        <td className="px-4 py-2 border text-center">
          <EditButton editable={editable} toggleEditable={toggleEditable} />
        </td>
      </tr>
    </>
  );
};

export default ToDoTask;
