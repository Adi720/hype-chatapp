const express = require("express");

const cors = require("cors");

const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

// MIDDLEWARE

// Allows cross=origin requests
app.use(cors());
// Allows json payloads from frontend->backend
app.use(express.json());

app.use(express.urlencoded());

// ROUTES

app.get('/', (req, res) => {
    res.send("Hello, World!");
})

app.use('/auth', authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));