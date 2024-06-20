import ErrorMessage from "./error_message";
import validateDescription from "./validate/validate_description";
export interface DescriptionProps {
  description: string;
  editable: boolean;
  onDescriptionChange: (desc: string) => void;
  editDone: () => Promise<void>;
  isComplete: boolean;
}
const Description: React.FC<DescriptionProps> = ({
  description,
  editable,
  onDescriptionChange,
  editDone,
  isComplete,
}) => {
  return (
    <>
      <input
        type="text"
        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
        id="description"
        name="description"
        placeholder={description}
        disabled={!editable}
        onChange={(event) => onDescriptionChange(event.target.value)}
        style={{ textDecoration: isComplete ? "line-through" : "none" }}
      ></input>
      <ErrorMessage messages={validateDescription(description)} />
      {editable && (
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          disabled={!(validateDescription(description).length === 0)}
          onClick={editDone}
        >
          Done
        </button>
      )}
    </>
  );
};

export default Description;
