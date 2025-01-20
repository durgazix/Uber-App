const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must 3 char long']
        },
        lastname: {
            type: String,
            minlength: [3, 'last name must 3 char long']
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minlength: [5, 'Email must be atleast 5 character']
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    soketId:{
        type: String
    },
    statue:{
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, 'Color must be 3 char long']
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, 'Plate must be 3 char long']
        },
        capacity:{
            type: Number,
            required: true,
            min: [1, 'Capacity must be atleast 1']
        },
        vehicleType:{
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto']
        }
    },
    location: {
        lat:{
            type: Number,
        },
        lng:{
            type: Number,
        }
    },

});

captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

captainSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}

captainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10)
}

const captainModel = mongoose.model('captain', captainSchema);

module.exports = captainModel;