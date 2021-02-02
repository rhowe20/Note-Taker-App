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

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

// App port listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));





//API routes 
// post route to save a note 
  // ADD the new note to the db.json
// get route to get all notes
// put route to update a note (app.put())