import React from 'react';
import { useNavigate } from 'react-router-dom';

const theatreSidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-no-wrap h-screen ">
      <div className="w-64 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex ">
        <div className="px-8">
          <ul className="mt-20">
            <li
              // onClick={() => navigate('/admin/dashboard')}
              className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6"
            >
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={4} y={4} width={6} height={6} rx={1} />
                  <rect x={14} y={4} width={6} height={6} rx={1} />
                  <rect x={4} y={14} width={6} height={6} rx={1} />
                  <rect x={14} y={14} width={6} height={6} rx={1} />
                </svg>
                <span className="text-sm  ml-2" onClick={() => navigate('/dashboard')}>
                  Analytics
                </span>
              </div>
            </li>
            <li
              // onClick={() => navigate('/admin/user')}
              className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6"
            >
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={4} y={4} width={6} height={6} rx={1} />
                  <rect x={14} y={4} width={6} height={6} rx={1} />
                  <rect x={4} y={14} width={6} height={6} rx={1} />
                  <rect x={14} y={14} width={6} height={6} rx={1} />
                </svg>
                <span className="text-sm  ml-2" onClick={() => navigate('/theatre-list')}>
                  Theatres
                </span>
              </div>
            </li>
            <li
              // onClick={() => navigate('/admin/theatre')}
              className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6"
            >
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={4} y={4} width={6} height={6} rx={1} />
                  <rect x={14} y={4} width={6} height={6} rx={1} />
                  <rect x={4} y={14} width={6} height={6} rx={1} />
                  <rect x={14} y={14} width={6} height={6} rx={1} />
                </svg>
                <span className="text-sm  ml-2" onClick={() => navigate('/screen-list')}>
                  Screen
                </span>
              </div>
            </li>
            <li
              // onClick={() => navigate('/admin/theatre')}
              className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6"
            >
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={4} y={4} width={6} height={6} rx={1} />
                  <rect x={14} y={4} width={6} height={6} rx={1} />
                  <rect x={4} y={14} width={6} height={6} rx={1} />
                  <rect x={14} y={14} width={6} height={6} rx={1} />
                </svg>
                <span className="text-sm  ml-2" onClick={() => navigate('/shows-list')}>
                  Shows
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default theatreSidebar;
