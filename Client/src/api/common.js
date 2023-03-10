import express from '../utils/express'; // axios
// API for editing details profile of user
export const profileEditAPI = async (dataV, token) => {
  try {
    const { data } = await express({
      url: '/profile',
      data: dataV,
      method: 'PATCH',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    if (data?.status === 'success') return data;
    throw new Error('Something went wrong !');
  } catch (err) {
    throw err;
  }
};
// API for editing images profile of user
export const profileImageEditAPI = async (dataV, token) => {
  try {
    const { data } = await express({
      url: '/profile-image',
      data: dataV,
      method: 'PATCH',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    if (data?.status === 'success') return data;
    throw new Error('Something went wrong !');
  } catch (err) {
    throw err;
  }
};
