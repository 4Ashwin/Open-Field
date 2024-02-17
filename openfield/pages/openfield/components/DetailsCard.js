import React from 'react';

const DetailsCard = ({ farmerName, farmLocation, cropInfo }) => (
  <div className="block max-w-[18rem] rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
    <div className="p-6">
      <h5 className="mb-1 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Farmer Details
      </h5>
      <h6 className="mb-2 text-base font-medium leading-tight text-neutral-500 dark:text-neutral-50">
        {farmerName}
      </h6>
      <p className="mb-4 text-base leading-normal text-neutral-600 dark:text-neutral-200">
        Location: {farmLocation}
      </p>
      <p className="mb-4 text-base leading-normal text-neutral-600 dark:text-neutral-200">
        Crop Info: {cropInfo}
      </p>
    </div>
  </div>
);

export default DetailsCard;
