const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const lessonRoutes = require('./routes/lessons.js');
const lessonSchema = require('./models/Lesson.js')

const retreatRoutes = require('./routes/retreats.js')
const retreatSchema = require('./models/Retreat.js')

const bedroomRoutes = require('./routes/bedrooms.js')
const bedroomSchema = require('./models/Bedroom.js')

const accommodationRoutes = require('./routes/accommodations.js')
const accommodationSchema = require('./models/Accommodation.js')

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/namaste', {useNewUrlParser : true});
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDb running successfully')
})

const port = 1234;

app.use('/lessons', lessonRoutes)
app.use('/retreats', retreatRoutes)
app.use('/bedrooms', bedroomRoutes)
app.use('/accommodations', accommodationRoutes)

app.listen(port, () => {
  console.log('Server running on ' + port);
});