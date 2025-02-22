const axios = require('axios');

module.exports.getAddressCoordinate = async (address) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${process.env.GOOGLE_MAPS_API}`
 
    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                lat: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        // console.error(error);
        throw new Error('Error fetching coordinates from Google Maps API');
    }
};

module.exports.getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
    }
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${process.env.GOOGLE_MAPS_API}`;

    try {
        const response = await axios.get(url);
        // console.log('Distance Matrix API Response:', JSON.stringify(response.data, null, 2));

        if (response.data.status !== 'OK') {
            throw new Error(`Google API Error: ${response.data.status}`);
        }
        const result = response.data.rows[0].elements[0];
        if (result.status === 'ZERO_RESULTS') {
            throw new Error('No results found for the given locations');
        }
        return result;
    } catch (error) {
        console.error('Error fetching distance and time:', error.message);
        throw new Error('Unable to fetch distance and time');
    }
};

module.exports.getAutoCompleteSuggestions = async (input) => {
    if (!input) {
        throw new Error('Query is needed.');
    }
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${process.env.GOOGLE_MAPS_API}`;
    try {
        const response = await axios.get(url);
        // console.log('Google Autocomplete API Response:', JSON.stringify(response.data, null, 2));

        if (response.data.status === 'OK') { 
            return response.data.predictions;
        } else {
            throw new Error(`Google API Error: ${response.data.status}`);
        }
    } catch (error) {
        console.error('Error fetching suggestions:', error.message);
        throw new Error('Unable to fetch suggestions');
    }
};