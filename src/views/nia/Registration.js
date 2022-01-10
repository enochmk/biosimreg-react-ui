import { useState, useContext } from "react";
import AuthContext from "../../context/auth/AuthContext";

const Registration = () => {
  const [form, setForm] = useState(initialState);
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...form,
      agentID: user.username,
    };

    console.log("Submitting data");
    console.log(data);
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

  return (
    <>
      <form className="flex mx-auto" onSubmit={handleSubmit}>
        <div className="card card-bordered shadow-2xl mx-auto w-4/12">
          <div className="card-body">
            <h2 className="card-title text-center text-3xl font-extrabold">Register a Customer</h2>

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
                <span className="label-text text-muted">ICCID</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                required
                name="iccid"
                value={form.iccid}
                onChange={handleChange}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-muted">Next Of Kin</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                required
                name="nextOfKin"
                value={form.nextOfKin}
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
  msisdn: "",
  iccid: "",
  nextOfKin: "",
  agentID: "",
  channelID: "web",
};

export default Registration;
