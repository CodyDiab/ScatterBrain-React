const mongoose = require('mongoose');

const connection = 'mongodb+srv://ScatterBrainDB-User:ScatterBrainDB@maindb.rowgf.mongodb.net/SCATTERBRAIN_DB?retryWrites=true&w=majority'
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));


module.exports = mongoose.connection;


