const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();

app.get("/", (request, response) => {
  const res = addDays(new Date(), 100);
  response.send(`${res.getDate()}/${res.getMonth() + 1}/${res.getFullYear()} `);
});
const ress = addDays(new Date(), 100);
console.log(`${ress.getDate()}/${ress.getMonth() + 1}/${ress.getFullYear()} `);
module.exports = app;
