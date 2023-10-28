const express = require('express');
const app = express();
const env = require('dotenv');
const connectDb = require('./config/config');
const cors = require('cors');
const profile = require('./Router/profileRoute');
const image = require('./Router/imageRoute');


//environment variables
env.config();

//Database
connectDb();


app.use(express.json());
app.use(cors());
app.use('/api', profile);
app.use('/api', image);
// app.use("/uploads",express.static(path.join(__dirname, "./uploads/")));

app.listen(process.env.PORT, () => console.log(`Server is connected at port ${process.env.PORT}`))