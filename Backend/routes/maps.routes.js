const express = require('express');
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const mapController = require('../controllers/maps.controller');
const { query } = require('express-validator');

router.get('/get-coordinates',
    query('address').isString().notEmpty({ min: 3 }).withMessage('Invalid address'),
    authMiddleware.authUser,mapController.getCoordinates);

router.get('/get-distance-time',
    query('origin').isString().isLength({ min: 3 }).withMessage('Invalid origin'),
    query('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination'),
    authMiddleware.authUser,mapController.getDistanceTime);

router.get('/get-suggestions',
    query('input').isString().isLength({ min: 3 }).withMessage('Invalid input'),
    authMiddleware.authUser,mapController.getAutoCompleteSuggestions);

module.exports = router;