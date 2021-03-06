import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaWpforms } from 'react-icons/fa';

import { changeTitle } from '../../features/navbar/navbarSlice';
import { reRegistrationSchema as validationSchema } from '../../validation/niaFormSchema';
import api from '../../services/nationalId/basicLink';
import ErrorMessage from '../../components/Forms/ErrorMessage';
import Alert from '../../components/Alerts/Alert';
import useRegistrationForm from '../../hooks/useRegistrationForm';
import HeaderStats from '../../components/Headers/HeaderStats';

const initialState = {
  msisdn: '',
  pinNumber: '',
  surname: '',
  forenames: '',
  dateOfBirth: '20-01-1980',
  gender: '',
};

const BasicLink = () => {
  const dispatch = useDispatch();
  const [formik, responseInfo] = useRegistrationForm({
    initialState,
    validationSchema,
    api,
  });

  useEffect(() => {
    dispatch(changeTitle('National ID Linking'));
  }, [dispatch]);

  return (
    <>
      <HeaderStats />
      <main className="px-4 md:px-10 mx-auto w-full m-24">
        <div className="card border shadow-xl">
          <form className="card-body" onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
            <h2 className="card-title text-gray-600">
              Complete The Form
              <span className="inline-block mx-2">
                <FaWpforms />
              </span>
            </h2>
            <Alert
              show={responseInfo.show}
              title={responseInfo.title}
              message={responseInfo.message}
              status={responseInfo.status}
            />
            <section className="lg:flex gap-x-2">
              <div className="form-control flex-grow">
                <label className="label">
                  <span className="label-text">Pin Number</span>
                </label>
                <input
                  type="text"
                  name="pinNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.pinNumber}
                  placeholder="GHA-123456789-0"
                  className={
                    'input input-bordered' +
                    (formik.errors.pinNumber && formik.values.pinNumber ? ' input-error' : '')
                  }
                  required
                />
                <ErrorMessage input={formik.values.pinNumber} message={formik.errors.pinNumber} />
              </div>

              <div className="form-control flex-grow">
                <label className="label">
                  <span className="label-text">Surname</span>
                </label>
                <input
                  type="text"
                  name="surname"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.surname}
                  placeholder="KLUFIO"
                  className={
                    'input input-bordered' +
                    (formik.errors.surname && formik.values.surname ? ' input-error' : '')
                  }
                  required
                />
                <ErrorMessage input={formik.values.surname} message={formik.errors.surname} />
              </div>

              <div className="form-control flex-grow">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="tel"
                  name="msisdn"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.msisdn}
                  placeholder="560043149"
                  className={
                    'input input-bordered' +
                    (formik.errors.msisdn && formik.values.msisdn ? ' input-error' : '')
                  }
                  required
                />
                <ErrorMessage input={formik.values.msisdn} message={formik.errors.msisdn} />
              </div>
            </section>

            <section className="lg:flex gap-x-2">
              <div className="form-control flex-grow">
                <label className="label">
                  <span className="label-text">Forenames</span>
                </label>
                <input
                  type="text"
                  name="forenames"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.forenames}
                  placeholder="ENOCH MENSAH"
                  className={
                    'input input-bordered' +
                    (formik.errors.forenames && formik.values.forenames ? ' input-error' : '')
                  }
                  required
                />
                <ErrorMessage input={formik.values.forenames} message={formik.errors.forenames} />
              </div>

              <div className="form-control flex-grow">
                <label className="label">
                  <span className="label-text">Date Of Birth</span>
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dateOfBirth}
                  placeholder="01011990"
                  className={
                    'input input-bordered' +
                    (formik.errors.dateOfBirth && formik.values.dateOfBirth ? ' input-error' : '')
                  }
                  required
                />
                <ErrorMessage
                  input={formik.values.dateOfBirth}
                  message={formik.errors.dateOfBirth}
                />
              </div>

              <div className="form-control flex-grow">
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>
                <select
                  id="gender"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="select select-bordered w-full"
                >
                  <option>Select Gender</option>
                  <option value="male" label="Male" />
                  <option value="female" label="Female" />
                </select>

                <ErrorMessage input={formik.values.gender} message={formik.errors.gender} />
              </div>
            </section>

            <footer className="card-actions justify-end">
              <button
                type="submit"
                className={'btn btn-sm btn-success ' + (formik.isSubmitting && 'loading disabled')}
                disabled={formik.isSubmitting || !formik.isValid}
              >
                Re-Register
              </button>
              <button type="reset" className="btn btn-sm btn-outline">
                Cancel
              </button>
            </footer>
          </form>
        </div>
      </main>
    </>
  );
};

export default BasicLink;
