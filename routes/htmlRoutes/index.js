const path = require('path');
const router = require('express').Router();

// router.use(index);

// does your route start withh /notes, if yes, will respond with notes.html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});


router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;