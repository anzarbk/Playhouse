import React from 'react';

const Search = () => {
  return (
    <div className="bg-transparent absolute flex justify-center w-full mt-3">
      <input type="text" className="w-40 md:w-96 h-7 bg-white rounded-xl absolute text-black px-3 border border-gray-500 text-sm hover:shadow-md hover:shadow-blue-500" placeholder="Search." />
    </div>
  );
};

export default Search;
