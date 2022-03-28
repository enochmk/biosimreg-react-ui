import ErrorIcon from './ErrorIcon';
import SuccessIcon from './SuccessIcon';

const Alert = ({ show, title, message, status }) => {
  if (!show) return null;

  const alertStatus = status === 'success' ? 'alert-success' : 'alert-error';

  return (
    <main className={`rounded-none my-2 shadow-lg alert ${alertStatus}`}>
      <div className="space-x-1 items-center">
        {status === 'success' ? (
          <SuccessIcon className="w-10 h-10" />
        ) : (
          <ErrorIcon className="w-10 h-10" />
        )}
        <span>
          <h3 className="font-bold text-lg">{title}</h3>
          <div className="text">{message}</div>
        </span>
      </div>
    </main>
  );
};

export default Alert;
