const express = require("express");
const router = express.Router();

const {
  getChartData,
  postCharData,
  getGraphData,
} = require("../controller/chartController");

router.route("/getChar").get(getChartData);

router.route("/getGraph").get(getGraphData);

router.route("/user").post(postCharData);

router.route("/user/:id").put((req, res) => {
  console.log(req.params.id);
});

router.route("/user/:id").delete((req, res) => {
  console.log(req.params.id);
});

module.exports = router;
