// import React, { useState, useEffect } from 'react';
// import MovieImage from '../ui/theatre/movieImage';

// const MovieDetails = () => {
//   const [movieName, setMovieName] = useState('');
//   const [movieNameError, setMovieNameError] = useState(false);
//   const changemovieName = () => {
//     setMovieNameError(false);
//     setMovieName(e.target.value);
//   };
//   const [language, setLanguage] = useState('');
//   const [languageError, setLanguageError] = useState(false);
//   const changeLanguage = () => {
//     setLanguageError(false);
//     setLanguage(e.target.value);
//   };
//   const [dimension, setDimension] = useState('');
//   const [dimensionError, setDimensionError] = useState(false);
//   const changeDimension = () => {
//     setDimensionError(false);
//     setDimension(e.target.value);
//   };
//   const [certification, setCertification] = useState('');
//   const [certificationError, setCertificationError] = useState(false);
//   const changeCertification = () => {
//     setCertificationError(false);
//     setCertification(e.target.value);
//   };
//   const [genre, setGenre] = useState('');
//   const [genreError, setGenreError] = useState(false);
//   const changeGenre = () => {
//     setGenreError(false);
//     setGenre(e.target.value);
//   };
//   // const [release, setRelease] = useState('');
//   // const [releaseError, setReleaseError] = useState(false);
//   // const changeRelease = () => {
//   //   setReleaseError(false);
//   //   setRelease(e.target.value);
//   // };
//   const [cast, setCast] = useState('');
//   const [castError, setCastError] = useState(false);
//   const changeCast = () => {
//     setCastError(false);
//     setCast(e.target.value);
//   };
//   const [crew, setCrew] = useState('');
//   const [crewError, setCrewError] = useState(false);
//   const changeCrew = () => {
//     setCrewError(false);
//     setCrew(e.target.value);
//   };
//   const [about, setAbout] = useState('');
//   const [aboutError, setAboutError] = useState(false);
//   const changeAbout = () => {
//     setAboutError(false);
//     setAbout(e.target.value);
//   };
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);

//   const verifyData = () => {
//     //############## This function is for validating the entire form
//     //Username verif

//     if (!lengthChecker(movieName, 4, 30)) {
//       setTheatreNameError(true);
//       return false;
//     }
//     setTheatreNameError(false);

//     if (!lengthChecker(language, 4, 30)) {
//       setLocationError(true);
//       return false;
//     }
//     setLocationError(false);

//     if (!lengthChecker(dimension, 4, 100)) {
//       setFacilitiesError(true);
//       return false;
//     }
//     setFacilitiesError(false);

//     if (!lengthChecker(certification, 6, 200)) {
//       setAboutError(true);
//       return false;
//     }
//     setAboutError(false);

//     if (!lengthChecker(genre, 6, 100)) {
//       setAddressError(true);
//       return false;
//     }
//     setAddressError(false);

//     if (!lengthChecker(cast, 6, 6)) {
//       setPinCodeError(true);
//       return false;
//     }
//     setPinCodeError(false);
//     if (!lengthChecker(cast, 6, 6)) {
//       setPinCodeError(true);
//       return false;
//     }
//     setPinCodeError(false);
//     if (!lengthChecker(cast, 6, 6)) {
//       setPinCodeError(true);
//       return false;
//     }
//     setPinCodeError(false);

//     return {
//       theatreName,
//       location,
//       facilities,
//       about,
//       address,
//       state,
//       town,
//       pinCode,
//     };
//   };
//   return (
//     <div className="w-screen flex flex-col items-center py-5">
//       <div className="flex flex-col justify-center md:col-span-2  w-6/12">
//         <div className="md:col-span-1">
//           <div className="px-4 sm:px-0">
//             <h3 className="text-base font-semibold leading-6 text-gray-900">Movie</h3>
//             <p className="mt-1 text-sm text-gray-600">This information will be displayed publicly so be careful what you share.</p>
//           </div>
//         </div>
//         <MovieImage />
//       </div>

//       <div className="mt-10 sm:mt-0 py-5 w-6/12">
//         <div className=" md:gap-6">
//           <div className="mt-5 md:col-span-2 md:mt-0">
//             <div className="md:col-span-1">
//               <div className="px-4 sm:px-0">
//                 <h3 className="text-base font-semibold leading-6 text-gray-900">Movie Information</h3>
//               </div>
//             </div>
//             <form action="#">
//               <div className="overflow-hidden shadow sm:rounded-md">
//                 <div className="bg-white px-4 py-5 sm:p-6">
//                   <div className="grid grid-cols-6 gap-6">
//                     <div className="col-span-6 sm:col-span-4">
//                       <label for="movieName" className="block text-sm font-medium leading-6 text-gray-900">
//                         Movie name
//                       </label>
//                       <input type="text" name="movieName" onChange={changemovieName} value={movieName} id="movieName" autoComplete="movieName" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                       {movieNameError ? <span className="text-sm text-red-600">{`"${movieName}" is an invalid input !`}</span> : <span></span>}
//                     </div>

//                     <div className="col-span-6 sm:col-span-4">
//                       <label for="language" className="block text-sm font-medium leading-6 text-gray-900">
//                         Language
//                       </label>
//                       <input type="text" name="language" onChange={changeLanguage} value={language} id="language" autoComplete="language" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                       {languageError ? <span className="text-sm text-red-600">{`"${language}" is an invalid input !`}</span> : <span></span>}
//                     </div>

