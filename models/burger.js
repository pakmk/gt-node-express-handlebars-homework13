// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
};

// Export the database functions
module.exports = burger;
