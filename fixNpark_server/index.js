const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const json = require("./json.json");     //local json as database
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config()

//middleware
app.use(cors()); //must for cross origin access
app.use(express.json()); //must for stringify posted data


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.DB_uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        // database
        const fixNparkDatabase = client.db("fixNparkDB");
        // database collections
        const users = fixNparkDatabase.collection("users");
        const parkings = fixNparkDatabase.collection("parkings");
        const booked = fixNparkDatabase.collection("booked");
        const requested = fixNparkDatabase.collection("requested");
        const contactUs = fixNparkDatabase.collection("contactUs");

        // user's api's
        app.post('/users', async (req, res) => {
            const newUser = req.body;
            const result = await users.insertOne(newUser);
            res.send(result);
        });
        app.get('/users/:email', async (req, res) => {
            const email = req.params.email.toLowerCase();
            try {
                const user = await users.findOne({ email: { $regex: new RegExp(`^${email}$`, 'i') } });
                if (!user) {
                    return res.status(404).send({ success: false, message: "User not found" });
                }
                res.send(user);
            } catch (error) {
                console.error("Error fetching user:", error);
                res.status(500).send({ success: false, message: "Server error" });
            }
        });

        // parking's  api's
        app.post('/parking/add', async (req, res) => {
            const newParking = req.body;
            const result = await parkings.insertOne(newParking);
            res.send(result);
        });
        app.get('/search-parkings', async (req, res) => {
            const now = new Date();
            await parkings.deleteMany({
                $expr: {
                    $lt: [
                        { $toDate: "$availableTill" },
                        now
                    ]
                }
            });
            const { area, date, wheels, provider } = req.query;
            try {
                const query = {};
                if (area && area !== "All") {
                    query.area = area;
                }
                if (date && date !== "All") {
                    const searchDate = new Date(date);
                    query.$expr = {
                        $and: [
                            {
                                $lte: [
                                    { $dateTrunc: { date: { $toDate: "$availableFrom" }, unit: "day" } },
                                    searchDate
                                ]
                            },
                            {
                                $gte: [
                                    { $dateTrunc: { date: { $toDate: "$availableTill" }, unit: "day" } },
                                    searchDate
                                ]
                            }
                        ]
                    };
                }
                if (wheels && wheels !== "Any") {
                    query.wheels = wheels;
                }
                if (provider && provider !== "All") {
                    query.provider = provider;
                }
                const result = await parkings.find(query).toArray();
                res.send({ success: true, data: result });
            } catch (error) {
                console.error("Search error:", error);
                const fallback = await parkings.find().toArray();
                res.send({
                    success: false,
                    error: "Something went wrong. Sending all parkings as fallback.",
                    data: fallback
                });
            }
        });
        app.delete('/parking/delete/:id', async (req, res) => {
            const id = req.params.id;
            try {
                const query = { _id: new ObjectId(id) };
                const result = await parkings.deleteOne(query);
                res.send(result); // result.deletedCount will be 1 if successful
            } catch (error) {
                res.status(500).send({ error: 'Failed to delete parking item.' });
            }
        });

        // booked's api's
        app.patch("/book-parking/:id", async (req, res) => {
            const { id } = req.params;
            const { bookedBy } = req.body;

            try {
                const parking = await parkings.findOne({ _id: new ObjectId(id) });
                if (!parking) {
                    return res.status(404).send({ success: false, message: "Parking not found" });
                };
                const now = new Date();
                if (new Date(now.getTime() + 6 * 60 * 60 * 1000) > new Date(parking.availableTill)) {
                    return res.status(400).send({
                        success: false,
                        message: "Booking requires at least 6 hours of remaining availability"
                    });
                }
                const bookingData = {
                    ...parking,
                    bookedBy,
                    bookedAt: now,
                };

                await booked.insertOne(bookingData);
                await parkings.deleteOne({ _id: new ObjectId(id) });

                res.send({ success: true, message: "Parking booked successfully" });
            } catch (error) {
                console.error("Booking error:", error);
                res.status(500).send({ success: false, message: "Internal server error", error });
            }
        });
        app.get('/booked/:email', async (req, res) => {
            const email = req.params.email;
            try {
                const bookings = await booked.find({ bookedBy: email }).toArray();
                res.send({ success: true, data: bookings });
            } catch (error) {
                console.error("Error fetching bookings:", error);
                res.status(500).send({ success: false, message: "Server error" });
            }
        });

        // requested parking's api's
        app.post('/requested-parkings/add', async (req, res) => {
            const newRequestedParking = req.body;
            console.log(newRequestedParking);
            const result = await requested.insertOne(newRequestedParking);
            res.send(result);
        });
        app.get('/requested-parkings', async (req, res) => {
            const now = new Date();
            console.log(requested);
            await requested.deleteMany({
                $expr: {
                    $lt: [
                        { $toDate: "$needFrom" },
                        now
                    ]
                }
            });
            console.log(requested);
            const { area, date, wheels } = req.query;
            try {
                const query = {};
                if (area && area !== "All") {
                    query.area = area;
                }
                if (date && date !== "All") {
                    const searchDate = new Date(date);
                    query.$expr = {
                        $and: [
                            {
                                $lte: [
                                    { $dateTrunc: { date: { $toDate: "$needFrom" }, unit: "day" } },
                                    searchDate
                                ]
                            }
                        ]
                    };
                }
                if (wheels && wheels !== "Any") {
                    query.wheels = wheels;
                }
                const result = await requested.find(query).toArray();
                console.log(query, result);
                res.send({ success: true, data: result });
            } catch (error) {
                console.error("Search error:", error);
                const fallback = await requested.find().toArray();
                res.send({
                    success: false,
                    error: "Something went wrong. Sending all requested parkings as fallback.",
                    data: fallback
                });
            }
        });


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/status', (req, res) => {
    res.send("fixNpark at Your Service :)")
});

app.listen(port, () => {
    console.log(`fixNpark is running in port: ${5000}`);
});