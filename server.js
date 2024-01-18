const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Controller imports and routes go here

app.get('/submit-form', (req, res) => {
    res.sendFile('page2.html', {root: __dirname});
})

app.listen(4000, () => console.log("Server running on 4000"));