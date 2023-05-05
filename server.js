const express = require("express");
const app = express(); // app allows us to set up our entire server
const port = 3000;

// app.listen(3000)  // simplified version
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
}); // make our server run
