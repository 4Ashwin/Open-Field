import React, { useContext, useEffect, useState } from "react";
// import { farmers } from "../../_data";
import { handleSell } from "../utils";
import { Search } from "@mui/icons-material";
import { Context } from "@/context/Context";
import { useRouter } from "next/navigation";
import { ethers } from "ethers";
import { ContractAddress } from "@/config";
import OpenField from "../../../hardhat-openfield/artifacts/contracts/OpenField.sol/OpenField.json"
import Web3Modal from "web3modal";


const FarmerModal = ({ isOpen, onClose, farmers, pesticide, children }) => {
  const [search, setSearch] = useState("")
  const { connectWallet, currentAccount } = useContext(Context);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState([])
  const [otp, setOtp] = useState("");
  console.log(farmers);
  const router = useRouter();


  if (!isOpen) return null;

  const filtering = farmers.filter(item => {
    return search !== "" ? item.name.toLowerCase().includes(search.toLowerCase()) : item;
  })

  const handleSelect = (farmer, pesticide) => {
    // send OTP
    setShow(true);
    setSelected([pesticide.id, farmer.id])

  }

  const handleSubmit = async () => {
    if (currentAccount) {

      const web3Modal = new Web3Modal()
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const signer = provider.getSigner()


      let contract = new ethers.Contract(ContractAddress, OpenField.abi, signer)
      let transaction = await contract.addPesticideFarmer(selected[0], selected[1], 10)
      await transaction.wait();
      console.log("succ")
      // print()
    }
  }
  return (
    <div
      style={{
        position: "fixed",
        top: 25,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="flex flex-col justify-between z-10"
        style={{
          background: "white",
          height: 600,
          width: 900,
          margin: "auto",
          padding: "2%",
          border: "2px solid #000",
          borderRadius: "10px",
          boxShadow: "2px solid black",
        }}
      >
        <div>

          <p className="font bold">Select farmer</p>
          <input className="border w-full mb-5" placeholder="Search here" value={search} onChange={(e) => setSearch(e.target.value)} />
          <div className="z-[10] w-full h-64 overflow-scroll overflow-x-hidden">
            {filtering.map((farmer, index) => {
              return (
                <div
                  className="rounded-lg shadow flex flex-col justify-center items-center mb-5"
                  onClick={() => {
                    handleSelect(farmer, pesticide);
                  }}
                >
                  <h3>{farmer.name} : {farmer.id.toNumber()}</h3>
                </div>
              );
            })}
          </div>
        </div>
        {
          show &&
          <input placeholder="Enter OTP" value={otp} onChange={e => setOtp(e.target.value)} />
        }
        {
          show &&
          <button onClick={() => handleSubmit()}>Confim</button>
        }
        <button
          className="with-fit rouned-lg bg-red-100 px-2"
          onClick={onClose}
        >
          CLOSE
        </button>
      </div>
    </div>
  );
};


export default FarmerModal;
