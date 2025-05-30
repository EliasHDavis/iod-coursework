let express = require("express");

let router = express.Router();
let Controllers = require("../controllers");

//get all of a user's charts route

router.get('/allCharts', (req, res) => {
    Controllers.chartController.getCharts(res);
})

router.get('/:id', (req, res) => {
    Controllers.chartController.getChartById(req, res);
})

router.post('/create', (req, res) => {
    Controllers.chartController.createChart(req.body, res);
})

router.put('/:id', (req, res) => {
    Controllers.chartController.updateChart(req, res)
})

router.delete('/:id', (req, res) => {
    Controllers.chartController.deleteChart(req, res)
})

module.exports = router;