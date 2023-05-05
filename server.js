const express = require("express");
const app = express(); // app allows us to set up our entire server
const port = 3000;

app.get("/", (req, res) => {
  res.send("hola, user");
  console.log("sending data back down to a user");
});

// app.listen(3000)  // simplified version
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
}); // make our server run
