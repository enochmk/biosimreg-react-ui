import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h2 className="text-3xl">Home Page</h2>
        <Link to="/auth/login" className="btn btn-outline btn-accent">
          Login
        </Link>
      </div>
    </div>
  );
}
