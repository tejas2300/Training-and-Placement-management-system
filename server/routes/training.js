const express = require("express");

const router = express.Router();
const Training = require('../models/training');

//Request get all Companies 
router.get("/", (req, res) => {
    Training.find()
    .then(schedule => res.json(schedule))
    .catch(err => res.status(400).json("Error : "));
});



router.post("/add", (req, res) => {
    const newTraining = new Training({
      companyname: req.body.companyname,
      reg_date: req.body.reg_date,
      duration: req.body.duration,
      mode: req.body.mode,
      prerequisite: req.body.prerequisite,
    });
  
    newTraining.save().then(() => res.json("The new Training  added successfully! "))
      .catch(err => res.status(400).json(err));
  
  });

  router.delete("/:id", (req, res) => {
    Training.findByIdAndDelete(req.params.id)
    .then(schedule => res.json(schedule))
    .catch(err => res.status(400).json("Error : "));
});

  
module.exports = router;