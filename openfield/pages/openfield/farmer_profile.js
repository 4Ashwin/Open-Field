import Navbar from '@/components/navbar';
import React from 'react';
import DetailsCard from './components/DetailsCard';
import SoilTestResultsCard from './components/SoilTestResultsCard';

function farmer_profile(props) {
    const pesticidesData = [
        { pesticideId: 1, batchNo: 'ABC123', pesticideName: 'Pesticide A', ingredients: 'Ingredient X', quantity: 15, applicationMethod: 'Spray', companyProduced: 'Company X', targetedPests: 'Pests A' },
        { pesticideId: 2, batchNo: 'DEF456', pesticideName: 'Pesticide B', ingredients: 'Ingredient Y', quantity: 20, applicationMethod: 'Dust', companyProduced: 'Company Y', targetedPests: 'Pests B' },
        { pesticideId: 3, batchNo: 'GHI789', pesticideName: 'Pesticide C', ingredients: 'Ingredient Z', quantity: 25, applicationMethod: 'Liquid', companyProduced: 'Company Z', targetedPests: 'Pests C' },
        { pesticideId: 4, batchNo: 'JKL012', pesticideName: 'Pesticide D', ingredients: 'Ingredient W', quantity: 30, applicationMethod: 'Granules', companyProduced: 'Company W', targetedPests: 'Pests D' },
        { pesticideId: 5, batchNo: 'MNO345', pesticideName: 'Pesticide E', ingredients: 'Ingredient P', quantity: 12, applicationMethod: 'Mist', companyProduced: 'Company P', targetedPests: 'Pests E' },
        { pesticideId: 6, batchNo: 'PQR678', pesticideName: 'Pesticide F', ingredients: 'Ingredient Q', quantity: 18, applicationMethod: 'Foam', companyProduced: 'Company Q', targetedPests: 'Pests F' },
        { pesticideId: 7, batchNo: 'STU901', pesticideName: 'Pesticide G', ingredients: 'Ingredient R', quantity: 22, applicationMethod: 'Bait', companyProduced: 'Company R', targetedPests: 'Pests G' },
        { pesticideId: 8, batchNo: 'VWX234', pesticideName: 'Pesticide H', ingredients: 'Ingredient S', quantity: 14, applicationMethod: 'Drench', companyProduced: 'Company S', targetedPests: 'Pests H' },
        { pesticideId: 9, batchNo: 'YZA567', pesticideName: 'Pesticide I', ingredients: 'Ingredient T', quantity: 28, applicationMethod: 'Smoke', companyProduced: 'Company T', targetedPests: 'Pests I' },
        { pesticideId: 10, batchNo: 'BCD890', pesticideName: 'Pesticide J', ingredients: 'Ingredient U', quantity: 35, applicationMethod: 'Injection', companyProduced: 'Company U', targetedPests: 'Pests J' },
      ];
      const farmerInfo = {
        farmerName: 'John Doe',
        farmLocation: 'Farmville, USA',
        cropInformation: 'Corn',
        cropRotationHistory: '', 
        harvestRecords: 'No records available',
        organicFarmingCertification: 'Certified',
      };
      

    return (
        <div>
            <Navbar />
            <div className='text-black mt-28'>
                <h1>Farmer Profile</h1>
                <div className="flex">
                    <div className="w-1/2 mr-4">
                        <DetailsCard
                        userType={'Farmer'}
                        farmerName={farmerInfo.farmerName}
                        farmLocation={farmerInfo.farmLocation}
                        cropInfo={farmerInfo.cropInformation}
                        />
                    </div>
                    <div className="w-1/2">
                        <SoilTestResultsCard soilTestResults />
                    </div>
                    <div className="w-1/2">
                        <div className="bg-white p-4 rounded shadow">
                            <h2 className="text-lg font-semibold mb-2">Organic Certification</h2>
                            <p className="text-red-700">Status: Not approved</p>
                        </div>
                    </div>
                </div>


                <table className='w-fullshadow-lg rounded-lg mt-4'>
                    <thead>
                        <tr >
                            <th className='p-3 text-left'>Pesticide Id</th>
                            <th className='p-3 text-left'>Batch No</th>
                            <th className='p-3 text-left'>Pesticide Name</th>
                            <th className='p-3 text-left'>ingredients</th>
                            <th className='p-3 text-left'>Quantity</th>
                            <th className='p-3 text-left'>Application Method</th>
                            <th className='p-3 text-left'>Company Produced</th>
                            <th className='p-3 text-left'>Targetted Pests</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pesticidesData.map((fertilizer, index) => (
                            <tr key={index}>
                                <td className='p-3'>{fertilizer.pesticideId}</td>
                                <td className='p-3'>{fertilizer.batchNo}</td>
                                <td className='p-3'>{fertilizer.date}</td>
                                <td className='p-3'>{fertilizer.pesticideName}</td>
                                <td className='p-3'>{fertilizer.ingredients}</td>
                                <td className='p-3'>{fertilizer.quantity}</td>
                                <td className='p-3'>{fertilizer.applicationMethod}</td>
                                <td className='p-3'>{fertilizer.companyProduced}</td>
                                <td className='p-3'>{fertilizer.targetedPests}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default farmer_profile;
