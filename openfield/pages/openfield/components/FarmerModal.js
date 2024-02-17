import React from "react";
import { farmers } from "../../_data";
const FarmerModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
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
          {farmers.map((farmer, index) => {
            return (
              <div className="rounded-lg shadow flex flex-col justify-center items-center mb-5">
                <h3>{farmer.name}</h3>
                <button className="bg-blue-100 px-2">Sell</button>
              </div>
            );
          })}
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
