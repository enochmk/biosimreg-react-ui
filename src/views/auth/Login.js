import { useState, useContext } from "react";
import { IoLogIn } from "react-icons/io5";
import AuthContext from "../../context/auth/AuthContext";
import { login } from "../../context/auth/AuthActions";

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const { dispatch } = useContext(AuthContext);
  const { username, password } = formData;

  // Handle form change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData(initialState);

    const response = await login(formData);

    if (response) {
      dispatch({
        type: "LOG_USER_IN",
        payload: response,
      });
    }

    if (!response) {
      console.log("Invalid username and password");
    }
  };

  return (
    <>
      <form className="flex mx-auto" onSubmit={handleSubmit}>
        <div className="card card-bordered shadow-2xl mx-auto w-4/12">
          <div className="card-body">
            <h2 className="card-title text-center text-3xl font-extrabold">Sign In</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-muted">Username</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                required
                name="username"
                value={username}
                onChange={handleChange}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered"
                required
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>

            <footer className="justify-end space-x-2 card-actions">
              <button className="btn btn-primary btn-block">
                <IoLogIn />
                Login
              </button>
            </footer>
          </div>
        </div>
      </form>
    </>
  );
};

const initialState = {
  username: "",
  password: "",
};

export default Login;
