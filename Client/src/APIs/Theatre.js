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
export const movieCreateAPI = async (dataV, token) => {
  try {
    const { data } = await express({
      url: '/movie',
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
export const movieEditAPI = async (dataV, token) => {
  try {
    const { data } = await express({
      url: '/movie',
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
export const movieImagesEditAPI = async (dataV, token) => {
  try {
    const { data } = await express({
      url: '/movie-image',
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
export const getMovieDataAPI = async (id, token) => {
  try {
    const { data } = await express({
      url: `/movie-data/${id}`,
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

export const getAlltheatreAPI = async (token) => {
  try {
    const { data } = await express({
      url: `/admin/theatre-data`,
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
export const getUniqueTheatreAPI = async (dataV, token) => {
  try {
    const { data } = await express({
      url: `/admin/theatre-only-data/${dataV}`,
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
export const seatCharterAPI = async (dataV, token) => {
  try {
    const { data } = await express({
      url: '/seat-charter',
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
export const getSeatCharterDataAPI = async (id, token) => {
  try {
    const { data } = await express({
      url: `/seat-data/${id}`,
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
export const addShowAPI = async (dataV, token) => {
  try {
    const { data } = await express({
      url: '/add-show',
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
export const getShowDataAPI = async (token) => {
  try {
    const { data } = await express({
      url: `/show-data`,
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
export const getScreenDataAPI = async (token) => {
  try {
    const { data } = await express({
      url: `/screen-data`,
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
