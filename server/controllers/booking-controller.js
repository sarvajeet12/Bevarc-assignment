const Booking = require("../models/booking-models");

// Function to handle booking logic
const createBooking = async (req, resp) => {

    try {
        const { name, email, phone, service, date, budget, details, address } = req.body;

        // validate
        if (!name || !email || !phone || !service || !date || !budget || !details || !address) {
            return resp.status(400).json({ message: "Please fill in all fields" });
        }

        // exists
        const bookingExists = await Booking.findOne({ email });

        if (bookingExists) {
            return resp.status(400).json({ message: "You already have a booking" });
        } else {
            const bookingCreated = await Booking.create({
                name, email, phone, service, date, budget, details, address
            });

            // if successfully created return response
            resp.status(200).json({
                message: "Booking Successfully",
                response: bookingCreated,

            })
        }
    } catch (error) {
        console.log(error);
        resp.status(500).json({ message: "Internal Server Error" });
    }

};

module.exports = { createBooking };
