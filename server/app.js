//imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('upload'));

//db connect
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to DB!'))
.catch((error) => console.log(error));

//routes prefix
app.use('/api/post', require('./routes/routes'))

//start server
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));