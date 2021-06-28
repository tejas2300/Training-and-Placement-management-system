const express = require("express");

const router = express.Router();
const Schedule = require('../models/schedule');

//Request get all Companies 
router.get("/", (req, res) => {
  Schedule.find()
    .then(schedule => res.json(schedule))
    .catch(err => res.status(400).json("Error : "));
});



router.post("/add", (req, res) => {
  const newSchedule = new Schedule({
    event: req.body.event,
    date: req.body.date,
    time: req.body.time,
    department: req.body.dept,
    venue: req.body.venue,
    detail: req.body.detail,


  });

  newSchedule.save().then(() => res.json("The new Schedule added successfully! "))
    .catch(err => res.status(400).json(err));

});

router.delete("/:id", (req, res) => {
  Schedule.findByIdAndDelete(req.params.id)
    .then(schedule => res.json(schedule))
    .catch(err => res.status(400).json("Error : "));
});

module.exports = router;