import axios from 'axios';

const SERVER_URL = 'http://localhost:5000/api/v1';

// get user personal statistics
export const getStatistics = async ({ accessToken }) => {
  const API_URL = SERVER_URL + '/profile/stats';
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
};
