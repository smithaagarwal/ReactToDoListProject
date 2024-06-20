import ToDoTask from "./todo_task";
import { Task } from "../types/task.types";

interface ToDoTaskListProps {
  tasks: Task[];
}

const ToDoTaskList: React.FC<ToDoTaskListProps> = (props) => {
  return (
    <>
      {props.tasks?.map((task) => (
        <ToDoTask key={task.id} task={task} />
      ))}
    </>
  );
};

export default ToDoTaskList;
