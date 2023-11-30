const chart = require("../models/chartModel");

const getChartData = async (req, res) => {
  console.log(req.params.id);

  const data = await chart.find();
  res.status(200).json({ data });
};

const getGraphData = async (req, res) => {

  const data = await chart.find();
  res.status(200).json({ data });
};

const postCharData = async (req, res) => {
  const { id, year, userGain, userLost } = req.body;
  if (!id || !year || !userGain || !userLost) {
    res.status(400);
    throw new Error("all fiels are manadatory");
  }
  const data = await chart.create({
    id,
    year,
    userGain,
    userLost,
  });
  //   console.log(req.body);
  res.json({
    data: data,
  });
};
module.exports = {
  getChartData,
  postCharData,
  getGraphData
};
