const express = require("express");

const {json} = require("express");

const app = express();

app.use(json());

const flight = require("./routes/flightRoute");

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send('My Booking Flight App');
})

app.use("/flight", flight);

app.listen(port, (err) => {
    if(err) {
        throw err;
    }
    console.log(`Live on port ${port}`)
});