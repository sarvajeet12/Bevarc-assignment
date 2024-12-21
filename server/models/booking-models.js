const Mongoose = require("mongoose");



const bookingSchema = new Mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    service: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true
    },
    budget: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    },

});



// define the model or the collection name
const Booking = new Mongoose.model("Booking", bookingSchema);

module.exports = Booking;