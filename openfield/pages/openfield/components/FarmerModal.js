import React, { useContext, useEffect, useState } from "react";
// import { farmers } from "../../_data";
import { handleSell } from "../utils";
import { Search } from "@mui/icons-material";
import { Context } from "@/context/Context";
import { useRouter } from "next/navigation";
import { ethers } from "ethers";


const FarmerModal = ({ isOpen, onClose, farmers, pesticide, children }) => {
  const [search, setSearch] = useState("")
  const { connectWallet, currentAccount } = useContext(Context);
  console.log(farmers);
  const router = useRouter();


  if (!isOpen) return null;




  const filtering = farmers.filter(item => {
    return search !== "" ? item.name.toLowerCase().includes(search.toLowerCase()) : item;
  })

<<<<<<< HEAD
      let contract = new ethers.Contract(ContractAddress, OpenField.abi, signer)
      let transaction = await contract.addPesticideFarmer(selected[0], selected[1], 10)
      await transaction.wait();
      console.log("success")
    }
  }
=======
>>>>>>> 5b8b0edb654b2a1a03a5575d297c96943d3bf2b6
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
        className="flex flex-col justify-between"
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
                    handleSell(farmer, pesticide);
                  }}
                >
                  <h3>{farmer.name} : {farmer.id.toNumber()}</h3>
                </div>
              );
            })}
          </div>
        </div>

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
