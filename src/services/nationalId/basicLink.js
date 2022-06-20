import moment from 'moment';

import api from '../../customs/axiosNationaldInstance';

const basicLink = async (user, values) => {
  const data = {
    requestID: Date.now().toString(),
    agentID: user.USERNAME,
    msisdn: values.msisdn.toString(),
    docNumber: values.pinNumber,
    surname: values.surname,
    forenames: values.forenames,
    dateOfBirth: moment(values.dateOfBirth, 'YYYY-MM-DD').format('DDMMYYYY'),
    gender: values.gender,
    channelID: 'web',
  };

  try {
    const response = await api.post('/nationalId/linking/basic', data);
    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || error.message);
  }
};

export default basicLink;
