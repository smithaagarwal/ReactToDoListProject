export interface ErrorMessageProps {
  messages: string[];
}
const ErrorMessage: React.FC<ErrorMessageProps> = ({ messages }) =>
  messages && messages.length > 0 ? (
    <>
      {messages.map((message, i) => (
        <div className="error__message" key={i}>
          {message}
        </div>
      ))}
    </>
  ) : null;

export default ErrorMessage;
