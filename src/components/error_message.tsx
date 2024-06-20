export interface ErrorMessageProps {
  messages: string[];
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({ messages }) =>
  messages && messages.length > 0 ? (
    <>
      {messages.map((message, i) => (
        <div
          className="bg-red-100 text-red-600 text-sm px-2 py-1 rounded-md"
          key={i}
        >
          {message}
        </div>
      ))}
    </>
  ) : null;

export default ErrorMessage;
