import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1/users/stats';

// get user personal statistics
export const getStatistics = async ({ token, msisdn }) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
