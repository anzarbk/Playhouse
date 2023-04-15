import React, { useState, useEffect } from 'react';
import { tmdbAllMovies } from '../../utils/tmdb';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector } from 'react-redux';
import { addShowAPI, getSeatCharterDataAPI, getTheatreDataAPI } from '../../APIs/Theatre';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
//alert component
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Shows() {
  const currentUserToken = useSelector((state) => state?.token?.data);
  const currentUserId = useSelector((state) => state?.user?.data?._id);
  console.log(currentUserId); //##### This function for fetch data from redux
  const currentTheatreId = useSelector((state) => state?.theatre?.data?._id); //##### This function for fetch data from redux
  const [open, setOpen] = React.useState(false);
  const [sucess, setSucess] = useState(null);
  // const [roleButton, setRoleButton] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  let today = Date.now();

  const [value, setValue] = React.useState(dayjs(today));
  const [value2, setValue2] = React.useState(dayjs(today));
  const [movie, setMovie] = useState([]);
  const [array, setArray] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();
  const [screen, setScreen] = useState([]);
  const [serverMovie, setServerMovie] = useState();

  const [selectedShow, setSelectedShow] = useState([]);

  // const arr2 = [];
  useEffect(() => {
    async function getMovies() {
      const movies = await tmdbAllMovies(1);
      console.log(movies.data.results);
      // arr2.push(movies.data.results);
      setMovie(movies.data.results);
      if (currentTheatreId) {
        console.log('asdasdasda');
        const SeatCharter = await getSeatCharterDataAPI(currentTheatreId, currentUserToken);
        if (SeatCharter.status) {
          const nbrOfScreen = SeatCharter.seatcharter.seatCharter.length;
          createScreenName(nbrOfScreen);
        }
      } else {
        console.log('asdasdasda');
        const theatre = await getTheatreDataAPI(currentUserId, currentUserToken);
        console.log(theatre);
        if (theatre.status) {
          const SeatCharter = await getSeatCharterDataAPI(theatre.theatre[0]._id, currentUserToken);
          if (SeatCharter.status) {
            const nbrOfScreen = SeatCharter.seatcharter.seatCharter.length;
            createScreenName(nbrOfScreen);
          }
        }
      }
    }
    getMovies();
  }, []);
  const shows = [
    { label: 'Morning show', time: '10.00-12.30' },
    { label: 'Matinee', time: '1.00-3.30' },
    { label: 'First show', time: '4.00-6.30' },
    { label: 'second show', time: '07.00-9.30' },
    { label: 'Late night  show', time: '10.00-12.30' },
  ];

  const arr = [];
  const createScreenName = (nbr) => {
    for (let i = 1; i <= nbr; i++) {
      const scr = `SCREEN-${i}`;
      console.log(scr);
      arr.push(scr);
      setArray(arr);
    }
    return arr;
    console.log(arr);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedMovie);
    if (selectedMovie) {
      // const mov = selectedMovie;
      console.log(movie);
      for (let i = 0; i < movie.length; i++) {
        console.log(movie[i].original_title);
        if (selectedMovie === movie[i].original_title) {
          console.log(movie[i]);
          setServerMovie(movie[i]);
        }
      }
    }
    const toServer = {
      startate: value,
      endDate: value2,
      movie: serverMovie,
      screen,
      show: selectedShow,
    };
    console.log({ toServer });
    const data = await addShowAPI(toServer, currentUserToken);
    if (data.status === 'success') {
      setOpen(true);
      setSucess('Profile Updated successfully');
      dispatch(userDataActions.setUser(data?.redux));
      setRoleButton(true);
    }
  };

  return (
    <div className="flex justify-center mt-20 gap-2">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 border p-4 rounded   ">
          <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ display: 'flex flex-col' }}>
            <DemoContainer components={['DatePicker', 'DatePicker']}>
              <DatePicker label="Start" defaultValue={dayjs(today)} value={value} onChange={(newValue) => setValue(newValue)} />
              <DatePicker label="End" value={value2} onChange={(newValue) => setValue2(newValue)} />
            </DemoContainer>
          </LocalizationProvider>
          {movie.length > 0 && (
            <Autocomplete
              disablePortal
              id="combo-box-demo-1"
              value={selectedMovie}
              onInputChange={(event, value) => {
                setSelectedMovie(value);
              }}
              options={movie}
              getOptionLabel={(option) => option.original_title || ''}
              sx={{ width: 540 }}
              renderInput={(params) => <TextField {...params} label="Movie" />}
            />
          )}
          <Autocomplete
            disablePortal
            id="combo-box-demo-2"
            value={screen}
            onInputChange={(event, value) => {
              setScreen(value);
            }}
            options={array}
            sx={{ width: 540 }}
            renderInput={(params) => <TextField {...params} label="Screen" />}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo-3ś"
            value={selectedShow}
            onInputChange={(event, value) => {
              setSelectedShow(value);
            }}
            options={shows}
            sx={{ width: 540 }}
            renderInput={(params) => <TextField {...params} label="Show" />}
          />
        </div>
        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
          <button type="submit" className="inline-flex justify-center rounded-md bg-blue-900 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            Save
          </button>
        </div>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {sucess}
        </Alert>
      </Snackbar>
    </div>
  );
}

