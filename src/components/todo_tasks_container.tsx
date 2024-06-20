import { useEffect, useState } from "react";
import ToDoTaskList from "./todo_tasks_list";
import ToDoTasksHeader from "./todo_tasks_header";
import { Task } from "../types/task.types";
import { AddTask } from "./AddTask";
import { BASE_URL } from "./constants";

export const ToDoTasksContainer: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const onHandleUpdateTasks = (tasks: Task[]) => {
    setTasks(tasks);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BASE_URL);

        const json = await response.json();

        setTasks(json);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <AddTask tasks={tasks} onHandleAddTasks={onHandleUpdateTasks} />
      <table className="min-w-full bg-white shadow rounded-md">
        <tbody>
          <ToDoTasksHeader />
          <ToDoTaskList
            tasks={tasks}
            onHandleDeleteTasks={onHandleUpdateTasks}
          />
        </tbody>
      </table>
    </div>
  );
};
export default ToDoTasksContainer;
