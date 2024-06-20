import Task from "../types/task.types";
import { BASE_URL } from "./constants";

const updateTask = async (task: Task) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  };
  try {
    const response = await fetch(`${BASE_URL}/${task.id}`, requestOptions);

    if (response.status === 200) {
      await response.json();
    } else {
      alert("error");
    }
  } catch (e) {
    console.error(e);
  }
};

export default updateTask;
