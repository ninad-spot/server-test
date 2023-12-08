import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json("Working Server");
});

app.get("/", (req, res) => {
  return res.json(`Working Server ${req?.body?.id}`);
});

app.listen(9030);
