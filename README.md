# Note Taker App

Welcome to the Note Taker App! Users can easily create and store notes using this dynamically created app deployed on Heroku.

## Installation

To open the Note Taker Application, open the link below.

https://lit-retreat-81311.herokuapp.com/

## Usage

Once the application has been opened, the user will see the homepage. To start taking a note, they will just need to click the Get Started button.

!['Homepage'](https://github.com/rhowe20/Note-Taker-App/blob/main/images/homepage.png)

The Get Started button will take the user to a page that has an example note to the left of the screen and will prompt them to create their own note.

!['New-Note'](https://github.com/rhowe20/Note-Taker-App/blob/main/images/note-title-screen.png)

To create a new note, the user will need to type in what they want to say into the boxes located in the middle of the page. Once the note has been completed, they will need to press the floppy disk icon located in the right hand corner of the screen to save the note.

!['Create-New-Note'](https://github.com/rhowe20/Note-Taker-App/blob/main/images/create-new-note.png)

The notes is then displayed in the lefthand column. The user can then select the notes they wish to work on. They will then be displayed back onto the column in the center of the page.

!['Note-Created'](https://github.com/rhowe20/Note-Taker-App/blob/main/images/notes-created.png)

!['Note-Selected'](https://github.com/rhowe20/Note-Taker-App/blob/main/images/select-new-note.png)

## Code

Below is some example code from the application.

The application utilizes routes and a server in order to function properly.

!['Routes'](https://github.com/rhowe20/Note-Taker-App/blob/main/images/route-code.png)

It uses Express, path, fs, and uuid packages in order to connect to the front-end.

!['Dependencies'](https://github.com/rhowe20/Note-Taker-App/blob/main/images/dependencies-express-code.png)

An array is then created to store the data given by the user.

!['Array'](https://github.com/rhowe20/Note-Taker-App/blob/main/images/array-created.png)