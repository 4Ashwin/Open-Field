import axios from "axios";

const sendMessage = (number, message) => {
  axios
    .post(
      "https://api.twilio.com/2010-04-01/Accounts/AC259bfa4cc673a4212083a934e70fbfa4/Messages.json",
      new URLSearchParams({
        To: `+91${number}`,
        From: "+15169813065",
        Body: message,
      }),
      {
        auth: {
          username: "AC259bfa4cc673a4212083a934e70fbfa4",
          password: "9f96ea322cf458ca71d2dba01ab0750a",
        },
      }
    )
    .then((response) => {
      console.log("Response:", response.data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const handleSell = (farmer, pesticide) => {
  const message = `INFO : ${farmer.name} bought ${pesticide.pesticideName} by ${pesticide.companyProduced}`;
  sendMessage(farmer.phoneNumber, message);
  console.log(farmer.phoneNumber, message);
};
