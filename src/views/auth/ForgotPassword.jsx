import { useContext } from 'react';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { IoRefreshCircleOutline } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthContext from '../../context/auth/AuthContext';

import forgotPasswordLogo from '../../assets/svg/forgot_password.svg';
import { Link } from 'react-router-dom';

const schema = yup
  .object({
    email: yup.string().required(),
  })
  .required();

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const { dispatch } = useContext(AuthContext);

  // handle form submit
  const onSubmit = async (data) => {
    if (true) {
      return toast.error('Something went wrong');
    }
  };

  return (
    <section className="container mx-auto px-4 h-full min-h-full">
      <div className="flex content-center items-center justify-center">
        <div className="w-full lg:w-8/12 px-4">
          <div className="card card-bordered shadow-2xl">
            <div className="flex row items-center justify-between">
              <div className="card-body w-1/2">
                <h2 className="card-title text-center mb-3 font-bold text-3xl text-muted">
                  Reset your password
                </h2>
                <hr className="my-2" />
                <div className="flex row gap-8">
                  <img
                    src={forgotPasswordLogo}
                    alt="Sign In logo"
                    className="w-1/2"
                  />
                  <div className="form w-1/2 my-auto items-center">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text font-bold text-gray block uppercase">
                            Enter your Email
                          </span>
                        </label>
                        <input
                          type="email"
                          placeholder="Email"
                          {...register('email')}
                          className="input input-bordered shadow"
                        />
                        {<p className="text-error">{errors.email?.message}</p>}
                      </div>

                      <div className="justify-center card-actions">
                        <button
                          type="submit"
                          className="btn btn-block btn-success"
                        >
                          Reset Password
                          <IoRefreshCircleOutline className="items-center my-auto" />
                        </button>
                        <Link
                          to="/auth/login"
                          className="btn btn-outline btn-block btn-ghost"
                        >
                          Back to Login
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
