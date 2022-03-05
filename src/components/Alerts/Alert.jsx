import ErrorIcon from './ErrorIcon';
import SuccessIcon from './SuccessIcon';

const Alert = ({ title, message, status }) => {
  if (!message) {
    return null;
  }

  return (
    <main className={`alert shadow-lg alert-${status}`}>
      <div className="space-x-1 items-center">
        {status === 'success' ? <SuccessIcon /> : <ErrorIcon />}
        <span>
          <h3 className="font-bold">{title}</h3>
          <div className="text-xs">{message}</div>
        </span>
      </div>
    </main>
  );
};

export default Alert;
