export interface DeleteButtonProps {
  handleDelete: (e: any) => Promise<void>;
}
const DeleteButton: React.FC<DeleteButtonProps> = ({ handleDelete }) => {
  return (
    <>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        onClick={handleDelete}
      >
        Delete
      </button>
    </>
  );
};
export default DeleteButton;
