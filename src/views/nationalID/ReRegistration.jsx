import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';

import ErrorMessage from '../../components/Forms/ErrorMessage';
import { reRegistrationSchema as validationSchema } from '../../validation/niaFormSchema';
import { changeTitle } from '../../features/navbar/navbarSlice';
import * as nationalIdService from '../../services/nationalIdService';
import Alert from '../../components/Alerts/Alert';

const INITIAL_VALUES = {
  msisdn: '',
  pinNumber: '',
  surname: '',
  forenames: '',
  dateOfBirth: '',
  gender: '',
};

const ReRegistration = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [responseInfo, setResponseInfo] = useState({
    message: '',
    status: '',
    title: '',
  });
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
    onReset: () => {
      clearResponseInfo();
    },
    onChange: () => {
      clearResponseInfo();
    },
  });

  useEffect(() => {
    dispatch(changeTitle('NIA Re-Registration'));
  }, [dispatch]);

  const clearResponseInfo = () => {
    setResponseInfo({
      title: '',
      message: '',
      status: '',
    });
  };

  const handleSubmit = async (values) => {
    setLoading(true);

    try {
      const response = await nationalIdService.reRegistration(user, values);

      setResponseInfo({
        title: 'Success!',
        message: `${response.message}. SUUID: ${response.suuid}`,
        status: 'success',
      });

      formik.handleReset();
    } catch (error) {
      setResponseInfo({
        title: 'Error!',
        message: error.message,
        status: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="card border shadow-xl">
      <form
        className="card-body"
        onSubmit={formik.handleSubmit}
        onReset={formik.handleReset}
      >
        <h2 className="card-title text-gray-600">Complete The Form</h2>
        <Alert
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
                'input input-info input-bordered ' +
                (formik.errors.pinNumber && formik.values.pinNumber
                  ? 'input-error'
                  : '')
              }
              required
            />
            <ErrorMessage
              input={formik.values.pinNumber}
              message={formik.errors.pinNumber}
            />
          </div>

          <div className="form-control flex-1">
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
                'input input-info input-bordered ' +
                (formik.errors.surname && formik.values.surname
                  ? 'input-error'
                  : '')
              }
              required
            />
            <ErrorMessage
              input={formik.values.surname}
              message={formik.errors.surname}
            />
          </div>

          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="number"
              name="msisdn"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.msisdn}
              placeholder="0560043149"
              className={
                'input input-info input-bordered' +
                (formik.errors.msisdn && formik.values.msisdn
                  ? 'input-error'
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
                'input input-info input-bordered' +
                (formik.errors.forenames && formik.values.forenames
                  ? 'input-error'
                  : '')
              }
              required
            />
            <ErrorMessage
              input={formik.values.forenames}
              message={formik.errors.forenames}
            />
          </div>

          <div className="form-control flex-grow">
            <label className="label">
              <span className="label-text">Date Of Birth</span>
            </label>
            <input
              type="text"
              name="dateOfBirth"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dateOfBirth}
              placeholder="01011990"
              className={
                'input input-info input-bordered' +
                (formik.errors.dateOfBirth && formik.values.dateOfBirth
                  ? 'input-error'
                  : '')
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
              className="select select-bordered select-info w-full max-w-xs"
            >
              <option>Select Gender</option>
              <option value="male" label="Male" />
              <option value="female" label="Female" />
            </select>

            <ErrorMessage
              input={formik.values.gender}
              message={formik.errors.gender}
            />
          </div>
        </section>

        <footer className="card-actions justify-end">
          <button
            type="submit"
            className={'btn btn-sm btn-success ' + (loading && 'loading')}
          >
            Register
          </button>
          <button type="reset" className="btn btn-sm btn-outline">
            Cancel
          </button>
        </footer>
      </form>
    </main>
  );
};

export default ReRegistration;
