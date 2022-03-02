import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://10.81.1.188:5002/v1/nonbiometric/',
  timeout: 10000,
});

export const registration = async (user, values) => {
  const data = {
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
    const response = await axiosInstance.post('reRegistrationBasic', data);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || error.message);
  }
};

export const registrationMFS = async (user, values) => {
  const data = {
    agentID: user.msisdn,
    msisdn: values.msisdn.toString(),
    nationalID: values.pinNumber,
    surname: values.surname,
    forenames: values.forenames,
    gender: values.gender,
    dateOfBirth: values.dateOfBirth,
    nextOfKin: values.nextOfKin,
    channelID: 'web',
    cellID: null,
  };

  try {
    const response = await axiosInstance.post('registrationMfs', data);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || error.message);
  }
};
