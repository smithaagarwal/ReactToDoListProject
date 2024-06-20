export interface EditButtonProps {
  editable: boolean;
  toggleEditable: () => void;
}
const EditButton: React.FC<EditButtonProps> = ({
  editable,
  toggleEditable,
}) => {
  return (
    <>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mr-2"
        disabled={editable}
        onClick={toggleEditable}
      >
        Edit
      </button>
    </>
  );
};
export default EditButton;
