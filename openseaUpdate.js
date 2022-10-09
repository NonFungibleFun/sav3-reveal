require("dotenv").config();
const fetch = require("node-fetch");

const getTokenAddress = (tokenId) => {
  return `https://api.opensea.io/api/v1/asset/0x634d176f044dc9e639ca78aa40f5da4a4c5cdb2b/${tokenId}/?force_update=true`;
};

function forceUpdateOpenseaMetaData(tokenId) {
  const url = getTokenAddress(tokenId);
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": process.env.OPENSEA_API_KEY,
    },
  })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function updateAllOpenseaMetaData() {
  for (let i = 0; i < 5; i++) {
    forceUpdateOpenseaMetaData(i);
  }
}

updateAllOpenseaMetaData();
