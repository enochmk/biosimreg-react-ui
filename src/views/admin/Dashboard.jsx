import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="container p-4">
      <h2>Dashboard</h2>
      <Link to="/auth/login" className="btn btn-outline btn-secondary">
        Login
      </Link>
    </div>
  );
}
