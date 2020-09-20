const {Subject} = require('../models');


module.exports = {
 
    async createSubject({body}, res) {
        Subject.create(body)
        .then(subjectData => res.json(subjectData))
        .catch(err => res.status(400).json(err))
    },
    

}