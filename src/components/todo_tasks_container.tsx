import { useEffect, useState } from "react";
import ToDoTaskList from "./todo_tasks_list";
import ToDoTasksHeader from "./todo_tasks_header";
import { Task } from "../types/task.types";
import { AddTask } from "./AddTask";
const url = "http://localhost:8888/tasks";

export const ToDoTasksContainer: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const onHandleUpdateTasks = (tasks: Task[]) => {
    setTasks(tasks);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        const json = await response.json();

        setTasks(json);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>All Tasks:</h2>
      <table>
        <tbody>
          <ToDoTasksHeader />
          <ToDoTaskList
            tasks={tasks}
            onHandleDeleteTasks={onHandleUpdateTasks}
          />
        </tbody>
      </table>
      <AddTask tasks={tasks} onHandleAddTasks={onHandleUpdateTasks} />
    </>
  );
};
export default ToDoTasksContainer;
