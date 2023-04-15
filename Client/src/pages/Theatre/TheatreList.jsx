import React, { useState, useEffect } from 'react';
import { getTheatreDataAPI } from '../../APIs/Theatre';
import { useSelector } from 'react-redux';
// import theatre from '../../../Server/model/theatre';
import Layout from '../../components/User-UI/Layout';
import TheatreSidebar from '../../components/Theatre-UI/Dashboard/TheatreSidebar';
import { useNavigate } from 'react-router-dom';

const TheatreList = () => {
  const currentUserToken = useSelector((state) => state?.token?.data);
  const currentUser = useSelector((state) => state?.user?.data?._id); //##### This function for fetch data from redux
  const [theatre, setTheatre] = useState([]);
  const [screen, setScreen] = useState([]);
  const arr = [];
  const createScreenName = (nbr) => {
    for (let i = 1; i <= nbr; i++) {
      const scr = `SCREEN-${i}`;
      console.log(scr);
      arr.push(scr);
      setScreen(arr);
    }
    console.log(screen);
    return arr;
    console.log(arr);
  };
  useEffect(() => {
    const getTheatre = async () => {
      const theatre = await getTheatreDataAPI(currentUser, currentUserToken);
      console.log(theatre);
      if (theatre.status) {
        const data = theatre.theatre;
        setTheatre(data);
        const screens = theatre.theatre[0].seatCharter.length;
        createScreenName(screens);
      }
    };
    getTheatre();
  }, []);
  console.log(theatre);
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="flex">
        {' '}
        <TheatreSidebar />
        <div className=" w-[83vw] ml-10 py-8">
          <div className="bg-white py-8 md:py-7  ">
            <div className="sm:flex items-center justify-center">
              <button className="mt-4 sm:mt-0 inline-flex items-start justify-end px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                <p className="text-sm font-medium leading-none text-white">theatre List</p>
              </button>
            </div>
            <div className="mt-7 overflow-x-auto">
              <table className="w-full whitespace-nowrap">
                <tbody>
                  {theatre.map((el) => (
                    <tr key={el._id} className="h-16 border border-gray-100 rounded">
                      <td>
                        <div className="flex items-center pl-5">
                          <p className="text-base font-medium leading-none text-gray-700 mr-2"> {el.name} </p>
                        </div>
                      </td>

                      <td className="pl-5">
                        <div className="flex items-center">
                          <p className="text-sm leading-none text-gray-600 ml-2"> {el.location} </p>
                        </div>
                      </td>
                      {el.isBlocked ? (
                        <td className="pl-5">
                          <button className="py-3 px-3 text-sm focus:outline-none leading-none text-green-500 bg-green-100 hover:bg-green-200 rounded">Approved</button>
                        </td>
                      ) : (
                        <td className="pl-5">
                          <button className="py-3 px-3 text-sm focus:outline-none leading-none text-white-500 bg-red-600 hover:bg-red-200 rounded">Not approved</button>
                        </td>
                      )}
                      <td className="pl-4">
                        <button onClick={() => navigate('/theatre')} className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <style>
          {` .checkbox:checked + .check-icon {
                display: flex;
            }`}
        </style>
      </div>
    </Layout>
  );
};

export default TheatreList;
