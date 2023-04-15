import React, { useState, useEffect } from 'react';
import { getScreenDataAPI } from '../../APIs/Theatre';
import { useSelector } from 'react-redux';
import Layout from '../../components/User-UI/Layout';
import TheatreSidebar from '../../components/Theatre-UI/Dashboard/TheatreSidebar';
const ScreenList = () => {
  const currentUserToken = useSelector((state) => state?.token?.data);
  const currentUser = useSelector((state) => state?.user?.data?._id); //##### This function for fetch data from redux
  const [name, setName] = useState([]);
  const [screen, setScreen] = useState([]);
  const arr = [];
  const createScreenName = (nbr) => {
    for (let i = 1; i <= nbr; i++) {
      const scr = `SCREEN-${i}`;
      console.log(scr);
      arr.push(scr);
      setName(arr);
    }
    console.log(name);
    return arr;
  };
  useEffect(() => {
    const getScreen = async () => {
      const screen = await getScreenDataAPI(currentUserToken);
      console.log(screen);
      if (screen.status) {
        const data = screen.screen;
        setScreen(data);
        const screens = screen.screen[0].seatCharter.length;
        createScreenName(screens);
      }
    };
    getScreen();
  }, []);
  return (
    <Layout>
      <div className=" ">
        <div className="flex ">
          {' '}
          <TheatreSidebar />
          <div className="sm:px-6 w-[83vw]  py-8">
            <div className="bg-white py-8 md:py-7 px-4 md:px-8 xl:px-10">
              <div className="sm:flex items-center justify-center">
                <button className="mt-4 sm:mt-0 inline-flex items-start justify-end px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                  <p className="text-sm font-medium leading-none text-white">Screen List</p>
                </button>
              </div>
              <div className="mt-7 overflow-x-auto">
                <table className="w-full whitespace-nowrap">
                  <tbody>
                    {name?.map((el) => (
                      <tr key={el._id} className="h-16 border border-gray-100 rounded">
                        <td>
                          <div className="flex items-center pl-5">
                            <p className="text-base font-medium leading-none text-gray-700 mr-2"> {el} </p>
                          </div>
                        </td>
                        <td className="pl-4">
                          <button className="text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                        </td>
                        <td className="pl-5">
                          <button
                            className="py-3 px-3 text-sm focus:outline-none leading-none text-red-500 bg-red-100 hover:bg-red-200 rounded"
                            // onClick={(e) => blockUser(el._id)}
                          >
                            Delete
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
      </div>
    </Layout>
  );
};

export default ScreenList;
