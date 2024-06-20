import Task from "../types/task.types";

const updateTask = async (task: Task) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  };
  try {
    const url = "http://localhost:8888/tasks/" + task.id;
    const response = await fetch(url, requestOptions);

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
