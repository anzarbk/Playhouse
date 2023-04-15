import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Admin-UI/Sidebar';
import { getAllUsersAPI, getUniqueUsersAPI } from '../../APIs/Common';
import { useSelector } from 'react-redux';

function User() {
  const currentUserToken = useSelector((state) => state?.token?.data);

  const [user, setUser] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getAllUsers = async () => {
    const data = await getAllUsersAPI(currentUserToken);
    if (data.status === 'success') {
      console.log(data.user);
      setUser(data.user);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, [refresh]);

  const blockUser = async (e) => {
    console.log(e);
    const data = await getUniqueUsersAPI(e, currentUserToken);
    if (data.status === 'success') {
      console.log(data.newUser);
      setRefresh(!refresh);
    }
  };
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
              <button onclick="popuphandler(true)" className="mt-4 sm:mt-0 inline-flex items-start justify-end px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                <p className="text-sm font-medium leading-none text-white">Users</p>
              </button>
            </div>
            <div className="mt-7 overflow-x-auto">
              <table className="w-full whitespace-nowrap">
                <tbody>
                  {user.map((el) => (
                    <tr key={el._id} className="h-16 border border-gray-100 rounded">
                      <td>
                        <div className="flex items-center pl-5">
                          <p className="text-base font-medium leading-none text-gray-700 mr-2">{el.userName}</p>
                        </div>
                      </td>

                      <td className="pl-5">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                            <path d="M3.33331 17.4998V6.6665C3.33331 6.00346 3.59671 5.36758 4.06555 4.89874C4.53439 4.4299 5.17027 4.1665 5.83331 4.1665H14.1666C14.8297 4.1665 15.4656 4.4299 15.9344 4.89874C16.4033 5.36758 16.6666 6.00346 16.6666 6.6665V11.6665C16.6666 12.3295 16.4033 12.9654 15.9344 13.4343C15.4656 13.9031 14.8297 14.1665 14.1666 14.1665H6.66665L3.33331 17.4998Z" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.66669 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13.3333 9.1665V9.17484" stroke="#52525B" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <p className="text-sm leading-none text-gray-600 ml-2">{el.email}</p>
                        </div>
                      </td>
                      {el.isBlocked ? (
                        <td className="pl-5">
                          <button className="py-3 px-3 text-sm focus:outline-none leading-none text-green-500 bg-green-100 hover:bg-green-200 rounded" onClick={(e) => blockUser(el._id)}>
                            Un Block
                          </button>
                        </td>
                      ) : (
                        <td className="pl-5">
                          <button className="py-3 px-3 text-sm focus:outline-none leading-none text-white-500 bg-red-600 hover:bg-red-200 rounded" onClick={(e) => blockUser(el._id)}>
                            Block
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

export default User;
