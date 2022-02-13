import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import axios from 'axios';

import ErrorMessage from '../../components/Forms/ErrorMessage';
import niaRegistrationSchema from '../../validation/niaRegistrationSchema';
import { changeTitle } from '../../features/navbarSlice';
import { toast } from 'react-toastify';

function Registration() {
  const dispatch = useDispatch();
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
    validationSchema: niaRegistrationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  useEffect(() => {
    dispatch(changeTitle('NIA Registration'));
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  const onSubmit = async (values) => {
    setLoading(true);

    const request = {
      agentID: '560043149',
      nationalID: values.pinNumber,
      surname: values.surname,
      msisdn: values.msisdn.toString(),
      iccid: values.iccid.toString(),
      alternativeNumber: values.alternativeNumber.toString(),
      nextOfKin: values.nextOfKin,
      isMFS: true,
      forenames: '',
      gender: '',
      dateOfBirth: null,
      channelID: 'web',
    };

    try {
      const response = await axios.post(
        'http://10.81.1.188:5002/v1/nonbiometric/registration',
        request,
      );

      toast.success(response.data.message);
      handleReset();
    } catch (error) {
      toast.error(error.response.data.message || error.message);
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
              <div className="flex flex-row  gap-x-3">
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
                    <span className="label-text">Last 6 digits of ICCID</span>
                  </label>
                  <input
                    type="number"
                    name="iccid"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.iccid}
                    placeholder="789345"
                    className={
                      'input input-info input-bordered' +
                      (errors.iccid && values.iccid ? 'input-error' : '')
                    }
                    required
                  />
                  <ErrorMessage input={values.iccid} message={errors.iccid} />
                </div>

                <div className="form-control flex-1">
                  <label className="label">
                    <span className="label-text">Next Of Kin</span>
                  </label>
                  <input
                    type="text"
                    name="nextOfKin"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nextOfKin}
                    placeholder="John Smith"
                    className={
                      'input input-info input-bordered' +
                      (errors.nextOfKin && values.nextOfKin
                        ? 'input-error'
                        : '')
                    }
                    required
                  />
                  <ErrorMessage
                    input={values.nextOfKin}
                    message={errors.nextOfKin}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Alternative Number</span>
                  </label>
                  <input
                    type="number"
                    name="alternativeNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.alternativeNumber}
                    placeholder="0500025938"
                    className={
                      'input input-info input-bordered' +
                      (errors.alternativeNumber && values.alternativeNumber
                        ? 'input-error'
                        : '')
                    }
                    required
                  />
                  <ErrorMessage
                    input={values.alternativeNumber}
                    message={errors.alternativeNumber}
                  />
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
  pinNumber: '',
  surname: '',
  msisdn: '',
  iccid: '',
  nextOfKin: '',
  alternativeNumber: '',
};

export default Registration;
