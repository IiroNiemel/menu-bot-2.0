const request = require("request");
const fs = require("fs");

const getJamix = (callback) => {
  const url =
    "https://www.jamix.fi/ruokalistapalvelu/rest/haku/menu/12347/63?lang=fi";

  request({ url: url, json: true }, (error, response) => {
    var d = new Date();
    date = d.getDay();
    try {
      callback(undefined, {
        name: response.body[0].kitchenName,
        meny:
          response.body[0].menuTypes[0].menus[0].days[0].mealoptions[0]
            .menuItems[0].name,
      });
    } catch (error) {
      console.log(error.message);
      /*       callback(undefined, {
        name: "Error: " + error.message + " Date: " + date,
        meny: "404",
      }); */
    }
  });
};

module.exports = getJamix;
