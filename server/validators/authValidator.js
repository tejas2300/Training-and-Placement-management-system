const { check } = require("express-validator");

exports.userSignupValidator = [
  check("name").not().isEmpty().withMessage("Name is required"),
  check("email").isEmail().withMessage("Must be a valid mail address"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 char"),
  check('cpassword').isLength({ min: 6, max: 16 })
    .withMessage('Password must be between 4 to 16 characters')
    .custom(async (cpassword, { req }) => {
      const password = req.body.password
      if (password !== cpassword) {
        throw new Error('Passwords must be same')
      }
    })
];

exports.userSigninValidator = [
  check("email").isEmail().withMessage("Must be a valid mail address"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 char"),
];
