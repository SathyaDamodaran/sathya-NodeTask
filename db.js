const mongoose = require("mongoose");
const config = require("./config");

exports.dbCon = function() {
  const { db: { host, port, name } } = config;
  const connectionString = `mongodb://${host}:${port}/${name}`;
  mongoose.connect(connectionString)
  .then(() =>  console.log('connection succesful'))
   .catch((err) => console.error(err));
};
