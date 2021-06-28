const express = require("express");
const { findById } = require("../models/companies");
const router = express.Router();
const Companies = require('../models/companies');

//Request get all Companies 
router.get("/", (req, res) => {
  Companies.find()
    .then(Companie => res.json(Companie))
    .catch(err => res.status(400).json("Error : "));
});

//Request all new Companies 
router.post("/add", (req, res) => {
  const newCompanies = new Companies({
    name: req.body.name,
    email: req.body.email,
    date: req.body.date,
    packege: req.body.packege,
    basedOn: req.body.basedOn,
    detail: req.body.detail,
  });

  newCompanies.save().then(() => res.json("The new Companies saved successfully! "))
    .catch(err => res.status(400).json(err));

});



// find by id for only company 


router.get("/:id", (req, res) => {
  Companies.findById(req.params.id)
    .then(company => res.json(company))
    .catch(err => res.status(400).json(`Error:${err}`))
})



// find by id for company and its array 

router.get("/:id/:id2", (req, res) => {
  Companies.findById(req.params.id)
    .then(company => res.json(company))
    .catch(err => res.status(400).json(`Error:${err}`))
})


router.put("/update", (req, res) => {

  Companies.findOneAndUpdate({
    email: req.body.idu
  }, {
    $addToSet: {
      apply: {
        id: req.body.idm,
        status:" "
      }

    },
  })
    .then(company => res.json(company))
    .catch(err => res.status(400).json(`Error:${err}`))
})
router.put("/update1", (req, res) => {
  const editindex = 1
  Companies.findOneAndUpdate({
    email: req.body.c_idd, "apply.id": req.body.u_idd
  }, {
    $set: {

      ["apply.$.status"]: req.body.selection,
     

    },
  })
    .then(company => res.json(company))
    .catch(err => res.status(400).json(`Error:${err}`))
})

router.delete("/:id", (req, res) => {
  Companies.findByIdAndDelete(req.params.id)
  .then(schedule => res.json(schedule))
  .catch(err => res.status(400).json("Error : "));
});



// router.get("/count/:id", (req, res) => {
//   Companies.find.exec(function (err, results) {
//     var count = apply.length
//   console.log(count)
//   });
// })

module.exports = router;


