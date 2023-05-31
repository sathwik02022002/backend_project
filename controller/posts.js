const express = require("express");
const app = express.Router();
const { get, getById, create, update, deleted } = require("../DAO/extra");

app.get("/", async (req, res) => {
  console.log("hi");
  res.json(await get());
});
app.get("/:id", async (req, res) => {
  res.json(await getById(req.params.id));
});
app.post("/", async (req, res) => {
  if (await create(req.body)) {
    res.status(200).json({ message: "Created" });
  } else {
    res.status(500).json({ message: "error" });
  }
});
app.put("/:id", async (req, res) => {
  if (await update(req.params.id, req.body)) {
    res.status(200).json({ message: "Updated" });
  } else {
    res.status(404).json({ message: "error" });
  }
});
app.delete("/:id", async (req, res) => {
  if (await deleted(req.params.id)) {
    res.status(200).json({ message: "Deleted" });
  } else {
    res.status(404).json({ message: "error" });
  }
});

module.exports = app;
