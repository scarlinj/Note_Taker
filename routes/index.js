const router = require('express').Router();
const apiRoutes = require('./apiRoutes/index.js');
const htmlRoutes = require('./htmlRoutes/index.js');

router.use('/api', apiRoutes)
// if endpoint does no start with api, return html route assume if not an api endpoint, must be a view route
router.use('/', htmlRoutes)

module.exports = router;