// import React, { useState, useEffect } from 'react';
// import { tmdbAllMovies } from '../utils/tmdb';
// import { lengthChecker } from '../utils/validators';
// import { DemoItem } from '@mui/material';
// // import DatePicker from './DatePicker';

// const Shows = () => {
//   const [movie, setMovie] = useState([]);
//   const [selectedMovie, setSelectedMovie] = useState();
//   const changeMovie = (e) => {
//     setSelectedMovie(e.target.value);
//   };

//   const [screen, setScreen] = useState();
//   const [screenError, setScreenError] = useState(false);
//   const changeScreen = (e) => {
//     setScreenError(false);
//     setScreen(e.target.value);
//   };

//   const [showName, setShowName] = useState();
//   const [showNameError, setShowNameError] = useState(false);
//   const changeShowName = (e) => {
//     setShowNameError(false);
//     setShowName(e.target.value);
//   };

//   const [time, setTime] = useState();
//   const [timeError, setTimeError] = useState(false);
//   const changeTime = (e) => {
//     setTimeError(false);
//     setTime(e.target.value);
//   };

//   const [date, setDate] = useState();
//   const [dateError, setDateError] = useState(false);
//   const changeDate = (e) => {
//     setDateError(false);
//     setDate(e.target.value);
//   };
//   const validateData = () => {
//     if (!lengthChecker(screen, 1, 15)) return;
//     if (!lengthChecker(showName, 1, 15)) return;
//     if (!lengthChecker(screen, 1, 15)) return;
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dataV = validateData();
//   };

//   useEffect(() => {
//     async function getMovies() {
//       const movies = await tmdbAllMovies(1);
//       setMovie(movies.data.results);
//     }
//     getMovies();
//   }, []);

//   return (
//     <div className=" overflow-hidden shadow sm:rounded-md">
//       {/* <DatePickers /> */}
//       <div className="w-full gap-8 bg-white px-4 py-5 sm:p-6 flex justify-center">
//         <div className="w-46 h-fit bg-slate-300 shadow shadow-slate-600  p-5 ">
//           <form onSubmit={handleSubmit}>
//             <div className="col-span-6 sm:col-span-4 ">
//               <label htmlFor="language" className="block text-sm font-medium leading-6 text-gray-900">
//                 movie
//               </label>
//               <select id="movie" value={selectedMovie} name="movie" onChange={changeMovie} autoComplete="country-name" className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
//                 {movie?.length === 0 && <option value={''}>{'Could not load movie data'}</option>}
//                 {movie?.length > 0 &&
//                   movie?.map((mov) => (
//                     <option key={mov.original_title} value={mov.original_title}>
//                       {mov.original_title}
//                     </option>
//                   ))}
//               </select>
//               {/* {movieError ? <span className="text-sm text-red-600">{`"${movie}" is an invalid input !`}</span> : <span></span>} */}
//             </div>
//             <div className="col-span-6 sm:col-span-4">
//               <DemoItem label="Uncontrolled picker" component="DateRangePicker">
//                 <DateRangePicker defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]} />
//               </DemoItem>
//               <DemoItem label="Controlled picker" component="DateRangePicker">
//                 <DateRangePicker value={value} onChange={(newValue) => setValue(newValue)} />
//               </DemoItem>
//             </div>
//             <div className="col-span-6 sm:col-span-4">
//               <label htmlFor="language" className="block text-sm font-medium leading-6 text-gray-900">
//                 show name
//               </label>
//               <input type="text" value={showName} onChange={changeShowName} name="language" id="language" autoComplete="language" className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//               {showNameError ? <span className="text-sm text-red-600">{`"${showName}" is an invalid input !`}</span> : <span></span>}
//             </div>
//             <div className="col-span-6 sm:col-span-4">
//               <label htmlFor="language" className="block text-sm font-medium leading-6 text-gray-900">
//                 time
//               </label>
//               <input type="text" value={time} onChange={changeTime} name="language" id="language" autoComplete="language" className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//               {timeError ? <span className="text-sm text-red-600">{`"${time}" is an invalid input !`}</span> : <span></span>}
//             </div>
//             <div className="col-span-6 sm:col-span-4">
//               <label htmlFor="language" className="block text-sm font-medium leading-6 text-gray-900">
//                 Date
//               </label>
//               <input type="text" value={date} onChange={changeDate} name="language" id="language" autoComplete="language" className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
//               {dateError ? <span className="text-sm text-red-600">{`"${date}" is an invalid input !`}</span> : <span></span>}
//             </div>

//             <button type="submit" className="mt-5 inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
//               Save
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Shows;
