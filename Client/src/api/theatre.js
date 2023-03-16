import express from '../utils/express'; // axios
export const theatreCreateAPI = async (dataV, token) => {
  try {
    const { data } = await express({
      url: '/theatre',
      data: dataV,
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    if (data?.status === 'success') return data;
    // throw new Error('Something went wrong !');
  } catch (err) {
    throw err;
  }
};
export const theatreEditAPI = async (dataV, token) => {
  try {
    const { data } = await express({
      url: '/theatre',
      data: dataV,
      method: 'PATCH',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    if (data?.status === 'success') return data;
    // throw new Error('Something went wrong !');
  } catch (err) {
    throw err;
  }
};

// API for editing images profile of user
export const theatreImagesEditAPI = async (dataV, token) => {
  try {
    const { data } = await express({
      url: '/theatre-image',
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
export const getTheatreDataAPI = async (id, token) => {
  try {
    const { data } = await express({
      url: `/theatre-data/${id}`,
      method: 'GET',
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
