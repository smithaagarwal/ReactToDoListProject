import { useState } from "react";
import ErrorMessage from "./error_message";
import validateDescription from "./validate/validate_description";
import Task from "../types/task.types";
import Toast from "./toast/toast";
import { BASE_URL } from "./constants";

interface AddTaskProps {
  tasks: Task[];
  onHandleAddTasks: (allTasks: Task[]) => void;
}
export const AddTask: React.FC<AddTaskProps> = ({
  tasks,
  onHandleAddTasks,
}) => {
  const [description, setDescription] = useState<string>("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

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
      const response = await fetch(BASE_URL, requestOptions);

      if (response.status === 201) {
        const newTask: Task = await response.json();
        const updatedTasks = [...tasks, newTask];
        onHandleAddTasks(updatedTasks);

        // Set toast message
        setToastMessage(`Task ${newTask.description} got added!`);
        setShowToast(true);

        // Reset toast after 3 seconds
        setTimeout(() => {
          setShowToast(false);
          setToastMessage("");
        }, 2000);
      } else {
        alert("error fetching tasks");
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit}>
        <input
          className="border border-gray-300 p-2 rounded-md mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new task"
          type="text"
          id="description"
          name="description"
          onChange={(event) => onDescriptionChange(event.target.value)}
        ></input>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          type="submit"
          disabled={!(validateDescription(description).length === 0)}
        >
          Add Task
        </button>
        {<ErrorMessage messages={validateDescription(description)} />}
      </form>

      {showToast && (
        <Toast
          message={toastMessage}
          onClose={() => {
            setShowToast(false);
            setToastMessage("");
          }}
        />
      )}
    </div>
  );
};

export default AddTask;
