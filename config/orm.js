// Import MySQL connection
const connection = require("../config/connection.js");

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
const orm = {
  selectAll: function (tableInput, cb) {
    const queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function (err, result) {
      if (err) throw err;
      console.table(result);
      cb(result);
    });
  }
};

// Export Connection
module.exports = orm;
