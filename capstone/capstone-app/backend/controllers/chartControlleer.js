"use strict";
let Models = require("../models"); 

// finds all Charts
const getCharts = (res) => {
    Models.Chart.find({})
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
     })
};

const getChartById = (req, res) => {
    const { id } = req.params
    Models.Chart.findById(id)
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
     })
};

// creates a new Chart using JSON data POSTed in request body
const createChart = (data, res) => {
    console.log(data)
    new Models.Chart(data)
        .save()
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        })
}

// updates the Chart matching the ID from the param using JSON data POSTed in request body
const updateChart = (req, res) => {
    console.log(req.body)
    Models.Chart.findByIdAndUpdate(req.params.id, req.body, {new: true })
      .then(data => res.send({result: 200, data: data}))
      .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    })
}

// deletes the Chart matching the ID from the param
const deleteChart = (req, res) => {
    Models.Chart.findByIdAndDelete(req.params.id)
      .then(data => res.send({result: 200, data: data}))
      .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    })
} 

module.exports = {
    getCharts,
    getChartById,
    createChart,
    updateChart,
    deleteChart
}