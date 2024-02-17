import Navbar from '@/components/navbar';
import React, { useContext, useEffect, useState } from 'react';
import DetailsCard from './components/DetailsCard';
import { Context } from '@/context/Context';
import { ContractAddress } from "../../config";
import OpenField from "../../hardhat-openfield/artifacts/contracts/OpenField.sol/OpenField.json"
import { useRouter } from 'next/navigation';
import { ethers } from "ethers";


function producer_profile(props) {
  const { connectWallet, currentAccount } = useContext(Context);
  console.log(currentAccount)
  const router = useRouter()
  const [pesticidesData, setPesticidesData] = useState([])

  useEffect(() => {
    (async () => {
      if (currentAccount) {

        const provider = new ethers.providers.JsonRpcProvider("https://polygon-mumbai.g.alchemy.com/v2/A0WsVMwzZrhZNtpslk8RDsbxZvHGvyfL")
        // const provider = new ethers.providers.JsonRpcProvider()
        const Contract = new ethers.Contract(ContractAddress, OpenField.abi, provider)

        const data = await Contract.getProcudersPesticides(1);
        setPesticidesData(data)

        // setLogs(data);
        // setLoading(false)
        console.log(data, "datas")
      } else {
        router.push("/");
      }
    })()
  }, [currentAccount]);

  // const pesticidesData = [
  //   {
  //     pesticide_id: 1,
  //     batch_no: "ABC123",
  //     ingredient_info: "Active Ingredient A",
  //     manufacturing_date: "2023-01-15",
  //     expiring_date: "2023-12-31",
  //     distributer_info: {
  //       status: "Sold",
  //       company_name: "Distributor XYZ",
  //     },
  //   },
  //   {
  //     pesticide_id: 2,
  //     batch_no: "DEF456",
  //     ingredient_info: "Active Ingredient B",
  //     manufacturing_date: "2023-02-20",
  //     expiring_date: "2023-11-30",
  //     distributer_info: {
  //       status: "In Stock",
  //       company_name: "Distributor ABC",
  //     },
  //   },
  //   {
  //     pesticide_id: 3,
  //     batch_no: "GHI789",
  //     ingredient_info: "Active Ingredient C",
  //     manufacturing_date: "2023-03-10",
  //     expiring_date: "2023-10-15",
  //     distributer_info: {
  //       status: "Sold",
  //       company_name: "Distributor PQR",
  //     },
  //   },
  //   {
  //     pesticide_id: 4,
  //     batch_no: "JKL012",
  //     ingredient_info: "Active Ingredient D",
  //     manufacturing_date: "2023-04-05",
  //     expiring_date: "2023-09-30",
  //     distributer_info: {
  //       status: "In Stock",
  //       company_name: "Distributor LMN",
  //     },
  //   },
  //   {
  //     pesticide_id: 5,
  //     batch_no: "MNO345",
  //     ingredient_info: "Active Ingredient E",
  //     manufacturing_date: "2023-05-22",
  //     expiring_date: "2023-08-20",
  //     distributer_info: {
  //       status: "Sold",
  //       company_name: "Distributor RST",
  //     },
  //   },
  //   {
  //     pesticide_id: 6,
  //     batch_no: "PQR678",
  //     ingredient_info: "Active Ingredient F",
  //     manufacturing_date: "2023-06-15",
  //     expiring_date: "2023-07-31",
  //     distributer_info: {
  //       status: "In Stock",
  //       company_name: "Distributor UVW",
  //     },
  //   },
  //   {
  //     pesticide_id: 7,
  //     batch_no: "STU901",
  //     ingredient_info: "Active Ingredient G",
  //     manufacturing_date: "2023-07-01",
  //     expiring_date: "2023-06-30",
  //     distributer_info: {
  //       status: "Sold",
  //       company_name: "Distributor XYZ",
  //     },
  //   },
  // ];
  const producerInfo = {
    producerName: 'Producer ABC',
    prodLocation: 'Farmville, USA',
    Certification_Status: 'Valid until 23/04/2027',
  };


  return (
    <div>
      <Navbar />
      <div className='text-black mt-28'>
        <h1>Producer Profile</h1>
        <div className="w-1/2 mr-4">
          <DetailsCard
            userType={'Producer'}
            farmerName={producerInfo.producerName}
            farmLocation={producerInfo.prodLocation}
            cropInfo={producerInfo.Certification_Status}
          />
        </div>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Pesticide ID</th>
              <th className="py-2 px-4 border-b">Batch No</th>
              <th className="py-2 px-4 border-b">Ingredient Info</th>
              <th className="py-2 px-4 border-b">Manufacturing Date</th>
              <th className="py-2 px-4 border-b">Expiring Date</th>
              {/* <th className="py-2 px-4 border-b">Distributor Status</th>
              <th className="py-2 px-4 border-b">Distributor Company</th> */}
            </tr>
          </thead>
          <tbody>
            {pesticidesData.map((pesticide, ind) => (
              <tr key={ind}>
                <td className="py-2 px-4 border-b">{ethers.utils.formatEther(pesticide.id)}</td>
                <td className="py-2 px-4 border-b">{pesticide.batchno}</td>
                <td className="py-2 px-4 border-b">{pesticide.ingredient}</td>
                <td className="py-2 px-4 border-b">{pesticide.manufacture_date}</td>
                <td className="py-2 px-4 border-b">{pesticide.expiry_date}</td>
                {/* <td className="py-2 px-4 border-b">{pesticide.distributer_info.status}</td>
                <td className="py-2 px-4 border-b">{pesticide.distributer_info.company_name}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default producer_profile;
