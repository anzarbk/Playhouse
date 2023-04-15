import React, { useState } from 'react';
import { uploadImage } from '../../utils/firebase';
import { Progress } from '../profile/progress';
// import { movieImagesEditAPI } from '../../api/theatre';
import { useSelector } from 'react-redux';

const MovieImage = ({ imageUrl, setImageUrl, bannerUrl, setBannerUrl }) => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const currentUserToken = useSelector((state) => state?.token?.data);
  const handleImageUpload = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      if (!e.target.files[0]) return;
      const imageFile = e.target.files[0];
      const imageUploaded = await uploadImage(imageFile, 'movie-images');
      setImageUrl(imageUploaded);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };
  const handleBannerUpload = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      if (!e.target.files[0]) return;
      const imageFile = e.target.files[0];
      const imageUploaded = await uploadImage(imageFile, 'movie-banners');
      setBannerUrl(imageUploaded);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const toServer = { image: imageUrl, banner: bannerUrl };
      const data = await movieImagesEditAPI(toServer, currentUserToken);
      if (data.status === 'success') {
        setLoading(false);
      }
    } catch (error) {
      alert(error?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
          <div>
            {loading && <Progress value={progress} />}
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
              <input type="file" onChange={handleImageUpload} accept="image/*" className="w-11/12 h-10 rounded-md border border-gray-300 bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
            <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
              {!bannerUrl && (
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              )}
              {bannerUrl && <img src={bannerUrl} alt="profile-banner" />}
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
          <input type="file" onChange={handleBannerUpload} accept="image/*" className="w-11/12 h-10 rounded-md border border-gray-300 bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50" />
          <button type="submit" className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default MovieImage;
