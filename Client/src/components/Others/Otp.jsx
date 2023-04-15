import React from 'react';

const Otp = ({ setVerify }) => {
  const verifyNumber = () => {
    setVerify(true);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white shadow rounded w-full p-10 mt-10">
        <p tabIndex={0} role="heading" aria-label="Login to your account" className="text-2xl font-extrabold leading-6 text-gray-800">
          Please enter your Otp
        </p>

        <div className="w-full flex items-center justify-between py-5">
          <hr className="w-full bg-gray-400" />

          <hr className="w-full bg-gray-400  " />
        </div>
        <div>
          <lable className="text-sm font-medium leading-none text-gray-800">Otp</lable>
          <input aria-label="enter email adress" role="input" type="email" className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
        </div>

        <div className="mt-8">
          <button onClick={verifyNumber} role="button" aria-label="create my account" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default Otp;
