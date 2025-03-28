const rideService = require('../services/ride.service');
const { validationResult } = require('express-validator');


module.exports.createRide = async (req, res) => { 
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
     const { userid, pickup, destination, vehicleType } = req.body;
     try {
        const ride =  await rideService.createRide({user: req.user._id, pickup, destination, vehicleType});

        
        res.status(201).json(ride);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports.getFare = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { pickup, destination } = req.query;

    try {
        const fare = await rideService.getFare(pickup, destination); // FIXED: Pass values correctly
        res.status(200).json(fare);
    } catch (error) {
        console.error("❌ Error in getFare:", error.message);
        res.status(500).json({ error: error.message });
    }
};
