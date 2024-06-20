import ToDoTask from "./todo_task";
import { Task } from "../types/task.types";

interface ToDoTaskListProps {
  tasks: Task[];
  onHandleDeleteTasks: (remainingTasks: Task[]) => void;
}

const ToDoTaskList: React.FC<ToDoTaskListProps> = ({
  tasks,
  onHandleDeleteTasks,
}) => {
  const onHandleDelete = (taskToDelete: Task) => {
    onHandleDeleteTasks(tasks.filter((task) => task.id !== taskToDelete.id));
  };
  return (
    <>
      {tasks?.map((task) => (
        <ToDoTask
          key={task.id}
          task={task}
          onDelete={() => onHandleDelete(task)}
        />
      ))}
    </>
  );
};

export default ToDoTaskList;
