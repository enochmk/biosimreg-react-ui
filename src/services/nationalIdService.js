import axios from 'axios';
import moment from 'moment';

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_SIMREG_URL}/nonbiometric`,
  timeout: 60000,
});

export const registration = async (user, values) => {
  const data = {
    requestID: Date.now().toString(),
    agentID: user.msisdn,
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
    const response = await axiosInstance.post('registration', data);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || error.message);
  }
};

export const reRegistration = async (user, values) => {
  const data = {
    requestID: Date.now().toString(),
    agentID: user.msisdn,
    msisdn: values.msisdn.toString(),
    nationalID: values.pinNumber,
    surname: values.surname,
    forenames: values.forenames,
    dateOfBirth: moment(values.dateOfBirth, 'YYYY-MM-DD').format('DDMMYYYY'),
    gender: values.gender,
    channelID: 'web',
  };

  try {
    const response = await axiosInstance.post('reRegistrationBasic', data);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || error.message);
  }
};

export const registrationMFS = async (user, values) => {
  const data = {
    ...values,
    dateOfBirth: moment(values.dateOfBirth, 'YYYY-MM-DD').format('DDMMYYYY'),
    nationalID: values.pinNumber,
    requestID: Date.now().toString(),
    agentID: user.msisdn,
    msisdn: values.msisdn.toString(),
    channelID: 'web',
  };

  try {
    const response = await axiosInstance.post('registrationMfs', data);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || error.message);
  }
};
