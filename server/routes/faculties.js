const express = require("express");
const router = express.Router();
// const Faculties = require('../models/faculties');
// import { isAuth, signout } from "../../frontend/src/action/authAcation";
// import { isAuth, signout } from "../../action/authAcation";

//Request get all faculties 









// const isAuth1 = () => {
//     if (process.browser) {
//         const cookieChecked = getCookie("token");
//         if (cookieChecked) {
//             if (localStorage.getItem("user")) {
//                 return JSON.parse(localStorage.getItem("user"));
//             } else {
//                 return false;
//             }
//         }
//     }
// };













router.get("/", (req, res) => {
    Faculties.find()
        .then(facultie => res.json(facultie))
        .catch(err => res.status(400).json("Error : "));
});

//Request all new Faculties 
router.post("/add", (req, res) => {
    const newFaculties = new Faculties({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        aoi: req.body.aoi,
        edu: req.body.edu,
        designation: req.body.designation,
        locationOfChamer: req.body.locationOfChamer,
    
        messages: [
            {
                userId: req.body.msg_email,
                text: "Im done with it "
            }
        ]

    });

    newFaculties.save().then(() => res.json("The new Faculty saved successfully! "))
        .catch(err => res.status(400).json(err));

});

module.exports = router;
