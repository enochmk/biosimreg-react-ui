import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';

const useRegistrationForm = ({ initialState, validationSchema, api }) => {
  const user = useSelector((state) => state.auth.user);
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: validationSchema,
    onSubmit: () => {
      handleSubmit();
    },
    onReset: () => {},
    onChange: () => {
      clearResponseInfo();
    },
    validateOnBlur: true,
  });

  const [responseData, setResponseData] = useState(null);
  const [responseInfo, setResponseInfo] = useState({
    show: false,
    title: 'info',
    message: 'N/A',
    status: 'info',
  });

  const clearResponseInfo = () => {
    setResponseInfo({
      show: false,
      title: '',
      message: '',
      status: '',
    });
  };

  const successInfo = (message) => {
    setResponseInfo({
      show: true,
      title: 'Success!',
      status: 'success',
      message,
    });
  };

  const errorInfo = (message) => {
    setResponseInfo({
      show: false,
      title: 'Error!',
      status: 'error',
      message,
    });
  };

  const handleSubmit = async () => {
    formik.setSubmitting(true);
    setResponseData(null);

    try {
      const response = await api(user, formik.values);
      setResponseData(response);
      successInfo(`${response.message}. SUUID: ${response.suuid}`);

      // reset the form to initial state
      formik.handleReset();
    } catch (error) {
      errorInfo(error.message);
    } finally {
      formik.setSubmitting(false);
    }
  };

  return [formik, responseInfo, responseData, setResponseData];
};

export default useRegistrationForm;
