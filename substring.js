const fs = require("fs");

const seedData = JSON.parse(fs.readFileSync("./seed.json", "utf8"));

function changeSeedField() {
  const newData = seedData.map((item) => {
    return { ...item, name: item.name.substring(5) };
  });

  fs.writeFileSync("./new_seed.json", JSON.stringify(newData));
}

changeSeedField();
