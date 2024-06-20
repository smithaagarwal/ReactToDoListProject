import { AddTask } from "./components/AddTask";
import ToDoTasksContainer from "./components/todo_tasks_container";

function App() {
  return (
    <>
      <div>
        <AddTask />
        <ToDoTasksContainer />
      </div>
    </>
  );
}

export default App;
