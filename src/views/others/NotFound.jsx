import { useNavigate } from 'react-router-dom';
const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/admin/dashboard');
  };

  return (
    <div className="mx-auto">
      <h2 className="display-1">Not Found Component</h2>
      <button onClick={handleGoBack} className="btn btn-outline">
        Back Home
      </button>
    </div>
  );
};

export default NotFound;
