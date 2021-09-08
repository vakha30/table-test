const { Router } = require("express");
const table_model = require("../table_models");

const router = Router();

router.get("/", (req, res) => {
  table_model
    .getTable(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

router.post("/", (req, res) => {
  table_model
    .sortTable(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});
