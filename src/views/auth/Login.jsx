import signInLogo from '../../assets/svg/sign_in_2.svg';

function Login() {
  return (
    <div className="container mx-auto px-4 h-full min-h-full">
      <div className="flex content-center items-center justify-center">
        <div className="w-full lg:w-8/12 px-4">
          <div className="card  card-bordered shadow-2xl">
            <div className="flex row items-center justify-between">
              <div className="card-body w-1/2">
                <h2 className="card-title text-center mb-3 font-bold text-gray-500 text-3xl">
                  Enter your credentials
                </h2>
                <hr className="my-2" />
                <div className="flex row gap-8">
                  <img src={signInLogo} alt="Sign In logo" className="w-1/2" />
                  <div className="form w-1/2">
                    <main>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-bold text-gray">Username</span>
                        </label>
                        <input
                          type="text"
                          placeholder="username"
                          className="input input-bordered input-primary"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-bold text-gray">Password</span>
                        </label>
                        <input
                          type="text"
                          placeholder="password"
                          className="input input-bordered input-primary"
                        />
                      </div>
                    </main>
                    <div className="justify-center card-actions">
                      <button type="submit" className="btn btn-block btn-primary">
                        Sign In
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
