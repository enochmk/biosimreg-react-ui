import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';

import ErrorMessage from '../../components/Forms/ErrorMessage';
import validationSchema from '../../validation/niaModificationSchema';
import { changeTitle } from '../../features/navbar/navbarSlice';
import * as nationalIdService from '../../services/nationalIdService';

const Modification = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.auth.user);
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
    dispatch(changeTitle('NIA MFS-Registration'));
  }, [dispatch]);

  const onSubmit = async (values) => {
    setLoading(true);

    try {
      const response = await nationalIdService.registrationMFS(user, values);
      toast.success(response.message);
      handleReset();
    } catch (error) {
      toast.error(error.message);
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
                    <span className="label-text">Pin Number</span>
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

              <div className="flex flex-row gap-x-3">
                <div className="form-control flex-1">
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
                    <option value="" disabled="disabled" defaultValue>
                      Select Gender
                    </option>
                    <option value="MALE" label="Male" />
                    <option value="FEMALE" label="Female" />
                  </select>

                  <ErrorMessage input={values.gender} message={errors.gender} />
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
                    placeholder="27041994"
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
};

const INITIAL_VALUES = {
  msisdn: '',
  pinNumber: '',
  surname: '',
  forenames: '',
  dateOfBirth: '',
  gender: '',
  nextOfKin: '',
};

export default Modification;
