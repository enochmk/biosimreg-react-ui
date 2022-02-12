import { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { IoLogIn } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthContext from '../../context/auth/AuthContext';
import * as authActions from '../../context/auth/AuthActions';

import signInLogo from '../../assets/svg/sign_in_2.svg';

const schema = yup
  .object({
    username: yup.string().required(),
    password: yup.string().min(6).required(),
  })
  .required();

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { dispatch } = useContext(AuthContext);

  // handle form submit
  const onSubmit = async (data) => {
    const response = await authActions.login(data);

    // no data found
    if (!response) {
      return toast.error('Invalid username and password');
    }

    // save to auth state
    dispatch({
      type: 'LOG_USER_IN',
      payload: response,
    });
  };

  return (
    <section className="container mx-auto px-4 h-full min-h-full">
      <div className="flex content-center items-center justify-center">
        <div className="w-full lg:w-8/12 px-4">
          <div className="card card-bordered shadow-2xl shadow-black">
            <div className="flex row items-center justify-between">
              <div className="card-body w-1/2">
                <h2 className="card-title text-center mb-3 font-bold text-3xl text-muted">
                  Enter your credentials
                </h2>
                <hr className="my-2" />
                <div className="flex row gap-8">
                  <img src={signInLogo} alt="Sign In logo" className="w-1/2" />
                  <div className="form w-1/2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-bold text-gray block uppercase">
                            Username
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Username"
                          {...register('username')}
                          className="input input-bordered shadow focus:ring"
                        />
                        {
                          <p className="text-error">
                            {errors.username?.message}
                          </p>
                        }
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-bold text-gray block uppercase">
                            Password
                          </span>
                        </label>
                        <input
                          type="password"
                          placeholder="Password"
                          {...register('password')}
                          className="input input-bordered shadow focus:ring "
                        />
                        {
                          <p className="text-error my-2">
                            {errors.password?.message}
                          </p>
                        }
                      </div>

                      <div className="justify-center card-actions">
                        <button
                          type="submit"
                          className="btn btn-block btn-success"
                        >
                          Sign In
                        </button>
                        <Link
                          to="/auth/forgot-password"
                          className="btn btn-link text-blue-dark text-xs"
                        >
                          Forgot your password?
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-xs mt-4">
            &copy;2022 Solutions Team. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
