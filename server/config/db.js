const Mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await Mongoose.connect(process.env.DATABASE_URI);
        console.log("Database connected successfully!");
    } catch (error) {
        console.error("database connection failed");
        process.exit(0);
    }
}


module.exports = connectDB;