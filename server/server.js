require("dotenv").config();
const express = require("express");
const path = require("path")
const app = express();
const port = process.env.PORT || 4000;
const connectDB = require("./config/db")

// routers 
const bookingRoutes = require('./routers/booking-router');
const pageRouters = require("./routers/page-router")

// to get form data
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory 
app.use(express.static(path.join(__dirname, '../public')));


// adding routers 
app.use('/', pageRouters);
app.use('/api', bookingRoutes);


connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at port: ${port}`);
    });
});

