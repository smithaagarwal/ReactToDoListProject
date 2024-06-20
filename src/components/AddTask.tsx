import { useState } from "react";
import ErrorMessage from "./error_message";
import validateDescription from "./validate/validate_description";
import Task from "../types/task.types";

interface AddTaskProps {
  tasks: Task[];
  onHandleAddTasks: (allTasks: Task[]) => void;
}
export const AddTask: React.FC<AddTaskProps> = ({
  tasks,
  onHandleAddTasks,
}) => {
  const [description, setDescription] = useState<string>("");

  const onDescriptionChange = (description: string) => {
    setDescription(description);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const task = {
      description: description,
      isComplete: false,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    };

    try {
      const url = "http://localhost:8888/tasks";
      const response = await fetch(url, requestOptions);

      if (response.status === 201) {
        const newTask: Task = await response.json();
        const updatedTasks = [...tasks, newTask];
        onHandleAddTasks(updatedTasks);
      } else {
        alert("error fetching tasks");
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="description"
          name="description"
          onChange={(event) => onDescriptionChange(event.target.value)}
        ></input>
        <ErrorMessage messages={validateDescription(description)} />
        <button
          type="submit"
          disabled={!(validateDescription(description).length === 0)}
        >
          Add Task
        </button>
      </form>
    </>
  );
};

export default AddTask;
