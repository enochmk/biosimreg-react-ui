import { useState, useContext } from "react";
import AuthContext from "../../context/auth/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const ReRegistration = () => {
  const [form, setForm] = useState(initialState);
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...form,
      agentID: user.username,
    };

    // handleReset();
    niaRegistration(data);
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleReset = () => {
    setForm(initialState);
  };

  const niaRegistration = async (data) => {
    const config = {
      method: "post",
      url: "http://10.81.1.188:5002/v1/nonbiometric/reRegistrationBasic",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        // console.log(error);
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong");
        }
      });
  };

  return (
    <>
      <form className="flex mx-auto" onSubmit={handleSubmit}>
        <div className="card card-bordered shadow-2xl mx-auto w-4/12">
          <div className="card-body">
            <h2 className="card-title text-center text-3xl font-extrabold">
              Re Register a Customer
            </h2>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-muted">Phone Number</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                required
                name="msisdn"
                value={form.msisdn}
                onChange={handleChange}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-muted">Pin Number</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                required
                name="nationalID"
                value={form.nationalID}
                onChange={handleChange}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-muted">Surname</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                required
                name="surname"
                value={form.surname}
                onChange={handleChange}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-muted">Forenames</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                required
                name="forenames"
                value={form.forenames}
                onChange={handleChange}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-muted">Gender</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                required
                name="gender"
                value={form.gender}
                onChange={handleChange}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-muted">Date Of Birth</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                required
                name="dateOfBirth"
                value={form.dateOfBirth}
                onChange={handleChange}
              />
            </div>

            <footer className="justify-end space-x-2 card-actions">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button type="reset" className="btn btn-default" onClick={handleReset}>
                Clear
              </button>
            </footer>
          </div>
        </div>
      </form>
    </>
  );
};

const initialState = {
  nationalID: "",
  surname: "",
  forenames: "",
  msisdn: "",
  gender: "",
  dateOfBirth: "",
  agentID: "",
  channelID: "web",
};

export default ReRegistration;
