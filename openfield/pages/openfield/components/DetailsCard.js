import React from 'react';

const DetailsCard = ({ userType, farmerName, farmLocation, cropInfo }) => (
  <div className="block max-w-[18rem] rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
    <div className="p-6">
      <h5 className="mb-1 text-xl font-medium leading-tight text-black">
        {userType} Details
      </h5>
      <h6 className="mb-2 text-base font-medium leading-tight text-black">
        {farmerName}
      </h6>
      <p className="mb-4 text-base leading-normal text-black">
        Location: {farmLocation}
      </p>
      <p className="mb-4 text-base leading-normal text-black">
        {cropInfo}
      </p>
    </div>
  </div>
);

export default DetailsCard;
