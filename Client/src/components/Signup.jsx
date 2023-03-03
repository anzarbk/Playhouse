/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */

import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from '../axios/server';
import {
  // RecaptchaVerifier,
  signInWithPopup,
  // signInWithPhoneNumber,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { firebaseAuth } from '../config/firebase';
import { FirebaseError } from 'firebase/app';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import tokenDataActions from '../redux/tokenSlice';
const Signup = ({ setCurrentPage, handleClose }) => {
  //use form hook;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //useState for error validation;
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  //

  //###################################
  const password = useRef({});
  password.current = watch('password', '');

  // form-hook pattern function to validate both password;
  const validatePasswordMatch = (val) => {
    const passwordVal = watch('password');
    return val === passwordVal || 'password do not match !';
  };

  // this function handle fire base to authenticate with email&password
  const atSubmit = async (input) => {
    try {
      const { email, password, name } = input;
      if (!email || !password) throw new Error('Missing password or email !');
      const userCred = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      const { user } = userCred;
      const toServer = { email, password, name, accessToken: await user.getIdToken() };
      const { data } = await axios.post('auth/signup', toServer);
      if (data?.status === 'success') {
        console.log(data);
        // Set User data on redux, localstorage
        dispatch(
          setUser({
            name: data.name,
            email: data.email,
            loggedIn: true,
          })
        );
        // dispatch(
        //   tokenDataActions.setToken({
        //     token: data.token,
        //     status: true,
        //   })
        // );
      }
      //show notification
      //close modal
      handleClose();
    } catch (err) {
      console.log(err);
      if (err instanceof FirebaseError) {
        if (err.message.split(' ')[2] === '(auth/email-already-in-use).') {
          setErrorMessage('Email already exists !');
          return;
        }
        setErrorMessage('Please provide valid input !');
        return;
      }
      setErrorMessage('Somrthing went wrong !');
    }
  };

  //
  const onError = (e) => {
    try {
      e.preventDefault();
    } catch (error) {}
  };

  // Function to authenticate with google
  const googleSubmit = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(firebaseAuth, provider);
      GoogleAuthProvider.credentialFromResult(result);
      const { user } = result;
      const toServer = {
        userName: user.displayName,
        email: user.email,
        image: user.photoURL,
        accessToken: await user.getIdToken(),
      };
      const { data } = await axios.post('auth/googleSignup', toServer);
      if (data?.status === 'success') {
        //  Set User data on redux, localstorage
        //  show notification
        // close modal
        handleClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  //
  // const generateReacptcha = () => {
  //   window.recaptchaVerifier = new RecaptchaVerifier(
  //     'sign-in-button',
  //     {
  //       size: 'invisible',
  //       callback: (response) => {},
  //     },
  //     firebaseAuth
  //   );
  // };

  // Send OTP to mobile
  // const sendOtp = (num) => {
  //   try {
  //     generateReacptcha();
  //     const phoneNum = `+91${num}`;
  //     const appVerifier = window.recaptchaVerifier;
  //     signInWithPhoneNumber(firebaseAuth, phoneNum, appVerifier).then((res) => {
  //       window.confirmationResult = res;
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // Handle 'Verify OTP' button click
  // const handleVerifyButton = async (event) => {
  //   try {
  //     let confirmationResult = window.confirmationResult;
  //     const confObj = await confirmationResult?.confirm(/* OTP */);
  //     if (confObj?.user) {
  //       console.log('Verified');
  //     }
  //   } catch (err) {
  //     console.log(err?.message);
  //   }
  // };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white shadow rounded w-full p-10 mt-10">
        <p tabIndex={0} role="heading" aria-label="Register your account" className="text-2xl font-extrabold leading-6 text-gray-800">
          Register your account{''}
        </p>
        <p className="text-sm mt-4 font-medium leading-none text-gray-500">
          Do yo have an account?{' '}
          <span
            onClick={() => {
              setCurrentPage('login');
            }}
            tabIndex={0}
            role="link"
            aria-label="Sign up here"
            className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
          >
            {' '}
            Login here
          </span>
        </p>
        <button onClick={googleSubmit} aria-label="Continue with google" role="button" className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10">
          <svg width={19} height={20} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z" fill="#4285F4" />
            <path d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z" fill="#34A853" />
            <path d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z" fill="#FBBC05" />
            <path d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z" fill="#EB4335" />
          </svg>
          <p className="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
        </button>

        <div className="w-full flex items-center justify-between py-5">
          <hr className="w-full bg-gray-400" />
          <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
          <hr className="w-full bg-gray-400  " />
        </div>
        <form onSubmit={handleSubmit(atSubmit, onError)}>
          <div className="mt-6  w-full">
            <label className="text-sm font-medium leading-none text-gray-800">Username</label>
            <input
              aria-label="enter your username"
              role="input"
              type="text"
              className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              {...register('name', {
                required: 'required',
                maxLength: {
                  value: 20,
                  message: 'Letter must less than 20',
                },
                minLength: {
                  value: 5,
                  message: 'Letter must greater than 5',
                },
              })}
            />
            {errors?.name && <span className="text-sm text-[#ff0000]">{errors.name.message}</span>}
          </div>
          <div className="mt-6  w-full">
            <label className="text-sm font-medium leading-none text-gray-800">Email</label>
            <input
              aria-label="enter email address"
              role="input"
              onFocus={() => {
                setErrorMessage('');
              }}
              type="email"
              className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              {...register('email', {
                required: 'please fill the field',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email address',
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
            <label className="text-sm font-medium leading-none text-gray-800">Password</label>
            <div className="relative  items-center justify-center">
              <input
                aria-label="enter Password"
                role="input"
                type="password"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                {...register('password', {
                  required: 'required',
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=])([a-zA-Z\d@#$%^&+=]){6,}$/,
                    message: 'Password must contain at least one uppercase letter, one lowercase letter, one number,one symbol and be at least 6 characters long',
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
          <div className="mt-6  w-full">
            <label className="text-sm font-medium leading-none text-gray-800"> Confirm Password</label>
            <div className="relative items-center justify-center">
              <input
                aria-label="confirm Password"
                role="input"
                type="password"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                {...register('confirm', {
                  required: 'required',
                  validate: validatePasswordMatch,
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
              {errors?.confirm && <span className="text-sm text-[#ff0000]">{errors.confirm.message}</span>}
              <div className="absolute right-0 mt-2 mr-3 cursor-pointer"></div>
            </div>
          </div>
          {/* <div className="mt-6  w-full">
            <label className="text-sm font-medium leading-none text-gray-800">Mobile number</label>
            <div className="relative items-center justify-center">
              <input
                aria-label="enter Password"
                role="input"
                type="text"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                {...register('phone', {
                  required: 'required',
                  minLength: {
                    value: 10,
                    message: 'Mobile number length should be at least 10 numbers',
                  },
                  maxLength: {
                    value: 13,
                    message: 'Mobile number cannot exceed more than 13 numbers',
                  },
                })}
              />
              {errors?.phone && <span className="text-sm text-[#ff0000]">{errors.phone.message}</span>}
              <div className="absolute right-0 mt-2 mr-3 cursor-pointer"></div>
            </div>
          </div> */}
          <div className="mt-8">
            <button type="submit" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
              Register
            </button>
            <div id="sign-in-button"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
