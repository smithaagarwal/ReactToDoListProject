import { useEffect, useState } from "react";
import ToDoTaskList from "./todo_tasks_list";

const url = "http://localhost:8888/tasks";

export const ToDoTasksContainer: React.FC = () => {
  const [tasks, setTasks] = useState([]);

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
  }, [tasks]);

  return (
    <>
      <h2>All Tasks:</h2>
      <table>
        <tbody>
          <ToDoTaskList tasks={tasks} />
        </tbody>
      </table>
    </>
  );
};
export default ToDoTasksContainer;
