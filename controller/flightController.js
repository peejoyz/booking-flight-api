const {Flights} = require("../models/Flight");
const {v4: uuid} = require("uuid");

//Get all Flights
exports.getAllFlight = async (req, res) => {
    try {
        const flights = Flights;

        res.status(200).json({
            message: "All Availabe Flights",
            flights
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

//Get a single Flight
exports.getSingleFlight = async (req, res) => {
    let id = req.params.id;
    const flight = Flights.find((flight) => flight.id === id);
    if(flight){
        res.status(200).json({
            message: "Flight Found",
            flight
        })
    } else {
        res.status(404).json({
            message: "No such flight"
        })
    }
}

//Add/Book Flight
exports.bookFlight = async (req, res) => {
    try {
        const {title, price} = await req.body;
        const newFlight = {
            id: uuid(),
            title,
            time : new Date().toLocaleTimeString('en-US', {
                hour: '2-digit'
            }),
            price,
            date : new Date().toLocaleDateString('es-cl')

        }

        Flights.push(newFlight);

        res.status(201).json({
            message: "New Flight added successfully",
            newFlight
        })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

//Update flight
exports.updateFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);

        const { title, price } = await req.body;
        flight.title = title,
        flight.price = price

        res.status(200).json({
            message: "Flight updated successfully",
            flight
        })
    } catch (err) {
        res.status(200).json({ message: err.message });
    }
}

//Delete flight
exports.deleteFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = Flights.find((flight) => flight.id === id);

        Flights.splice(Flights.indexOf(flight), 1);
        res.status(200).json({
            message: "Flight deleted successfully",
            flight
        })
    } catch (err) {
        res.status(200).json({ message: err });
    }
}