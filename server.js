const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const mongoose = require('mongoose');
const countController = require('./controllers/countController')
mongoose.connect('mongodb://person:password123@ds125001.mlab.com:25001/whatever', () => console.log('Connected to the server'));

app.use(express.static(path.join(__dirname, "public")));


// app.get('/', 
//     (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

app.put('/increase',  countController.increaseCounter);

app.get('/getcount',  countController.getCount);

// appget("/", (req, res))
app.listen(PORT, () => console.log('Listening on ...', PORT));
