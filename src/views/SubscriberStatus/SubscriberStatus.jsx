import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FaWpforms } from 'react-icons/fa';

import { changeTitle } from '../../features/navbar/navbarSlice';
import { getSubscriberSchema as validationSchema } from '../../validation/subsciberSchema';
import api from '../../services/subscriber/subscriberStatus';
import Alert from '../../components/Alerts/Alert';
import ErrorMessage from '../../components/Forms/ErrorMessage';
import useRegistrationForm from '../../hooks/useRegistrationForm';
import HeaderStats from '../../components/Headers/HeaderStats';
import SubscriberInfo from './SubscriberInfo';

const initialState = {
  msisdn: '',
};

const SubscriberStatus = () => {
  const dispatch = useDispatch();
  const [formik, responseInfo, responseData] = useRegistrationForm({
    initialState,
    validationSchema,
    api,
  });

  useEffect(() => {
    dispatch(changeTitle(`Subscriber's Status`));
  }, [dispatch]);

  return (
    <>
      <HeaderStats />
      <main className="px-4 md:px-10 mx-auto w-full m-24">
        <div className="card border shadow-xl ">
          <form className="card-body" onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
            <h2 className="card-title text-gray-600">
              Check Subscriber's Status
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
              <div className="form-control flex-grow flex-col">
                <label className="label">
                  <span className="label-text">Phone Number:</span>
                </label>
                <input
                  type="tel"
                  name="msisdn"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.msisdn}
                  placeholder="560043149"
                  className={
                    'uppercase input input-bordered w-1/2' +
                    (formik.errors.msisdn && formik.values.msisdn ? ' input-error' : '')
                  }
                  required
                />
                <ErrorMessage input={formik.values.msisdn} message={formik.errors.msisdn} />
              </div>
            </section>
            <footer className="card-actions justify-start w-1/2">
              <button
                type="submit"
                disabled={formik.isSubmitting || !formik.isValid}
                className={'btn btn-sm btn-success ' + (formik.isSubmitting && 'loading disabled')}
              >
                Check
              </button>
              <button type="reset" className="btn btn-sm btn-outline">
                Cancel
              </button>
            </footer>
          </form>
        </div>
        <SubscriberInfo data={responseData} msisdn={''} />
      </main>
    </>
  );
};

export default SubscriberStatus;
