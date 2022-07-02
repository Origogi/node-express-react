const express = require("express");
const path = require("path");
const app = express();

app.listen(8080, function () {
  console.log("listening on 8080");
});

// html 을 서버가 만들면 server-side rendering, next JS
// html 을 리액트(js) 가 만들면 client-side rendering

app.use(express.static(path.join(__dirname, "my-app/build")));

app.get('/product', function(request, response) {
  response.json({ name : 'red shoes'})
});

app.get("/", function (request, response) {
  response.sendFile(path.join(__dirname, "my-app/build/index.html"));
});
