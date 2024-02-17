import Navbar from '@/components/navbar';
import React from 'react';
import DetailsCard from './components/DetailsCard';
import SoilTestResultsCard from './components/SoilTestResultsCard';

function distributor_profile(props) {
    const pesticidesData = [
        { pesticideId: 1, batchNo: 'ABC123', pesticideName: 'Pesticide A', companyProduced: 'Company X', targetedPests: 'Pests A' },
        { pesticideId: 2, batchNo: 'DEF456', pesticideName: 'Pesticide B', companyProduced: 'Company Y', targetedPests: 'Pests B' },
        { pesticideId: 3, batchNo: 'GHI789', pesticideName: 'Pesticide C', companyProduced: 'Company Z', targetedPests: 'Pests C' },
        { pesticideId: 4, batchNo: 'JKL012', pesticideName: 'Pesticide D', companyProduced: 'Company W', targetedPests: 'Pests D' },
        { pesticideId: 5, batchNo: 'MNO345', pesticideName: 'Pesticide E', companyProduced: 'Company P', targetedPests: 'Pests E' },
        { pesticideId: 6, batchNo: 'PQR678', pesticideName: 'Pesticide F', companyProduced: 'Company Q', targetedPests: 'Pests F' },
        { pesticideId: 7, batchNo: 'STU901', pesticideName: 'Pesticide G', companyProduced: 'Company R', targetedPests: 'Pests G' },
        { pesticideId: 8, batchNo: 'VWX234', pesticideName: 'Pesticide H', companyProduced: 'Company S', targetedPests: 'Pests H' },
        { pesticideId: 9, batchNo: 'YZA567', pesticideName: 'Pesticide I', companyProduced: 'Company T', targetedPests: 'Pests I' },
        { pesticideId: 10, batchNo: 'BCD890', pesticideName: 'Pesticide J',companyProduced: 'Company U', targetedPests: 'Pests J' },
      ];
      const DistributorInfo = {
        DistributorName: 'DistributorName',
        Outlet_loc: 'Farmville, USA',
        Instock: '34',
      };
      const handleSellButtonClick = (pesticideId) => {
        // You can add logic here to handle the selling process and show a notification.
        console.log(`Product with ID ${pesticideId} sold.`);
      };
      

    return (
        <div>
            <Navbar />
            <div className='text-black mt-28'>
                <h1>Distributor Profile</h1>
                <div className="flex">
                    <div className="w-1/2 mr-4">
                        <DetailsCard
                        userType={'Distributor'}
                        farmerName={DistributorInfo.DistributorName}
                        farmLocation={DistributorInfo.Outlet_loc}
                        cropInfo={DistributorInfo.Instock}
                        />
                    </div>
                    <div className="w-1/2">
                        <div className="bg-white p-4 rounded shadow">
                            <h2 className="text-lg font-semibold mb-2">No of farmers as customers</h2>
                            <p className="text-red-700">147</p>
                        </div>
                    </div>
                </div>


                <table className='w-fullshadow-lg rounded-lg mt-4'>
                    <thead>
                        <tr >
                            <th className='p-3 text-left'>Pesticide Id</th>
                            <th className='p-3 text-left'>Batch No</th>
                            <th className='p-3 text-left'>Pesticide Name</th>
                            <th className='p-3 text-left'>Company Produced</th>
                            <th className='p-3 text-left'>Targetted Pests</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pesticidesData.map((fertilizer, index) => (
                            <tr key={index}>
                                <td className='p-3'>{fertilizer.pesticideId}</td>
                                <td className='p-3'>{fertilizer.batchNo}</td>
                                <td className='p-3'>{fertilizer.pesticideName}</td>
                                <td className='p-3'>{fertilizer.companyProduced}</td>
                                <td className='p-3'>{fertilizer.targetedPests}</td>
                                <td className="py-2 px-4 border-b">
                                    <button
                                    onClick={() => handleSellButtonClick(fertilizer.pesticideId)}
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
        </div>
    );
}

export default distributor_profile
;
