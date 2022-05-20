const db = require('../../db/db.json');
const router = require('express').Router();

// index not defined - don't use this
// router.use(index);

//this route has api prefix: the route is /api/notes
router.get('/notes', (req, res) => {
    res.json(db);
});

router.post('/notes', (req, res) => {

});

// bonus: to delete a note - send info from front end to  back end
router.delete('/notes/:ID', (req, res) => {});

// do not have a wildcard route for api routes - no '*' request


module.exports = router;