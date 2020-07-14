const express = require('express')
const bodyParse = require('body-parser')
const TaskRoutes = require('./routes/Task')
const mongoose = require('mongoose');
const config = require('./config/keys.config.js');

const cors = require('cors');


const app = express()

mongoose.connect(config.mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected'))
    .catch((err) => console.log('Error on database connection', err));

mongoose.set('useFindAndModify', false);

app.use(bodyParse.json())
app.use(cors());

app.use('/api/tastks', TaskRoutes)

const port = process.env.PORT || 3001


app.listen(port, function () {
    console.log('server funcionando na porta ' + port)
})


