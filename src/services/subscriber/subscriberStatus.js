import api from '../../customs/axiosNationaldInstance';

const getSubscriberStatus = async (user, values) => {
  const data = {
    agentID: user.MSISDN,
    msisdn: values.msisdn.toString(),
    channelID: 'web',
    cellID: 'null',
  };

  try {
    const response = await api.get(
      `/subscriber/status?agentID=${data.agentID}&msisdn=${data.msisdn}&channelID=${data.channelID}`,
    );

    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || error.message);
  }
};

export default getSubscriberStatus;
