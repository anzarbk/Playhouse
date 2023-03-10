import React, { useState, useEffect } from 'react';
import axios from '../utils/express';
import { useDispatch, useSelector } from 'react-redux';
import { getStates, getCities } from '../utils/locationFinder'; //import function for getting states ans cities from locationFinder.js
import { isEmail, lengthChecker, numChecker } from '../utils/validators'; //import function for validation for string and email from validator.js
import { ProfileImage } from '../ui/profile/profileImage';
import { userDataActions } from '../redux/userSlice';
import { profileEditAPI } from '../api/common';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
//alert component
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const UserDetails = () => {
  //###################### Snakbar
  const [open, setOpen] = React.useState(false);
  const [sucess, setSucess] = useState(null);
  // const [roleButton, setRoleButton] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  //######################  UseState for handling userName of the user
  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState(false);
  const changeUserName = (e) => {
    setUserNameError(false);
    setUserName(e.target.value);
  };
  //######################  UseState for handling email of the user
  const [email, setEmail] = useState('');
  const [userEmailError, setUserEmailError] = useState(false);
  const changeEmail = (e) => {
    setUserEmailError(false);
    setEmail(e.target.value);
  };
  //######################  UseState for handling FirstName of the user
  const [firstName, setFirstName] = useState('');
  const [userFirstNameError, setUserFirstNameError] = useState(false);
  const changeFirstName = (e) => {
    setUserFirstNameError(false);
    setFirstName(e.target.value);
  };
  //######################  UseState for handling lastName of the user
  const [lastName, setLastName] = useState('');
  const [userLastNameError, setUserLastNameError] = useState(false);
  const changeLastName = (e) => {
    setUserLastNameError(false);
    setLastName(e.target.value);
  };
  //######################  UseState for handling age of the user
  const [age, setAge] = useState();
  const [userAgeError, setUserAgeError] = useState();
  const changeAge = (e) => {
    setAge(e.target.value);
  };
  //#####################  UseState for handling address1 of the user
  const [addressLine1, setAddressLine1] = useState('');
  const [userAddressLine1Error, setUserAddressLine1Error] = useState(false);
  const changeAddressLine1 = (e) => {
    setUserAddressLine1Error(false);
    setAddressLine1(e.target.value);
  };
  //#####################  UseState for handling address2 of the user
  const [addressLine2, setAddressLine2] = useState('');
  const [userAddressLine2Error, setUserAddressLine2Error] = useState(false);
  const changeAddressLine2 = (e) => {
    setUserAddressLine2Error(false);
    setAddressLine2(e.target.value);
  };
  //###################  UseState for handling town of the user
  const [town, setTown] = useState('');
  const changeTown = (e) => {
    console.log(e.target.value);
    setTown(e.target.value);
  };
  //##################  UseState for handling state of the user
  const [state, setState] = useState('');
  const changeState = (e) => {
    console.log(e.target.value);
    setState(e.target.value);
  };
  //###################  UseState for handling pincode of the user
  const [pinCode, setPinCode] = useState('');
  const [userPinCodeError, setUserPinCodeError] = useState(false);
  const changePinCode = (e) => {
    setUserPinCodeError(false);
    setPinCode(e.target.value);
  };
  //##################  UseState for handling phone number of the user
  const [phone, setPhone] = useState('');
  const [userPhoneError, setUserPhoneError] = useState(false);
  const changePhone = (e) => {
    setUserPhoneError(false);
    setPhone(e.target.value);
  };
  //#################  UseState for handling API of state and cilies of the user
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  //####################################

  const dispatch = useDispatch();

  const verifyData = () => {
    //############## This function is for validating the entire form
    //Username verif

    if (!lengthChecker(userName, 4, 20)) {
      setUserNameError(true);
      return false;
    }
    setUserNameError(false);

    if (!isEmail(email)) {
      setUserEmailError(true);
      return false;
    }
    setUserEmailError(false);

    if (!lengthChecker(firstName, 4, 30)) {
      setUserFirstNameError(true);
      return false;
    }
    setUserFirstNameError(false);

    if (!lengthChecker(lastName, 4, 30)) {
      setUserLastNameError(true);
      return false;
    }
    setUserLastNameError(false);

    if (!lengthChecker(addressLine1, 6, 60)) {
      setUserAddressLine1Error(true);
      return false;
    }
    setUserAddressLine1Error(false);

    if (!lengthChecker(addressLine2, 6, 60)) {
      setUserAddressLine2Error(true);
      return false;
    }
    setUserAddressLine2Error(false);

    if (!numChecker(age, 15, 150)) {
      setUserAgeError(true);
      return false;
    }
    setUserAgeError(false);

    if (!lengthChecker(phone, 10, 10)) {
      setUserPhoneError(true);
      return false;
    }
    setUserPhoneError(false);

    if (!lengthChecker(pinCode, 6, 6)) {
      setUserPinCodeError(true);
      return false;
    }
    setUserPinCodeError(false);

    return {
      userName,
      email,
      firstName,
      lastName,
      age,
      addressLine1,
      addressLine2,
      state,
      town,
      pinCode,
      phone,
    };
  };

  //######## This function is for submitting form data to server side
  const currentUserToken = useSelector((state) => state?.token?.data);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const dataV = verifyData();
    if (!dataV || !currentUserToken) return;
    console.log(dataV);
    console.log(currentUserToken);
    const data = await profileEditAPI(dataV, currentUserToken);
    console.log(data);
    if (data.status === 'success') {
      setOpen(true);
      setSucess('Profile Updated successfully');
      dispatch(userDataActions.setUser(data?.redux));
      setRoleButton(true);
    }
  };

  const currentUser = useSelector((state) => state?.user?.data); //##### This function for fetch data from redux
  const getUserFromRedux = () => {
    setUserName(currentUser?.userName || '');
    setEmail(currentUser?.email || '');
    setFirstName(currentUser?.firstName || '');
    setLastName(currentUser?.lastName || '');
    setAge(currentUser?.age || '');
    setPhone(currentUser?.mobileNumber || '');
    setAddressLine1(currentUser?.addressLine1 || '');
    setAddressLine2(currentUser?.addressLine2 || '');
    setTown(currentUser?.town || '');
    setState(currentUser?.state || '');
    setPinCode(currentUser?.areaPinCode || '');
  };

  //#########  UseEffect for getting use data from redux when component renders
  useEffect(() => {
    getUserFromRedux();
  }, []);

  //##########  UseEffect for getting states data from API when component renders
  useEffect(() => {
    const states = getStates('IN');
    setStates(states);
  }, []);

  //#########  UseEffect for getting cities data from API when component renders
  useEffect(() => {
    if (!state) return;
    const [stateObj] = states.filter((st) => st.name === state);
    const citiesArr = getCities('IN', stateObj?.isoCode);
    setCities(citiesArr);
  }, [state]);

  return (
    <div>
      <div className="m-10">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-6 text-gray-900">Profile</h3>
              <p className="mt-1 text-sm text-gray-600">This information will be displayed publicly so be careful what you share.</p>
            </div>
            <div className="p-10 md:col-span-2 md:mt-0">
              <ProfileImage />
            </div>
          </div>

          <div className="mt-5 md:col-span-2 md:mt-0">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-6 text-gray-900">Personal Information</h3>
                <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
              </div>
            </div>

            <div className="py-10">
              <form method="POST" onSubmit={handleSubmit}>
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      {/* USERNAME */}
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                          Username
                        </label>
                        <input type="text" name="username" id="username" onChange={changeUserName} value={userName} autoComplete="name" className={`mt-2 px-2  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 ${userNameError ? 'ring-red-600' : ''} sm:text-sm sm:leading-6`} />
                        {userNameError ? <span className="text-sm text-red-600">{`"${userName}" is an invalid input !`}</span> : <span></span>}
                      </div>

                      {/* EMAIl */}
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                          Email address
                        </label>
                        <input type="text" name="email" id="email" value={email} onChange={changeEmail} autoComplete="email" className={`mt-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  ${userEmailError ? 'ring-red-600' : ''} sm:text-sm sm:leading-6`} />
                        {userEmailError ? <span className="text-sm text-red-600">{`"${email}" is an invalid input !`}</span> : <span></span>}
                      </div>
                      {/* FIRST NAME */}
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                          First name
                        </label>
                        <input type="text" name="firstName" id="firstName" value={firstName} onChange={changeFirstName} autoComplete="first-name" className={`mt-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 ${userFirstNameError ? 'ring-red-600' : ''} sm:text-sm sm:leading-6`} />
                        {userFirstNameError ? <span className="text-sm text-red-600">{`"${firstName}" is an invalid input !`}</span> : <span></span>}
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                          Last name
                        </label>
                        <input type="text" name="lastName" id="lastName" value={lastName} autoComplete="last-name" onChange={changeLastName} className={`mt-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 ${userLastNameError ? 'ring-red-600' : ''} sm:text-sm sm:leading-6`} />
                        {userLastNameError ? <span className="text-sm text-red-600">{`"${lastName}" is an invalid input !`}</span> : <span> </span>}
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="age" className="block text-sm font-medium leading-6 text-gray-900">
                          Age
                        </label>
                        <input type="number" name="age" id="age" value={age} autoComplete="age" onChange={changeAge} className={`mt-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 ${userLastNameError ? 'ring-red-600' : ''}  sm:text-sm sm:leading-6`} />
                        {userAgeError ? <span className="text-sm text-red-600">{`"${age}" is an invalid input !`}</span> : <span> </span>}
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                          Phone number
                        </label>
                        <input type="number" name="phone" id="phone" autoComplete="phone" value={phone} onChange={changePhone} className={`mt-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 ${userLastNameError ? 'ring-red-600' : ''} sm:text-sm sm:leading-6`} />
                        {userPhoneError ? <span className="text-sm text-red-600">{`"${phone}" is an invalid input !`}</span> : <span> </span>}
                      </div>
                      <div className="col-span-6">
                        <label htmlFor="streetAddress1" className="block text-sm font-medium leading-6 text-gray-900">
                          Address line 1
                        </label>
                        <input type="text" name="streetAddress1" id="streetAddress1" value={addressLine1} onChange={changeAddressLine1} autoComplete="street-address" className={`mt-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 ${userAddressLine1Error ? 'ring-red-600' : ''} sm:text-sm sm:leading-6`} />
                        {userAddressLine1Error ? <span className="text-sm text-red-600">{`"${addressLine1}" is an invalid input !`}</span> : <span> </span>}
                      </div>
                      <div className="col-span-6">
                        <label htmlFor="streetAddress2" className="block text-sm font-medium leading-6 text-gray-900">
                          Address line 2
                        </label>
                        <input type="text" name="streetAddress2" id="streetAddress2" value={addressLine2} onChange={changeAddressLine2} autoComplete="street-address" className="mt-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        {userAddressLine2Error ? <span className="text-sm text-red-600">{`"${addressLine2}" is an invalid input !`}</span> : <span> </span>}
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="country" className="flex text-sm font-medium leading-6 text-gray-900 flex-col">
                          State
                          <span className="text-[12px] font-extralight  ">*must select this field</span>
                        </label>

                        <select id="country" disabled={states?.length === 0} onChange={changeState} name="country" autoComplete="country-name" className="mt-2 px-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                          {states?.length === 0 && <option value={''}>{'Could not load state data !'}</option>}
                          {states?.length > 0 &&
                            states.map((st) => {
                              return (
                                <option key={st.name} value={st.name}>
                                  {st.name}
                                </option>
                              );
                            })}
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="country" className="flex text-sm font-medium leading-6 text-gray-900 flex-col">
                          Town
                          <span className="text-[12px] font-extralight  ">*must select this field</span>
                        </label>

                        <select id="country" disabled={cities?.length === 0} name="country" onChange={changeTown} autoComplete="country-name" className="mt-2 px-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                          {cities?.length === 0 && <option value={''}>{'Could not load city data !'}</option>}
                          {cities?.length > 0 &&
                            cities.map((city) => {
                              return (
                                <option key={city.name} value={city.name}>
                                  {city.name}
                                </option>
                              );
                            })}
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <label htmlFor="region" className="flex text-sm font-medium leading-6 text-gray-900 flex-col">
                          ZIP / Postal code
                          <span className="text-[12px] font-extralight  ">*must add this field</span>
                        </label>
                        <input type="number" name="pin-code" id="pin-code" autoComplete="postal-code" value={pinCode} onChange={changePinCode} className="mt-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        {userPinCodeError ? <span className="text-sm text-red-600">{`"${pinCode}" is an invalid input !`}</span> : <span> </span>}
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button type="submit" className="inline-flex justify-center rounded-md bg-blue-900 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {sucess}
        </Alert>
      </Snackbar>
    </div>
  );
};
export default UserDetails;
