require("dotenv").config();
const fetch = require("node-fetch");

const getTokenAddress = (tokenId) => {
  return `https://api.opensea.io/api/v1/asset/0x634d176f044dc9e639ca78aa40f5da4a4c5cdb2b/${tokenId}/?force_update=true`;
};

async function forceUpdateOpenseaMetaData(tokenId) {
  const url = getTokenAddress(tokenId);

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": process.env.OPENSEA_API_KEY,
      },
    });

    const data = await response.json();
    console.log("Success:", tokenId);
  } catch (err) {
    console.error("Error:", error);
  }
}

async function updateAllOpenseaMetaData() {
  for (let i = 3614; i < 5000; i++) {
    await forceUpdateOpenseaMetaData(i);
  }
}

updateAllOpenseaMetaData();
