const express = require("express");
const app = express();
const PORT = process.env.PORT || 8008;
const cors = require("cors");

app.use(cors());
app.use(express.json())
app.use(require('./modules'))

app.listen(PORT, console.log(PORT))