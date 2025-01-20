const captainController = require("../controllers/captain.controller");
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("firstname must be 3 char"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password atleast 6 letters"),
    body('vehicle.color').isLength({min: 3}).withMessage('Color must be 3 char long'),
    body('vehicle.plate').isLength({min: 3}).withMessage('Plate must be 3 char long'),
    body('vehicle.capacity').isInt({min: 1}).withMessage('Capacity must be atleast 1'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type')
  ],
  captainController.registerCaptain
);



module.exports = router;