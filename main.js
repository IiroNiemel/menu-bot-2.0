const lift = require("./lift");
const menylist = require("./getList");

const date_ = new Date();
const date_current = date_.getDay();

const getData = () => {
  //pythonAPI.python_medari();
  //pythonAPI.python_mesta();
  lift();
  menylist();
};

const updateMeny = () => {
  console.log("Current weekday: " + date_current);

  console.log("Meny updated");
};

getData();
updateMeny();

module.exports = {
  getData: getData,
  updateMeny: updateMeny,
};
