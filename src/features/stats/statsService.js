import { axiosPrivate } from '../../customs/axios';

// get user personal statistics
export const getStatistics = async ({ accessToken }) => {
  const response = await axiosPrivate.get('/profile/stats', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
};
