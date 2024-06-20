export interface ToastProps {
  message: string;
  onClose: () => void;
}
const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-green-500 text-white p-4 text-center">
      <span className="mr-2">💥</span>
      {message}
      <button
        onClick={onClose}
        className="ml-2 bg-white text-green-500 px-2 py-1 rounded-md hover:bg-gray-200"
      >
        Close
      </button>
    </div>
  );
};

export default Toast;
