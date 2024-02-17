import Navbar from "@/components/navbar";
import React, { useState } from "react";
import DetailsCard from "./components/DetailsCard";
import SoilTestResultsCard from "./components/SoilTestResultsCard";
import { pesticidesData, farmers, DistributorInfo } from "../_data.js";
import FarmerModal from "./components/FarmerModal";
function distributor_profile(props) {
  let [modalVisible, setModalVisible] = useState(false);
  let [currentPesticide, setCurrentPesticide] = useState(null);
  const handleSellButtonClick = (pesticide) => {
    setCurrentPesticide(pesticide);
    setModalVisible(true);
  };

  return (
    <div>
      <Navbar />
      <div className="text-black mt-28">
        <h1>Distributor Profile</h1>
        <div className="flex">
          <div className="w-1/2 mr-4">
            <DetailsCard
              userType={"Distributor"}
              farmerName={DistributorInfo.DistributorName}
              farmLocation={DistributorInfo.Outlet_loc}
              cropInfo={DistributorInfo.Instock}
            />
          </div>
          <div className="w-1/2">
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-semibold mb-2">
                No of farmers as customers
              </h2>
              <p className="text-red-700">147</p>
            </div>
          </div>
        </div>

        <table className="w-fullshadow-lg rounded-lg mt-4">
          <thead>
            <tr>
              <th className="p-3 text-left">Pesticide Id</th>
              <th className="p-3 text-left">Batch No</th>
              <th className="p-3 text-left">Pesticide Name</th>
              <th className="p-3 text-left">Company Produced</th>
              <th className="p-3 text-left">Targetted Pests</th>
            </tr>
          </thead>
          <tbody>
            {pesticidesData.map((fertilizer, index) => (
              <tr key={index}>
                <td className="p-3">{fertilizer.pesticideId}</td>
                <td className="p-3">{fertilizer.batchNo}</td>
                <td className="p-3">{fertilizer.pesticideName}</td>
                <td className="p-3">{fertilizer.companyProduced}</td>
                <td className="p-3">{fertilizer.targetedPests}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleSellButtonClick(fertilizer)}
                    className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                  >
                    Sell
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <FarmerModal
        isOpen={modalVisible}
        pesticide={currentPesticide}
        onClose={() => {
          setModalVisible(false);
        }}
      />
    </div>
  );
}

export default distributor_profile;
