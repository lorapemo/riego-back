const {Router} = require('express')
const router = Router();
const { getLogInDateRange, postALog, getAllLogsInDate    } = require('../controllers/log.controllers')

router.get('/log/:fecha', getAllLogsInDate);

router.post('/log', postALog)

router.get('/logInDateRange/:fechaS/:fechaF', getLogInDateRange)




module.exports = router;