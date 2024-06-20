import { useState } from "react";
import ErrorMessage from "./error_message";
import validateDescription from "./validate/validate_description";

export const AddItem: React.FC = () => {
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
        const json = await response.json();
        alert(JSON.stringify(json));
      } else {
        alert("error");
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
