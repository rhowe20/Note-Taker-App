// Dependencies

const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 1382;

// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Routes

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

app.get('/api/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (error, data) => {
    console.log(data)
    res.send(data)})
});

app.post('/api/notes', (req, res) =>{
  fs.readFile('./db/db.json', 'utf8', (error, data) => {
    console.log(data)
    const newNote = req.body
    newNote.id = uuidv4()
    const notes = JSON.parse(data)
    notes.push(newNote)
  fs.writeFile('./db/db.json', JSON.stringify(notes), () => {
    res.send(newNote);
  })  
  })
})

app.get('*', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

// App port listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));