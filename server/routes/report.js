const express = require("express");
const router = express.Router();
const Report = require('../models/report');

//Request get all publications  
router.get("/", (req, res) => {
    Report.find()
        .then(report => res.json(report))
        .catch(err => res.status(400).json("Error : "));
       
});

//Request all new publications 
router.post("/addr", (req, res) => {
    const newReport = new Report({
        faculty:req.body.faculty,
        subject:req.body.subject,
        event1:req.body.event1,
        report1:req.body.report1,
        date:req.body.date
    });

    newReport.save().then(()=>res.json("The new Report saved successfully! ")).catch(err => res.status(400).json("Error : "));
        // console.log(req.body)

});

module.exports = router;