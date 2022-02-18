import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';

import ErrorMessage from '../../components/Forms/ErrorMessage';
import validationSchema from '../../validation/niaModificationSchema';
import { changeTitle } from '../../features/navbar/navbarSlice';

function Modification() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    handleChange,
    handleReset,
    handleBlur,
    values,
    errors,
  } = useFormik({
    initialValues: INITIAL_VALUES,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  useEffect(() => {
    dispatch(changeTitle('NIA Modification'));
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  const onSubmit = async (values) => {
    setLoading(true);

    const request = {
      agentID: user.msisdn,
      msisdn: values.msisdn.toString(),
      nationalID: values.pinNumber,
      surname: values.surname,
      forenames: values.forenames,
      dateOfBirth: values.dateOfBirth,
      gender: values.gender,
      channelID: 'web',
    };

    try {
      const response = await axios.post(
        'http://10.81.1.188:5002/v1/nonbiometric/reRegistrationBasic',
        request,
      );

      toast.success(response.data.message);
      handleReset();
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-8/12 px-4">
        <div className="card card-bordered shadow-2xl">
          <div className="card-body">
            <h2 className="card-title">Complete Your Form</h2>
            <form
              onSubmit={handleSubmit}
              onReset={handleReset}
              className="flex-auto px-4 lg:px-10 py-10"
            >
              <div className="flex flex-row gap-x-3">
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Ghana Card</span>
                  </label>
                  <input
                    type="text"
                    name="pinNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.pinNumber}
                    placeholder="GHA-123456789-0"
                    className={
                      'input input-info input-bordered ' +
                      (errors.pinNumber && values.pinNumber
                        ? 'input-error'
                        : '')
                    }
                    required
                  />
                  <ErrorMessage
                    input={values.pinNumber}
                    message={errors.pinNumber}
                  />
                </div>

                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Surname</span>
                  </label>
                  <input
                    type="text"
                    name="surname"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.surname}
                    placeholder="KLUFIO"
                    className={
                      'input input-info input-bordered ' +
                      (errors.surname && values.surname ? 'input-error' : '')
                    }
                    required
                  />
                  <ErrorMessage
                    input={values.surname}
                    message={errors.surname}
                  />
                </div>

                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    type="number"
                    name="msisdn"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.msisdn}
                    placeholder="0560043149"
                    className={
                      'input input-info input-bordered' +
                      (errors.msisdn && values.msisdn ? 'input-error' : '')
                    }
                    required
                  />
                  <ErrorMessage input={values.msisdn} message={errors.msisdn} />
                </div>
              </div>

              <div className="flex flex-row gap-x-3">
                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Forenames</span>
                  </label>
                  <input
                    type="text"
                    name="forenames"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.forenames}
                    placeholder="ENOCH MENSAH"
                    className={
                      'input input-info input-bordered' +
                      (errors.forenames && values.forenames
                        ? 'input-error'
                        : '')
                    }
                    required
                  />
                  <ErrorMessage
                    input={values.forenames}
                    message={errors.forenames}
                  />
                </div>

                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Date Of Birth</span>
                  </label>
                  <input
                    type="text"
                    name="dateOfBirth"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.dateOfBirth}
                    placeholder="John Smith"
                    className={
                      'input input-info input-bordered' +
                      (errors.dateOfBirth && values.dateOfBirth
                        ? 'input-error'
                        : '')
                    }
                    required
                  />
                  <ErrorMessage
                    input={values.dateOfBirth}
                    message={errors.dateOfBirth}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Gender</span>
                  </label>
                  <select
                    id="gender"
                    value={values.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="select select-bordered select-info w-full max-w-xs"
                  >
                    <option value="" disabled="disabled">
                      Select Gender
                    </option>
                    <option value="MALE" label="Male" />
                    <option value="FEMALE" label="Female" />
                  </select>

                  <ErrorMessage input={values.gender} message={errors.gender} />
                </div>
              </div>

              <div className="card-actions justify-end">
                <button
                  type="submit"
                  className={'btn btn-sm btn-success ' + (loading && 'loading')}
                >
                  Register
                </button>
                <button type="reset" className="btn btn-sm btn-outline">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-4/12 px-4"></div>
    </div>
  );
}

const INITIAL_VALUES = {
  msisdn: '',
  pinNumber: '',
  surname: '',
  forenames: '',
  dateOfBirth: '',
  gender: '',
};

export default Modification;
