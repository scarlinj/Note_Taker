const db = require('../../db/db.json');
const router = require('express').Router();
const fs = require("fs");

// index not defined - don't use this
// router.use(index);

//this route has api prefix: the route is /api/notes
// route to get notes
router.get('/notes', (req, res) => {
    res.json(db);
});

// route to post new notes
router.post('/notes', (req, res) => {
    console.log(req.body);

    const newNote = {
        id: Math.floor(Math.random() * 100),
        title: req.body.title,
        text: req.body.text,
    };

    db.push(newNote);

    fs.writeFile("db/db.json", JSON.stringify(db), (err) => {
        if(err) throw err;
    });
});

// bonus: to delete a note - send info from front end to  back end
// Below code does not work - need to define noteContents
// router.delete('/notes/:ID', (req, res) => {
//         const noteId = parseInt(req.params.id);
//         for (let i = 0; i < noteContents.length; i++) {
//             if (noteId === noteContents[i].id) {
//                 noteContents.splice(i, 1);
//                 let noteJSON = JSON.stringify(noteContents, null, 2);
//                 writeFileAsync("db/db.json", noteJSON).then(function () {
//                     console.log("Note has been deleted");
//                 });
//             }
//         }
//         res.json(noteContents);
// });

// do not have a wildcard route for api routes - no '*' request


module.exports = router;