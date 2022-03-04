import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';

import ErrorMessage from '../../components/Forms/ErrorMessage';
import { registrationSchema as validationSchema } from '../../validation/niaFormSchema';
import { changeTitle } from '../../features/navbar/navbarSlice';
import { toast } from 'react-toastify';
import * as nationalIdService from '../../services/nationalIdService';

const INITIAL_VALUES = {
  pinNumber: '',
  surname: '',
  msisdn: '',
  iccid: '',
  nextOfKin: '',
  alternativeNumber: '',
};

const Registration = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  useEffect(() => {
    dispatch(changeTitle('NIA Registration'));
  }, [dispatch]);

  // handle submit
  const handleSubmit = async (values) => {
    setLoading(true);

    try {
      const response = await nationalIdService.registration(user, values);
      toast.success(response.message);
      formik.handleReset();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="card shadow-xl">
        <form
          className="card-body"
          onSubmit={formik.handleSubmit}
          onReset={formik.handleReset}
        >
          <h2 className="card-title text-gray-600">Complete Your Form</h2>
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

            <div className="form-control flex-grow">
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
                  'input input-info input-bordered' +
                  (formik.errors.iccid && formik.values.iccid
                    ? 'input-error'
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
                  'input input-info input-bordered' +
                  (formik.errors.nextOfKin && formik.values.nextOfKin
                    ? 'input-error'
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
                type="number"
                name="alternativeNumber"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.alternativeNumber}
                placeholder="0500025938"
                className={
                  'input input-info input-bordered' +
                  (formik.errors.alternativeNumber &&
                  formik.values.alternativeNumber
                    ? 'input-error'
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

          <section className="card-actions justify-end">
            <button
              type="submit"
              className={'btn btn-sm btn-success ' + (loading && 'loading')}
            >
              Register
            </button>
            <button type="reset" className="btn btn-sm btn-outline">
              Cancel
            </button>
          </section>
        </form>
      </main>
    </>
  );
};

export default Registration;
