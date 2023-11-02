const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");


let server;





mongoose.connect(config.mongoose.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("Connected to MongoDB");
    server = app.listen(config.port, () => {
      console.log(`Server started on port ${config.port}`);
    });
  });

