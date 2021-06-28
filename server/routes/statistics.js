const express = require("express");
const Statistics = require("../models/statistics");

const router = express.Router();


//Request get all Companies 
router.get("/", (req, res) => {
    Statistics.find()
    .then(schedule => res.json(schedule))
    .catch(err => res.status(400).json("Error : "));
});

router.get("/:id", (req, res) => {
    Statistics.findById(req.params.id)
      .then(company => res.json(company))
      .catch(err => res.status(400).json(`Error:${err}`))
  })

router.post("/add", (req, res) => {
  const newStat = new Statistics({
    year: req.body.year,
    totalaplied: req.body.totalaplied,
    selected: req.body.selected,
    totalcomanies: req.body.totalcomanies,
    department: req.body.department,


  });

  newStat.save().then(() => res.json("The new Schedule added successfully! "))
    .catch(err => res.status(400).json(err));

});

router.delete("/:id", (req, res) => {
    Statistics.findByIdAndDelete(req.params.id)
    .then(schedule => res.json(schedule))
    .catch(err => res.status(400).json("Error : "));
});





module.exports = router;