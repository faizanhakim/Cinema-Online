// get required frameworks
const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

// get required routes
const userRoutes = require("./routes/user-routes")

// create express application
const app = express();

// configure middleware
app.use(express.json())
app.use('/user', userRoutes)

// connect to mongodb database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // start server if database is connected
        app.listen(process.env.PORT, () => {
            console.log("Server listening on port 4000")
        })
    })
    .catch((error) => {
        console.log(error)
    })


//test api
/*app.get('/', (req, res) => {
    console.log("Home page")
    return res.status(200).json({ message: "Home page reached" });
})*/
