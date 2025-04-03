# Note Taker

## About

A simple note-taking app that runs entirely in the browser using Node.js. A user's session saves after submitting a note and can even exit the browser without losing their posts.

I cancelled Heroku and will move this to a new host eventually.  The previous Heroku live URL is at: https://sheltered-coast-28214.herokuapp.com/

## Features

This app runs entirely in the browser and saves user sessions, allowing a user to access the notes even after closing the page.  Users can add, edit, or delete posts.  These are all organized in the web page and listed with the given titles.

## Usage

From the Note-taker homepage, click the "Get Started" button.
Enter a title for your new note in the "Type your note title here" space.
Enter any text or details for your note in the "Type your note text here" space.
A floppy-disk icon will appear at the top-right, next to the "+" button.  Click on the floppy-disk icon located on the top right of the page to save your note.
To access your note, simply click the title of your note as it appears in the column on the left!
While viewing a note, you can add another note by clicking the "+" icon in the top-right.

![image of web page](/public/assets/images/App-screen.JPG)

## Install Locally with Express

Download the code at the below: 
https://github.com/scarlinj/Note_Taker

Ensure you have Node.js installed on your machine: https://nodejs.org/en

For offline use, in the main project folder, install Express:
- npm install express

Use "Node server.js" to run the .js file in Node without an .html file.  This will open a Node.js server using Express.  You can access the local site through localhost 3001.

