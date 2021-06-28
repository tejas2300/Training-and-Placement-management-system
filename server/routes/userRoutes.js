const express = require("express");
const router = express.Router();
const { read } = require("../controllers/userController");
const {
  requireSignin,
  authMiddleware,
} = require("../controllers/authControllers");
const Users = require("../models/user");
router.get("/", (req, res) => {
  Users.find()
      .then(user => res.json(user))
      .catch(err => res.status(400).json("Error : "));
});

router.get("/profile", requireSignin, authMiddleware, read);



router.put("/update", (req, res) => {

  Users.findOneAndUpdate({
    email: req.body.idm
  }, {
    $addToSet: {
      apply: {
        id: req.body.idu,
        status:" "
      }

    },
  })
    .then(company => res.json(company))
    .catch(err => res.status(400).json(`Error:${err}`))
})




router.get("/:id", (req, res) => {
  Users.findById(req.params.id)
    .then(company => res.json(company))
    .catch(err => res.status(400).json(`Error:${err}`))
})

router.put("/update1", (req, res) => {
  const editindex = 1
  Users.findOneAndUpdate({
    email: req.body.u_idd, "apply.id": req.body.c_idd
  }, {
    $set: {

      ["apply.$.status"]: req.body.selection,
     

    }, 
  })
    .then(company => res.json(company))
    .catch(err => res.status(400).json(`Error:${err}`))
})
// router.get("/count", (req, res) => {
//   const editindex = 1
//   Users.find(
//     // email: req.body.u_idd, "apply.id": req.body.c_idd
//   {
//     $all: {
//       ["apply.$.status"]: "Selected",
//     }, 
//   })
//     .then(company => res.json(company))
//     .catch(err => res.status(400).json(`Error:${err}`))
// })




module.exports = router;
