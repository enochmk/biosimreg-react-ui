import ErrorIcon from './ErrorIcon';
import SuccessIcon from './SuccessIcon';

const Alert = ({ show, title, message, status }) => {
  if (!show) return null;

  return (
    <main className={`alert shadow-lg alert-${status} rounded-none my-2`}>
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
