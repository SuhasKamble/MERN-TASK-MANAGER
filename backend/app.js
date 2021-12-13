const express = require('express');
require('./db/conn')
const router = require('./routes/router')
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express()
// middleware
app.use(express.json())
app.use(cors())
app.use('/api/task/',router)

const port = 5000 || process.env.PORT;

app.listen(port,()=>console.log(`Server is listening to port ${port}`));
