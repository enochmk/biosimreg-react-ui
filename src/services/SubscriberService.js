import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_SIMREG_URL}/subscriber`,
  // timeout: 5000,
});

export const getSubscriberStatus = async (user, values) => {
  const data = {
    agentID: user.msisdn,
    msisdn: values.msisdn.toString(),
    channelID: 'web',
    cellID: null,
  };

  try {
    const response = await axiosInstance.get(
      `check-kyc-status?agentID=${data.agentID}&msisdn=${data.msisdn}&channelID=${data.channelID}`,
    );

    return response.data;
  } catch (error) {
    throw new Error(error?.response?.data?.message || error.message);
  }
};
