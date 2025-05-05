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
        const contactUs = fixNparkDatabase.collection("contactUs");

        // user's api's
        app.get('/users', (req, res) => {
            res.send();
        })

        // parkings api's
        app.get('/search-parkings', async (req, res) => {
            const { search, subscription, parkingType, wheels, provider } = req.query;
            console.log("Received query:", search, subscription, parkingType, wheels, provider, req.query);

            try {
                const query = {};

                // Filter by address if search is not 'All'
                if (search && search.toLowerCase() !== "all") {
                    query.address = { $regex: search, $options: "i" };
                }

                // Filter by subscription if it's not the default value
                if (subscription && subscription !== "Subscription" && subscription !== "All") {
                    query.subscription = subscription;
                }

                if (parkingType && parkingType !== "Single and Bulk" && parkingType !== "All") {
                    query.parkingType = parkingType;
                }

                if (wheels && wheels !== "Any Number of Wheeler" && wheels !== "All") {
                    query.wheels = wheels;
                }

                if (provider && provider !== "All Provider" && provider !== "All") {
                    query.provider = provider;
                }

                // Only show parkings that are not yet booked
                query.bookedUser = { $in: [null, undefined] };

                console.log("MongoDB query:", query);

                const result = await parkings.find(query).toArray();

                res.send({ success: true, data: result });

            } catch (error) {
                console.error("Error fetching parkings:", error);

                // fallback: return all parkings
                const allData = await parkings.find().toArray();

                res.send({
                    success: false,
                    error: "An error occurred while fetching filtered data.",
                    data: allData
                });
            }
        });





        app.post('/parking/add', async (req, res) => {
            const newParking = req.body;
            const result = await parkings.insertOne(newParking);
            res.send(result);
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

        //contact us
        app.post('/contact', async (req, res) => {
            const { email, message } = req.body;

            const contactData = {
                email,
                message,
                createdAt: new Date(),
            };

            const result = await contactUs.insertOne(contactData);

            res.send(result)
        });

        app.post('/users', async (req, res) => {
            const newUser = req.body;
            const result = await users.insertOne(newUser);
            res.send(result);
        });
        app.get('/users/:email', async (req, res) => {
            const email = req.params.email;
            const user = await users.findOne({ email });
            res.send(user);
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
})

app.listen(port, () => {
    console.log(`fixNpark is running in port: ${5000}`);
})