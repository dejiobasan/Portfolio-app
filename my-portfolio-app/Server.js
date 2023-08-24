const express = require("express");
const cors = require("cors");
const axios = require("axios")
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;


app.get("/", (req, res) => {
    const secrets = {
        "serviceId" : process.env.REACT_APP_YOUR_SERVICE_ID,
        "templateId" : process.env.REACT_APP_YOUR_TEMPLATE_ID,
        "publicKey" : process.env.REACT_APP_YOUR_PUBLIC_KEY
    }

    res.json(secrets);
}) 



app.listen(port, function () {
    console.log("server started at port 5000.");
});