import { toast, ToastContent } from "react-toastify";
import "./Toast.css";

// Define the types for the props of the Msg component
interface MsgProps {
  Message: string;
  title: string;
}

const Msg: React.FC<MsgProps> = ({ Message, title }) => (
  <div className="toastBody">
    <h4 className="toast__heading">{title}</h4>
    <p className="toast__paragraph">{Message}</p>
  </div>
);

const Success = "Success";
const Error = "Error";
const deleted = "Deleted";

// Define type for notify functions
export function notifySuccess(successMessage: string): void {
  const content: ToastContent = (
    <Msg Message={successMessage} title={Success} />
  );
  toast.success(content, {
    position: "bottom-right",
    className: "cool-success-bar",
  });
}

export function notifyDelete(deleteMessage: string): void {
  const content: ToastContent = <Msg Message={deleteMessage} title={deleted} />;
  toast.success(content, {
    position: "bottom-right",
    className: "cool-success-bar",
  });
}

export function notifyError(errorMessage: string): void {
  const content: ToastContent = <Msg Message={errorMessage} title={Error} />;
  toast.error(content, {
    position: "bottom-right",
    className: "cool-error-bar",
  });
}
