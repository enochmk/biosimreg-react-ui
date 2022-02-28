import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section className="mx-auto">
      <h1 className="display-1">Unauthorized</h1>
      <button onClick={handleGoBack} className="btn btn-outline">
        Go Back
      </button>
    </section>
  );
};

export default Unauthorized;
