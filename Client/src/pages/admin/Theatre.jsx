import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Admin-UI/Sidebar';
import { getAlltheatreAPI, getUniqueTheatreAPI } from '../../APIs/Theatre';
import { useSelector } from 'react-redux';

function Theatre() {
  const currentUserToken = useSelector((state) => state?.token?.data);

  const [theatre, setTheatre] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getAlltheatre = async () => {
    const data = await getAlltheatreAPI(currentUserToken);
    if (data.status === 'success') {
      console.log(data.theatre);
      setTheatre(data.theatre);
    }
  };

  const blockTheatre = async (e) => {
    console.log(e);
    const data = await getUniqueTheatreAPI(e, currentUserToken);
    if (data.status === 'success') {
      console.log(data.newTheatre);
      setRefresh(!refresh);
    }
  };

  useEffect(() => {
    getAlltheatre();
  }, [refresh]);
  return (
    <>
      <div className="flex ">
        <div className="fixed top-0 left-0">
          {' '}
          <Sidebar />
        </div>
        <div className="sm:px-6 w-[83vw] ml-[13rem]">
          <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
            <div className="sm:flex items-center justify-center">
              <button className="mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                <p className="text-sm font-medium leading-none text-white">Theatre's</p>
              </button>
            </div>
            <div className="mt-7 overflow-x-auto">
              <table className="w-full whitespace-nowrap">
                <tbody>
                  {theatre.map((el) => (
                    <tr className="h-16 border border-gray-100 rounded">
                      <td>
                        <div className="flex items-center pl-5">
                          <p className="text-base font-medium leading-none text-gray-700 mr-2">{el.name}</p>
                        </div>
                      </td>
                      <td className="pl-5">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                            <path d="M7.5 5H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.5 10H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.5 15H16.6667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.16669 5V5.00667" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.16669 10V10.0067" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4.16669 15V15.0067" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <p className="text-sm leading-none text-gray-600 ml-2">{el.location}</p>
                        </div>
                      </td>

                      {el.isBlocked ? (
                        <td className="pl-5">
                          <button className="py-3 px-3 text-sm focus:outline-none leading-none text-green-500 bg-green-100 hover:bg-green-200 rounded" onClick={(e) => blockTheatre(el._id)}>
                            Approve
                          </button>
                        </td>
                      ) : (
                        <td className="pl-5">
                          <button className="py-3 px-3 text-sm focus:outline-none leading-none text-white-500 bg-red-600 hover:bg-red-200 rounded" onClick={(e) => blockTheatre(el._id)}>
                            Disapprove
                          </button>
                        </td>
                      )}
                      <td className="pl-4">
                        <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
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
    </>
  );
}

export default Theatre;
