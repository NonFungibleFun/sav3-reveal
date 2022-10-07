require("dotenv").config();
const pinataSDK = require("@pinata/sdk");
const fs = require("fs");

const API_KEY = process.env.PINATA_API_KEY;
const SECRET_KEY = process.env.PINATA_SECRET_KEY;

const pinata = pinataSDK(API_KEY, SECRET_KEY);

function pinDirectoryToIpfs() {
  const sourceDirectory = "./seeds";
  const options = {
    pinataMetadata: {
      name: "SAV3_METADATA",
    },
  };

  pinata
    .pinFromFS(sourceDirectory, options)
    .then((result) => {
      //handle results here
      console.log(result);
      fs.writeFileSync('./result.json', JSON.stringify(result));
    })
    .catch((err) => {
      //handle error here
      console.log(err);
    });
}

pinDirectoryToIpfs();
