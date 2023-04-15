import React, { useState, useEffect } from 'react';
import { storage, uploadImage } from '../../utils/firebase';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { v4 } from 'uuid';
import { Progress } from './progress';
import { useDispatch, useSelector } from 'react-redux';
import { profileImageEditAPI } from '../../APIs/Common';
import { userDataActions } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export const ProfileImage = () => {
  // console.log(roleButton);

  // const [val, setVal] = useState(false);
  const navigate = useNavigate();
  //######################  UseState for handling profile Image of the user
  const [save, setSave] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const currentUserToken = useSelector((state) => state?.token?.data);
  const currentUserImage = useSelector((state) => state?.user?.data?.image);
  const dispatch = useDispatch();

  useEffect(() => {
    setImageUrl(currentUserImage);
  }, []);

  const handleImageUpload = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      if (!e.target.files[0]) return;
      const imageFile = e.target.files[0];
      const imageUploaded = await uploadImage(imageFile, 'images');
      setImageUrl(imageUploaded);
      setLoading(false);
      setSave(true);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const toServer = { image: imageUrl };
      const data = await profileImageEditAPI(toServer, currentUserToken);
      dispatch(userDataActions.setUser(data?.user));
    } catch (error) {
      console.log(error);
      alert(error?.message);
    }
  };

  const theatreRole = () => {
    navigate('/theatre');
  };

  const hallRole = () => {
    navigate('/hall');
  };

  const concertRole = () => {
    navigate('/concert');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="space-y-6 bg-white py-5 sm:p-6">
          <div className="mt-2 w-100 flex flex-col items-center justify-center">
            {loading && <Progress />}
            <label className="block text-sm font-medium leading-6 text-gray-900">Photo</label>
            <div className="mt-2 flex items-center">
              {!imageUrl && (
                <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                  <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
              )}

              {imageUrl && <img src={imageUrl} alt="profile-image" />}
              {/* <button type="button" className="ml-5 rounded-md border border-gray-300 bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50">
                Change
              </button> */}
            </div>
          </div>
          <input
            type="file"
            onChange={
              handleImageUpload
              // (event) => {
              //   setImageUpload(event.target.files[0]);
              // }
            }
            accept="image/*"
            className="w-11/12 h-10 rounded-md border border-gray-300 bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
          />
        </div>

        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
          {/* <Button variant="contained" sx={{ backgroundColor: 'darkblue' }} disabled={false}>
            Save
          </Button> */}
          {save && (
            <button type="submit" className="inline-flex justify-center rounded-md bg-blue-900 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
              Save
            </button>
          )}
        </div>
        {/* {roleButton === 'true' ? setVal(true) : setVal(false)}
        {val && ( */}
        <div className="">
          <button onClick={theatreRole} className="w-11/12 inline-flex justify-center rounded-md bg-blue-900 py-2 m-3  text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            Switch to Theatre role
          </button>
          <button onClick={hallRole} className="w-11/12 inline-flex justify-center rounded-md bg-blue-900 py-2  m-3  text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            Switch to Hall role
          </button>
          <button onClick={concertRole} className="w-11/12 inline-flex justify-center rounded-md bg-blue-900 py-2  m-3  text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            Switch to concert role
          </button>
        </div>
        {/* )} */}
      </div>
    </form>
  );
};
