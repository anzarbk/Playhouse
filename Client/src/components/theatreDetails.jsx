import React, { useState, useEffect } from 'react';
import { lengthChecker } from '../utils/validators'; //import function for validation for string and email from validator.js
import { getStates, getCities } from '../utils/locationFinder'; //import function for getting states ans cities from locationFinder.js
import { useDispatch, useSelector } from 'react-redux';
import { theatreEditAPI, theatreCreateAPI, getTheatreDataAPI } from '../api/theatre'; // FunctionAPI that helps to send data to backend
//Alert snackbar
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import TheatreImage from '../ui/theatre/theatreImage';
//alert component
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const TheatreDetails = () => {
  //to import datas from redux
  const currentUserToken = useSelector((state) => state?.token?.data);
  const currentUserRole = useSelector((state) => state?.role?.data);
  const currentUserId = useSelector((state) => state?.user?.data?._id);
  // const dispatch = useDispatch();

  //###################### Snakbar UseState
  const [open, setOpen] = React.useState(false);
  const [sucess, setSucess] = useState(null);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  // Function to get theatre data from server
  const getTheatreFromServer = async () => {
    const theatre = await getTheatreDataAPI(currentUserId, currentUserToken);
    if (theatre.status === 'success') {
      console.log(theatre);
      setTheatreName(theatre?.theatre[0].name || '');
      setLocation(theatre?.theatre[0].location || '');
      setFacilities(theatre?.theatre[0].facilities || '');
      setAbout(theatre?.theatre[0].about || '');
      setAddress(theatre?.theatre[0].address || '');
      setState(theatre?.theatre[0].state || '');
      setTown(theatre?.theatre[0].town || '');
      setPinCode(theatre?.theatre[0].pincode || '');
      setImageUrl(theatre?.theatre[0].image || null);
      setBannerUrl(theatre?.theatre[0].banner || null);
    }
  };

  const [theatreName, setTheatreName] = useState('');
  const [theatreNameError, setTheatreNameError] = useState(false);
  const changeTheatreName = (e) => {
    setTheatreNameError(false);
    setTheatreName(e.target.value);
  };
  const [location, setLocation] = useState('');
  const [locationError, setLocationError] = useState(false);
  const changeLocation = (e) => {
    setLocationError(false);
    setLocation(e.target.value);
  };
  const [facilities, setFacilities] = useState('');
  const [facilitiesError, setFacilitiesError] = useState(false);
  const changeFacilities = (e) => {
    setFacilitiesError(false);
    setFacilities(e.target.value);
  };
  const [about, setAbout] = useState('');
  const [aboutError, setAboutError] = useState(false);
  const changeAbout = (e) => {
    setAboutError(false);
    setAbout(e.target.value);
  };
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState(false);
  const changeAddress = (e) => {
    setAddressError(false);
    setAddress(e.target.value);
  };
  const [state, setState] = useState('');
  const changeState = (e) => {
    setState(e.target.value);
  };
  const [town, setTown] = useState('');
  const changeTown = (e) => {
    setTown(e.target.value);
  };
  const [pinCode, setPinCode] = useState('');
  const [pinCodeError, setPinCodeError] = useState(false);
  const changePinCode = (e) => {
    setPinCodeError(false);
    setPinCode(e.target.value);
  };

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [imageUrl, setImageUrl] = useState(null);
  const [bannerUrl, setBannerUrl] = useState(null);

  const verifyData = () => {
    //############## This function is for validating the entire form

    if (!lengthChecker(theatreName, 4, 30)) {
      setTheatreNameError(true);
      return false;
    }
    setTheatreNameError(false);

    if (!lengthChecker(location, 4, 30)) {
      setLocationError(true);
      return false;
    }
    setLocationError(false);

    if (!lengthChecker(facilities, 4, 100)) {
      setFacilitiesError(true);
      return false;
    }
    setFacilitiesError(false);

    if (!lengthChecker(about, 6, 200)) {
      setAboutError(true);
      return false;
    }
    setAboutError(false);

    if (!lengthChecker(address, 6, 100)) {
      setAddressError(true);
      return false;
    }
    setAddressError(false);

    if (!lengthChecker(pinCode, 6, 6)) {
      setPinCodeError(true);
      return false;
    }
    setPinCodeError(false);

    return {
      theatreName,
      location,
      facilities,
      about,
      address,
      state,
      town,
      pinCode,
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataV = verifyData();
    if (!dataV || !currentUserToken) return;
    if (currentUserRole === 'theatre') {
      const data = await theatreEditAPI(dataV, currentUserToken);
      if (data.status === 'success') {
        setOpen(true);
        setSucess('Profile Updated successfully');
      }
    } else {
      const data = await theatreCreateAPI(dataV, currentUserToken);
      if (data.status === 'success') {
        setOpen(true);
        setSucess('Profile Updated successfully');
      }
    }
  };
  //to render theatre details if any
  useEffect(() => {
    getTheatreFromServer();
  }, []);
  // to render states name from API
  useEffect(() => {
    const states = getStates('IN');
    setStates(states);
  }, []);
  //to show cities if state is selected
  useEffect(() => {
    if (!states) return;
    const [stateObj] = states.filter((st) => st.name === state);
    const citiesArr = getCities('IN', stateObj?.isoCode);
    setCities(citiesArr);
  }, [state]);
  return (
    <div className="w-screen flex flex-col items-center py-5">
      <div className="flex flex-col justify-center md:col-span-2  w-6/12">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-6 text-gray-900">Theatre</h3>
            <p className="mt-1 text-sm text-gray-600">This information will be displayed publicly so be careful what you share.</p>
          </div>
        </div>
        <TheatreImage imageUrl={imageUrl} setImageUrl={setImageUrl} bannerUrl={bannerUrl} setBannerUrl={setBannerUrl} />
      </div>

      <div className="mt-10 sm:mt-0 py-5 w-6/12">
        <div className=" md:gap-6">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-6 text-gray-900">Theatre Information</h3>
                <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="theatreName" className="block text-sm font-medium leading-6 text-gray-900">
                        Theatre name
                      </label>
                      <input type="text" name="theatreName" onChange={changeTheatreName} value={theatreName} id="theatreName" autoComplete="given-name" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                      {theatreNameError ? <span className="text-sm text-red-600">{`"${theatreName}" is an invalid input !`}</span> : <span></span>}
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                        Location
                      </label>
                      <input type="text" name="location" onChange={changeLocation} value={location} id="location" autoComplete="location" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                      {locationError ? <span className="text-sm text-red-600">{`"${location}" is an invalid input !`}</span> : <span></span>}
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
                        Facilities
                      </label>
                      <input type="text" name="facilities" onChange={changeFacilities} value={facilities} id="facilities" autoComplete="facilities" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                      {facilitiesError ? <span className="text-sm text-red-600">{`"${facilities}" is an invalid input !`}</span> : <span></span>}
                    </div>
                    <div className="col-span-6">
                      <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                        About
                      </label>
                      <div className="mt-2">
                        <textarea id="about" name="about" onChange={changeAbout} value={about} rows="3" className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"></textarea>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">Brief description for your theatre. </p>
                      {aboutError ? <span className="text-sm text-red-600">{`"${about}" is an invalid input !`}</span> : <span></span>}
                    </div>
                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                        Street address
                      </label>
                      <input type="text" name="address" onChange={changeAddress} value={address} id="street-address" autoComplete="street-address" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                      {addressError ? <span className="text-sm text-red-600">{`"${address}" is an invalid input !`}</span> : <span></span>}
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="country" className="flex text-sm font-medium leading-6 text-gray-900 flex-col">
                        State
                        <span className="text-[12px] font-extralight  "> *must select this field</span>
                      </label>
                      <select id="state" value={state} name="state" disabled={states?.length === 0} onChange={changeState} autoComplete="country-name" className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        {states?.length === 0 && <option value={''}>{'Could not load state data'}</option>}
                        {states?.length > 0 &&
                          states?.map((st) => {
                            return (
                              <option key={st.name} value={st.name}>
                                {st.name}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3  lg:col-span-2">
                      <label htmlFor="country" className="flex text-sm font-medium leading-6 text-gray-900 flex-col">
                        Town
                        <span className="text-[12px] font-extralight  "> *must select this field</span>
                      </label>
                      <select id="town" name="town" value={town} disabled={cities?.length === 0} onChange={changeTown} autoComplete="country-name" className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        {cities?.length === 0 && <option value={''}>{'Could not load city data'}</option>}
                        {cities?.length > 0 &&
                          cities.map((city) => (
                            <option key={city.name} value={city.name}>
                              {city.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal-code" className="flex text-sm font-medium leading-6 text-gray-900 flex-col">
                        ZIP / Postal code
                        <span className="text-[12px] font-extralight  "> *must select this field</span>
                      </label>
                      <input type="text" name="pincode" onChange={changePinCode} value={pinCode} id="postal-code" autoComplete="postal-code" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                      {pinCodeError ? <span className="text-sm text-red-600">{`"${pinCode}" is an invalid input !`}</span> : <span></span>}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button type="submit" className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200"></div>
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
