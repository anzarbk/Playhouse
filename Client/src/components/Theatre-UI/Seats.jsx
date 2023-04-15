import React, { useState, useEffect } from 'react';
import { seatCharter } from '../../utils/utilFuctions';
import { numChecker } from '../../utils/validators';
import { useDispatch, useSelector } from 'react-redux';
import { seatCharterAPI } from '../../APIs/Theatre';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { theatreDataActions } from '../../redux/theatreSlice';
//alert component
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Seats = ({ setSeatCharter }) => {
  const [seats, setSeats] = useState([]);
  const [row, setRow] = useState('');
  const [finale, setFinale] = useState([]);
  //#####
  const [open, setOpen] = React.useState(false);
  const [sucess, setSucess] = useState(null);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const [rowError, setRowError] = useState(false);
  const changeRow = (e) => {
    setRowError(false);
    setRow(e.target.value);
  };
  const [column, setColumn] = useState('');
  const [columnError, setColumnError] = useState(false);
  const changeColumn = (e) => {
    setColumnError(false);
    setColumn(e.target.value);
  };
  const dispatch = useDispatch();

  const verifyData = () => {
    //############## This function is for validating the entire form

    if (!numChecker(row, 1, 100)) {
      setRowError(true);
      return false;
    }
    setRowError(false);

    if (!numChecker(column, 1, 100)) {
      setColumnError(true);
      return false;
    }
    setColumnError(false);

    return {
      row,
      column,
    };
  };
  const handleSubmit2 = (e) => {
    e.preventDefault();
    const dataV = verifyData();
    if (!dataV) return;
    const { row, column } = dataV;
    const seatChart = seatCharter(row, column);
    console.log({ seatChart });
    setSeats(seatChart);
  };

  const makeFinal = () => {
    const final = [];
    for (let i = 0; i < row; i++) {
      final.push(<RowComp arr={seats} row={i + 1} />);
    }
    setFinale(final);
  };

  const selectSeat = async (no) => {
    const seatClone = [...seats];
    seatClone.forEach((el) => {
      if (el.seatNumber === no) {
        el.isAvailable = !el.isAvailable;
      }
    });

    setSeats(seatClone);
  };
  useEffect(() => {
    makeFinal();
  }, [seats]);

  const RowComp = ({ arr, row }) => {
    return (
      <div className="flex justify-center  w-[75vw] my-3 gap-3 ">
        {arr.map((el) => {
          if (el.row === row)
            return (
              <div key={el.seatNumber} className={`border border-[skyblue] cursor-pointer ${el.isAvailable ? 'bg-[limegreen]' : 'bg-red-700'}  text-center`}>
                <p className="w-4 h-4" onClick={() => selectSeat(el.seatNumber)}></p>
              </div>
            );
        })}
      </div>
    );
  };
  const currentUserToken = useSelector((state) => state?.token?.data);
  const uploadTheatre = async () => {
    const data = seats;
    const charter = await seatCharterAPI(data, currentUserToken);
    if (charter.status === 'success') {
      console.log(charter);
      setOpen(true);
      dispatch(theatreDataActions.setTheatre(charter?.theatre));
      setSucess('seat Updated successfully');
    }
    // setSeatCharter(false);
    console.log(charter);
  };
  return (
    <div className="flex flex-col justify-center mt-10">
      <div className="w-100vw flex justify-center mt-4">
        <form onSubmit={handleSubmit2} className="w-6/12">
          <div className="col-span-6 sm:col-span-4">
            <label htmlFor="theatreName" className="block text-sm font-medium leading-6 text-gray-900">
              no of Rows
            </label>
            <input type="number" name="theatreName" onChange={changeRow} value={row} id="theatreName" autoComplete="given-name" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            {rowError ? <span className="text-sm text-red-600">{`"${row}" is an invalid input !`}</span> : <span></span>}
          </div>
          <div className="col-span-6 sm:col-span-4">
            <label htmlFor="theatreName" className="block text-sm font-medium leading-6 text-gray-900">
              no of Column
            </label>
            <input type="number" name="theatreName" onChange={changeColumn} value={column} id="theatreName" autoComplete="given-name" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            {columnError ? <span className="text-sm text-red-600">{`"${column}" is an invalid input !`}</span> : <span></span>}
          </div>
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button type="submit" className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
              Save
            </button>
          </div>
        </form>
      </div>
      {finale.length !== 0 ? (
        <div className="m-auto border-rose-600 border rounded p-3 overflow-auto">
          <div className="border-black border rounded w-6/12 h-[12px] mb-[36px] mx-auto "></div>
          {finale}
        </div>
      ) : (
        <p className="flex justify-center font-extrabold text-red-500">Please input values !</p>
      )}
      <div className="flex justify-center bg-gray-50 px-4  pb-16 pt-20 text-right sm:px-6">
        {seats.length !== 0 ? (
          <button type="submit" className="inline-flex justify-center rounded-md bg-green-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" onClick={uploadTheatre}>
            Upload the theatre
          </button>
        ) : (
          ''
        )}
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {sucess}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Seats;
