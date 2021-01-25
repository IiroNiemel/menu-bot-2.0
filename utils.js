const request = require("request");

const getMeny = (address, callback) => {
  const url =
    "https://service2.lounaspaikka.fi:8443/api/Restaurants/hndl/hyvinkaa/" +
    encodeURIComponent(address) +
    " ";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to service!", undefined);
    } else if (response.body.length < 10) {
      callback("Unable to find meny", undefined);
    } else {
      var d = new Date();
      date = d.getDay();
      try {
        callback(undefined, {
          name: response.body.name,
          meny: response.body.menus[date - 1].text,
        });
      } catch (err) {
        callback(undefined, {
          name: "404" + err,
          meny: "404",
        });
      }
    }
  });
};

module.exports = getMeny;
