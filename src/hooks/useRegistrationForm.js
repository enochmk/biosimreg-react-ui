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
    onReset: () => {
      clearResponseInfo();
    },
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

  const handleSubmit = async () => {
    formik.setSubmitting(true);
    setResponseData(null);

    try {
      const response = await api(user, formik.values);
      setResponseData(response);

      setResponseInfo({
        show: true,
        title: 'Success!',
        message: `${response.message}. SUUID: ${response.suuid}`,
        status: 'success',
      });

      // reset the form to initial state
      formik.handleReset();
    } catch (error) {
      setResponseInfo({
        show: true,
        title: 'Error!',
        message: error.message,
        status: 'error',
      });
    } finally {
      formik.setSubmitting(false);
    }
  };

  return [formik, responseInfo, responseData, setResponseData];
};

export default useRegistrationForm;
