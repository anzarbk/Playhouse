import express from '../utils/express'; //axois
//API for login user
export const signinAPI = async (dataV) => {
  try {
    const { data } = await express.post('auth/login', dataV);
    if (data?.status === 'success') return data;
    throw new Error(data?.message || 'Something went wrong !');
  } catch (err) {
    throw err;
  }
};
//API for signUp user
export const signUpAPI = async (dataV) => {
  try {
    const { data } = await express.post('auth/signup', dataV);
    if (data?.status === 'success') return data;
    throw new Error(data?.message || 'Something went wrong !');
  } catch (err) {
    throw err;
  }
};
//API for google login user
export const googleAPI = async (dataV) => {
  try {
    const { data } = await express.post('auth/googleSignup', dataV);
    if (data?.status === 'success') return data;
    throw new Error(data?.message || 'Something went wrong !');
  } catch (err) {
    throw err;
  }
};
