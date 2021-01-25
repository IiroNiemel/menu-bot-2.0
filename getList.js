const request = require("request");
const fs = require("fs");
const getMeny = require("./utils.js");
const getJamix = require("./lift.js");

dataArray = [];

const getRestaurants = (callback) => {
  setTimeout(() => {
    const dataBuffer = fs.readFileSync("lunch_places.json");
    const dataJSON = dataBuffer.toString();
    callback(JSON.parse(dataJSON));
  }, 2000);
};

const saveData = (meals) => {
  const dataJSON = JSON.stringify(meals);
  fs.writeFileSync("meny.json", dataJSON);
};

const getLunchlist = (callback) => {
  setTimeout(() => {
    getRestaurants((data) => {
      data.list.forEach((restaurant) => {
        getMeny(restaurant, (error, Data) => {
          if (error) {
            console.log(error);
          } else {
            dataArray.push({
              name: Data.name,
              meny: Data.meny,
            });
          }
          console.log(Data.name + "... done");
          return dataArray;
        });
      });
      setTimeout(() =>
        getJamix((error, Data) => {
          if (error) {
            console.log(error);
          } else {
            dataArray.push({
              name: Data.name,
              meny: Data.meny,
            });
            console.log(Data.name + "... done");
            saveData(dataArray);
          }
        }, 2000)
      );
    });
  }, 2000);
};

//getLunchlist((asd) => {});

module.exports = getLunchlist;
