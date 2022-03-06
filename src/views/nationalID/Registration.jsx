import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaWpforms } from 'react-icons/fa';

import { changeTitle } from '../../features/navbar/navbarSlice';
import { registrationSchema as validationSchema } from '../../validation/niaFormSchema';
import { registration as api } from '../../services/nationalIdService';
import Alert from '../../components/Alerts/Alert';
import ErrorMessage from '../../components/Forms/ErrorMessage';
import useRegistrationForm from '../../hooks/useRegistrationForm';
import HeaderStats from '../../components/Headers/HeaderStats';

const initialState = {
  pinNumber: '',
  surname: '',
  msisdn: '',
  iccid: '',
  nextOfKin: '',
  alternativeNumber: '',
};

const Registration = () => {
  const dispatch = useDispatch();
  const [formik, responseInfo] = useRegistrationForm({
    initialState,
    validationSchema,
    api,
  });

  useEffect(() => {
    dispatch(changeTitle('NIA Registration'));
  }, [dispatch]);

  return (
    <>
      <HeaderStats />
      <main className="px-4 md:px-10 mx-auto w-full m-24">
        <div className="card border shadow-xl ">
          <form
            className="card-body"
            onSubmit={formik.handleSubmit}
            onReset={formik.handleReset}
          >
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
                    'uppercase input input-bordered ' +
                    (formik.errors.pinNumber && formik.values.pinNumber
                      ? ' input-error'
                      : '')
                  }
                  required
                />
                <ErrorMessage
                  input={formik.values.pinNumber}
                  message={formik.errors.pinNumber}
                />
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
                    'uppercase input input-bordered' +
                    (formik.errors.surname && formik.values.surname
                      ? ' input-error'
                      : '')
                  }
                  required
                />
                <ErrorMessage
                  input={formik.values.surname}
                  message={formik.errors.surname}
                />
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
                  placeholder="0560043149"
                  className={
                    'input input-bordered' +
                    (formik.errors.msisdn && formik.values.msisdn
                      ? ' input-error'
                      : '')
                  }
                  required
                />
                <ErrorMessage
                  input={formik.values.msisdn}
                  message={formik.errors.msisdn}
                />
              </div>
            </section>

            <section className="lg:flex gap-x-2">
              <div className="form-control flex-grow">
                <label className="label">
                  <span className="label-text">Last 6 digits of ICCID</span>
                </label>
                <input
                  type="number"
                  name="iccid"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.iccid}
                  placeholder="789345"
                  className={
                    'input input-bordered' +
                    (formik.errors.iccid && formik.values.iccid
                      ? ' input-error'
                      : '')
                  }
                  required
                />
                <ErrorMessage
                  input={formik.values.iccid}
                  message={formik.errors.iccid}
                />
              </div>

              <div className="form-control flex-grow">
                <label className="label">
                  <span className="label-text">Next Of Kin</span>
                </label>
                <input
                  type="text"
                  name="nextOfKin"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.nextOfKin}
                  placeholder="John Smith"
                  className={
                    'uppercase input input-bordered' +
                    (formik.errors.nextOfKin && formik.values.nextOfKin
                      ? ' input-error'
                      : '')
                  }
                  required
                />
                <ErrorMessage
                  input={formik.values.nextOfKin}
                  message={formik.errors.nextOfKin}
                />
              </div>

              <div className="form-control flex-grow">
                <label className="label">
                  <span className="label-text">Alternative Number</span>
                </label>
                <input
                  type="tel"
                  name="alternativeNumber"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.alternativeNumber}
                  placeholder="0500025938"
                  className={
                    'input input-bordered' +
                    (formik.errors.alternativeNumber &&
                    formik.values.alternativeNumber
                      ? ' input-error'
                      : '')
                  }
                  required
                />
                <ErrorMessage
                  input={formik.values.alternativeNumber}
                  message={formik.errors.alternativeNumber}
                />
              </div>
            </section>

            <footer className="card-actions justify-end">
              <button
                type="submit"
                className={
                  'btn btn-sm btn-success ' +
                  (formik.isSubmitting && 'loading disabled')
                }
                disabled={formik.isSubmitting || !formik.isValid}
              >
                Register
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

export default Registration;
