// Dependencies

const express = require('express');
const path = require('path');
const fs = require('fs');

// Sets up the Express App

const app = express();
const PORT = 1382;

// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));



app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));