import React, { useState } from 'react';
import Layout from '../../components/User-UI/Layout';
// import { seatCharter } from '../utils/utilFuctions';
import Seats from '../../components/Theatre-UI/Seats';

const SeatCharter = () => {
  const [seatCharter, setSeatCharter] = useState(false);
  const [changeButton, setChangeButton] = useState(false);
  const addScreen = () => {
    setSeatCharter(true);
  };

  return (
    <Layout>
      {seatCharter && <Seats setSeatCharter={setSeatCharter} />}

      <div className="flex justify-center bg-gray-50 px-4  pb-16 pt-20 text-right sm:px-6">
        <button type="submit" onClick={addScreen} className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
          Add screen
        </button>
      </div>
    </Layout>
  );
};
export default SeatCharter;