//                     <div className="col-span-6 sm:col-span-4">
//                       <label for="dimension" className="block text-sm font-medium leading-6 text-gray-900">
//                         Dimension
//                       </label>
//                       <input type="text" name="dimension" onChange={changeDimension} value={dimension} id="dimension" autoComplete="dimension" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                       {dimensionError ? <span className="text-sm text-red-600">{`"${dimension}" is an invalid input !`}</span> : <span></span>}
//                     </div>
//                     <div className="col-span-6 sm:col-span-4">
//                       <label for="certification" className="block text-sm font-medium leading-6 text-gray-900">
//                         Certification
//                       </label>
//                       <input type="text" name="certification" onChange={changeCertification} value={certification} id="certification" autoComplete="certification" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                       {certificationError ? <span className="text-sm text-red-600">{`"${certification}" is an invalid input !`}</span> : <span></span>}
//                     </div>
//                     <div className="col-span-6 sm:col-span-4">
//                       <label for="genre" className="block text-sm font-medium leading-6 text-gray-900">
//                         Genre
//                       </label>
//                       <input type="text" name="genre" onChange={changeGenre} value={genre} id="genre" autoComplete="genre" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                       {genreError ? <span className="text-sm text-red-600">{`"${genre}" is an invalid input !`}</span> : <span></span>}
//                     </div>
//                     {/* <div className="col-span-6 sm:col-span-4">
//                       <label for="release" className="block text-sm font-medium leading-6 text-gray-900">
//                         Release
//                       </label>
//                       <input type="text" name="release" onChange={changeRelease} value={release} id="release" autoComplete="release" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                       {releaseError ? <span className="text-sm text-red-600">{`"${release}" is an invalid input !`}</span> : <span></span>}
//                     </div> */}
//                     <div className="col-span-6 sm:col-span-4">
//                       <label for="cast" className="block text-sm font-medium leading-6 text-gray-900">
//                         Cast
//                       </label>
//                       <input type="text" name="cast" onChange={changeCast} value={cast} id="cast" autoComplete="cast" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                       {castError ? <span className="text-sm text-red-600">{`"${cast}" is an invalid input !`}</span> : <span></span>}
//                     </div>
//                     <div className="col-span-6 sm:col-span-4">
//                       <label for="crew" className="block text-sm font-medium leading-6 text-gray-900">
//                         Crew
//                       </label>
//                       <input type="text" name="crew" onChange={changeCrew} value={crew} id="crew" autoComplete="crew" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                       {crewError ? <span className="text-sm text-red-600">{`"${crew}" is an invalid input !`}</span> : <span></span>}
//                     </div>
//                     <div className="col-span-6">
//                       <label for="about" className="block text-sm font-medium leading-6 text-gray-900">
//                         About
//                       </label>
//                       <div className="mt-2">
//                         <textarea id="about" name="about" onChange={changeAbout} value={about} rows="3" className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"></textarea>
//                       </div>
//                       <p className="mt-2 text-sm text-gray-500">Brief description for your movie. </p>
//                       {aboutError ? <span className="text-sm text-red-600">{`"${about}" is an invalid input !`}</span> : <span></span>}
//                     </div>
//                     {/* <div className="col-span-6">
//                       <label for="street-address" className="block text-sm font-medium leading-6 text-gray-900">
//                         Street address
//                       </label>
//                       <input type="text" name="street-address" id="street-address" autoComplete="street-address" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                     </div>

//                     <div className="col-span-6 sm:col-span-3 lg:col-span-2">
//                       <label for="country" className="block text-sm font-medium leading-6 text-gray-900">
//                         State
//                       </label>
//                       <select id="country" name="country" autoComplete="country-name" className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
//                         <option>Kerala</option>
//                         <option>Canada</option>
//                         <option>Mexico</option>
//                       </select>
//                     </div>
//                     <div className="col-span-6 sm:col-span-3  lg:col-span-2">
//                       <label for="country" className="block text-sm font-medium leading-6 text-gray-900">
//                         Town
//                       </label>
//                       <select id="country" name="country" autoComplete="country-name" className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
//                         <option> Kozhikode</option>
//                         <option>Canada</option>
//                         <option>Mexico</option>
//                       </select>
//                     </div> */}

//                     {/* <div className="col-span-6 sm:col-span-6 lg:col-span-2">
//                         <label for="city" className="block text-sm font-medium leading-6 text-gray-900">
//                           City
//                         </label>
//                         <input type="text" name="city" id="city" autoComplete="address-level2" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                       </div> */}

//                     {/* <div className="col-span-6 sm:col-span-3 lg:col-span-2">
//                         <label for="region" className="block text-sm font-medium leading-6 text-gray-900">
//                           State / Province
//                         </label>
//                         <input type="text" name="region" id="region" autoComplete="address-level1" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                       </div> */}

//                     {/* <div className="col-span-6 sm:col-span-3 lg:col-span-2">
//                       <label for="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
//                         ZIP / Postal code
//                       </label>
//                       <input type="text" name="postal-code" id="postal-code" autoComplete="postal-code" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//                     </div> */}
//                   </div>
//                 </div>
//                 <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
//                   <button type="submit" className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
//                     Save
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       <div className="hidden sm:block" aria-hidden="true">
//         <div className="py-5">
//           <div className="border-t border-gray-200"></div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default MovieDetails;
