import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../../utils/firebase';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { userDataActions } from '../../redux/userSlice';
import { tokenActions } from '../../redux/tokenSlice';
import { authActions } from '../../redux/authSlice';
import { roleDataActions } from '../../redux/roleSlice';
import { useNavigate } from 'react-router-dom';
import { signinAPI } from '../../APIs/Auth';

function Login() {
  //use form hook;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [sidebar, setsidebar] = useState();
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const onError = (e) => {
    try {
      e.preventDefault();
    } catch (error) {}
  };

  const atSubmit = async (input) => {
    console.log(input, 'input');
    try {
      const { email, password } = input;
      console.log(email, password);
      const adminCred = await signInWithEmailAndPassword(firebaseAuth, email, password);
      const { user } = adminCred;
      console.log(user);
      const toServer = { email, password, accessToken: await user.getIdToken() };
      console.log(toServer);
      const data = await signinAPI(toServer);
      dispatch(userDataActions.setUser(data?.user));
      dispatch(tokenActions.setToken(data?.token));
      dispatch(authActions.login());
      dispatch(roleDataActions.setRole(data?.user?.role));
      navigate('/admin/dashboard');
    } catch (error) {
      setErrorMessage(error?.message || 'Something went wrong !');
      console.log(error);
    }
    setErrorMessage('Something went wrong !');
  };
  return (
    <div className="h-screen bg-black w-full py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
            Login to your account
          </p>
          <form on onSubmit={handleSubmit(atSubmit, onError)}>
            <div className="mt-4">
              <lable className="text-sm font-medium leading-none text-gray-800">Email</lable>
              <input
                aria-label="enter email adress"
                role="input"
                type="email"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                {...register('email', {
                  required: 'please fill the field',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'invalid email address !',
                  },
                  minLength: {
                    value: 6,
                    message: 'Letter must greater than 5',
                  },
                })}
              />
              {errors?.email && <span className="text-sm text-[#ff0000]">{errors.email.message}</span>}
              {errorMessage && <span className="text-sm text-[#ff0000]">{errorMessage}</span>}
            </div>
            <div className="mt-6  w-full">
              <lable className="text-sm font-medium leading-none text-gray-800">Password</lable>
              <div className="relative flex items-center justify-center">
                <input
                  aria-label="enter Password"
                  role="input"
                  type="password"
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                  {...register('password', {
                    required: 'required',
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])([a-zA-Z\d@#$%^&+=]){6,}$/,
                      message: 'Password must contain at least one uppercase letter, one lowercase letter, one number,one symbol and be at least 6 characters long !',
                    },
                    min: {
                      value: 4,
                      message: 'Password length should be at least 4 characters',
                    },
                    max: {
                      value: 12,
                      message: 'Password cannot exceed more than 12 characters',
                    },
                  })}
                />
                {errors?.password && <span className="text-sm text-[#ff0000]">{errors.password.message}</span>}
                <div className="absolute right-0 mt-2 mr-3 cursor-pointer"></div>
              </div>
            </div>
            <div className="mt-8">
              <button role="button" type="submit" aria-label="create my account" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
                login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
