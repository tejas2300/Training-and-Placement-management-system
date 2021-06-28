const express = require("express");
const Resource = require("../models/eresource");
const router = express.Router();


//Request get all Companies 
router.get("/", (req, res) => {
    Resource.find()
    .then(schedule => res.json(schedule))
    .catch(err => res.status(400).json("Error : "));
});



router.post("/add", (req, res) => {
  const newResource = new Resource({
    topic: req.body.topic,
    links: req.body.links,
    department: req.body.department,
    year: req.body.year,
    date: req.body.date,
 


  });

  newResource.save().then(() => res.json("The new Resource added successfully! "))
    .catch(err => res.status(400).json(err));

});

router.delete("/:id", (req, res) => {
    Resource.findByIdAndDelete(req.params.id)
    .then(schedule => res.json(schedule))
    .catch(err => res.status(400).json("Error : "));
});

module.exports = router;