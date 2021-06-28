const express = require("express");
const router = express.Router();
const Department = require('../models/department');

//Request get all publications  
router.get("/", (req, res) => {
    Department.find()
        .then(report => res.json(report))
        .catch(err => res.status(400).json("Error : "));

});

//Request all new publications 
router.post("/add", (req, res) => {
    const newReport = new Department({
        dept_name: req.body.dept_name,
     
    });

    newReport.save().then(() => res.json("The new department saved successfully! ")).catch(err => res.status(400).json("Error : "));
    // console.log(req.body)

});


router.put("/update1", (req, res) => {

    Department.findOneAndUpdate({
        dept_name: req.body.dept
    }, {
        $addToSet: {
            students: {
                id: req.body.email,
                stud: req.body.name,
                year: req.body.year,
                c_id: req.body.c_id,
               
            }

        },
    })
        .then(company => res.json(company))
        .catch(err => res.status(400).json(`Error:${err}`))
})

router.get("/:id", (req, res) => {
    Department.findById(req.params.id)
      .then(company => res.json(company))
      .catch(err => res.status(400).json(`Error:${err}`))
  })
  


module.exports = router;