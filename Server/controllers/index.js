const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const subjectRoutes = require('./subject-controller.js');
const userRoutes = require('./user-controller')
const apiRoutes = require('./api');

router.use('/subject', subjectRoutes);
router.use('/', homeRoutes);
router.use('/user', userRoutes);

router.use((req, res) => {
   res.status(404).end();
});

module.exports = router;