import api from '../../customs/axiosNationaldInstance';

const mfsRegister = async (user, values) => {
  const data = {
    requestID: Date.now().toString(),
    agentID: user.USERNAME,
    docNumber: values.pinNumber,
    surname: values.surname,
    msisdn: values.msisdn.toString(),
    iccid: values.iccid.toString(),
    alternativeNumber: values.alternativeNumber.toString(),
    nextOfKin: values.nextOfKin,
    cellID: 'null',
    channelID: 'web',
  };

  try {
    const response = await api.post('/nationalId/register/mfs', data);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || error.message);
  }
};

export default mfsRegister;
