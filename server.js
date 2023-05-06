const express = require("express");
const app = express(); // app allows us to set up our entire server
const port = 3000;

app.set("view engine", "ejs"); // setting ejs as a view engine

app.get("/", (req, res) => {
  // res.render("index"); // rendering index.ejs HTML file

  res.render("index", { text: "World" }); // rendering HTML by sending info in object (can be anything) from our server down into views

  // res.send("hola, user"); // sending data to a user
  // res.sendStatus(500); // sending status code to a user
  // res.status(500).send("hi"); // sending status code w/ a message to a user
  // res.status(500).json({message: "Internal server error."}); // sending status code w/ JSON
  // res.json({ message: "Default success status 200" }); // default status code w/ JSON
  // res.download("server.js"); // sending a file to download to a user
});

// app.listen(3000)  // simplified version
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
}); // make our server run
