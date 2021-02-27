const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=f2050bee3275e6232a6366a60f82073c&units=metric"
    https.get(url, function (response) { console.log(response); })
    res.send("server is running")
}
)



app.listen(3000, () => console.log("server is running on port 3000"))


